import { createRoot } from "react-dom/client";
import { PureComponent } from "react";

const FREE_API_URL =
  "https://api.publicapis.org/entries?auth=null&cors=no&category=animals";

class FreeApi extends PureComponent {
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
      <ul>{apis.map(({ API, Link }) => (
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
