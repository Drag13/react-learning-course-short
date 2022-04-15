import React, { ChangeEvent, Component, FormEvent, PureComponent } from "react";
import { createRoot } from "react-dom/client";

class MyForm extends PureComponent {
  state = { name: "test" };
  render() {
    return (
      <form onSubmit={this._handleSubmit}>
        <h1>My form</h1>
        <input
          type="text"
          name="name"
          id="name"
          value={this.state.name}
          onChange={this._handleChange}
        />
        <button>Submit</button>
      </form>
    );
  }

  private _handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(`Form state`, this.state);
  };

  private _handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    this.setState({ name: e.target.value });
}

// Application
class App extends Component {
  state = { authenticated: true };
  render() {
    return <MyForm />;
  }
}

const container = document.getElementById("root");
createRoot(container!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
