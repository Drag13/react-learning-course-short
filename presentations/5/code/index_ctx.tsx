import React, { createContext, FC, useContext } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

// Context that acts as a store
const Context = createContext({
  nationality: "unknown",
  setNationality: (_: string) => {},
});

type UserInputProps = {};

// Component to show user details
const L3: FC = () => {
  const { nationality } = useContext(Context);
  return <strong>{nationality}</strong>;
};

// Some component #2
const L2: FC<UserInputProps> = () => <L3 />;

// Some component #1
const L1: FC<UserInputProps> = () => <L2 />;

// Simple styled button
type BtnProps = { onClick: () => void; text: string };
const MyBtn: FC<BtnProps> = ({ onClick, text }) => (
  <button type="button" onClick={onClick}>
    {text}
  </button>
);

// pretend to be fetch
const fetchUser = () => ({ nationality: "Ukrainian" });

// Some component with logic
type SomeContainerProps = {};
const SomeContainer: FC<SomeContainerProps> = () => {
  const ctx = useContext(Context);
  const btnHandler = () => {
    const { nationality } = fetchUser();
    ctx.setNationality(nationality);
  };
  return <MyBtn text="Fetch user" onClick={btnHandler} />;
};

// Application
class App extends React.Component {
  state = {
    nationality: "Unknown",
    setNationality: (v: string) => {
      this.setState({ ...this.state, nationality: v });
    },
  };
  render() {
    return (
      <>
        <Context.Provider value={this.state}>
          <h1>My App</h1>
          <L1 />
          <SomeContainer />
        </Context.Provider>
      </>
    );
  }
}

const container = document.getElementById("root");
createRoot(container!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
