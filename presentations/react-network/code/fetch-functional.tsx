import { createRoot } from "react-dom/client";
import { PureComponent, useEffect, useState } from "react";

const FREE_API_URL =
  "https://api.publicapis.org/entries?auth=null&cors=no&category=animals";

const useFreeApi = () => {
  const [data, setApi] = useState({ errored: false, apis: [] });
  useEffect(() => {
    async function updateApi() {
      try {
        const rawData = await fetch(FREE_API_URL);
        const { entries } = await rawData.json();
        setApi({ errored: false, apis: entries });
      } catch (error) {
        setApi({ errored: true, apis: [] });
      }
    }
    updateApi();
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

class FreeApiCB extends PureComponent {
  state = { errored: false, apis: [] };

  async componentDidMount() {
    try {
      const rawData = await fetch(FREE_API_URL);
      const { entries } = await rawData.json();
      this.setState({ ...this.state, apis: entries });
    } catch (e) {
      this.setState({ errored: true, apis: [] });
    }
  }

  render() {
    const { apis, errored } = this.state;
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
  }
}

class App extends PureComponent {
  render() {
    return <FreeApi />;
  }
}

const container = document.getElementById("root");
createRoot(container!).render(<App />);
