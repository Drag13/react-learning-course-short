import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

type BtnWithCounterProps = {
  onAfterChange: (v: number) => void;
};

class BtnWithCounter extends React.PureComponent<BtnWithCounterProps> {
  state = { counter: 0 };

  render() {
    const { counter } = this.state;
    return (
      <button type="button" onClick={this.handleClick}>
        Clicked {counter} times
      </button>
    );
  }

  handleClick = () => {
    const { counter: oldValue } = this.state;
    const counter = oldValue + 1;
    this.setState({ counter });
    this.props.onAfterChange(counter);
  };
}

const App = () => <BtnWithCounter onAfterChange={(v) => console.log(v)} />;

const container = document.getElementById("root");
createRoot(container!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
