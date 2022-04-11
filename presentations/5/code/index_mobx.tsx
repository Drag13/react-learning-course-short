import React, { FC } from "react";
import { createRoot } from "react-dom/client";
import { makeAutoObservable } from "mobx";
import { observer } from "mobx-react-lite";
import "./index.css";

// store
class UserDetailsStore {
  nationality = "unknown";
  constructor() {
    // important!
    makeAutoObservable(this);
  }

  setNationality(v: string) {
    this.nationality = v;
  }
}

const userDetailsStore = new UserDetailsStore();

type UserInputProps = {};

// Component to show user details
const L3: FC = observer(() => {
  const { nationality } = userDetailsStore;
  return <strong>{nationality}</strong>;
});

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
  const btnHandler = () => {
    const { nationality } = fetchUser();
    userDetailsStore.setNationality(nationality);
  };
  return <MyBtn text="Fetch user" onClick={btnHandler} />;
};

// Application
class App extends React.Component {
  render() {
    return (
      <>
        <h1>My App</h1>
        <L1 />
        <SomeContainer />
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
