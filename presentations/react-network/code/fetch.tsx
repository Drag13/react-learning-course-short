import { FC, PureComponent, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";

const FREE_API_URL = "https://api.publicapis.org/entries?auth=null&cors=no";

type Api = { api: string; link: string };
type Category = "animals" | "weather";
const useFreeApi = (category: Category = "animals"): Api[] => {
  const [apis, setResponse] = useState<Api[]>([]);

  useEffect(() => {
    async function fetchApi() {
      const URL = `${FREE_API_URL}&category=${category}`;
      const { entries } = await fetch(URL).then((x) => x.json());
      setResponse(entries.map((e: any) => ({ api: e.API, link: e.Link })));
    }

    fetchApi();
  }, [category]);
  return apis;
};

const FreeApi = () => {
  const api = useFreeApi("weather");
  return api.length ? <ApiList api={api} /> : <>"fetching"</>;
};

const ApiList: FC<{ api: Api[] }> = ({ api }) => (
  <>
    {api.map(({ api, link }) => (
      <div key={link}>
        {api}::{link}
      </div>
    ))}
  </>
);

class App extends PureComponent {
  render() {
    return <FreeApi />;
  }
}

const container = document.getElementById("root");
createRoot(container!).render(<App />);
