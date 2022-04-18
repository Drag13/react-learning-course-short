import { createRoot } from "react-dom/client";
import Axios from "axios";
import { PureComponent, useEffect, useState } from "react";

const FREE_API_URL =
  "https://api.publicapis.org/entries?auth=null&cors=no&category=animals";

const axios = Axios.create();
axios.interceptors.response.use((response) => {
  console.log(`${response.request.responseURL}:${response.status}`);
  return response;
});

const useFreeApi = () => {
  const [data, setApi] = useState({ errored: false, apis: [] });
  useEffect(() => {
    const abort = new AbortController();
    async function updateApi() {
      try {
        const { data } = await axios.get(FREE_API_URL, {
          signal: abort.signal,
          timeout: 1500,
        });
        const { entries } = data;
        setApi({ errored: false, apis: entries });
      } catch (error) {
        setApi({ errored: true, apis: [] });
      }
    }
    updateApi();

    return () => abort.abort();
  }, []);
  return data;
};

const FreeApi = () => {
  const { errored, apis } = useFreeApi();
  return errored ? (
    <div>Something went wrong</div>
  ) : (
    <ul>
      {apis.map(({ API, Link }) => (
        <li key={Link}>
          {API}::{Link}
        </li>
      ))}
    </ul>
  );
};

class App extends PureComponent {
  render() {
    return <FreeApi />;
  }
}

const container = document.getElementById("root");
createRoot(container!).render(<App />);
