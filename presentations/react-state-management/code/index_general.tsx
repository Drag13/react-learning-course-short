import React, { FC } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

type UserInputProps = { nationality: string };

// Component to show user details
const L3: FC<UserInputProps> = ({ nationality }) => (
  <strong>{nationality}</strong>
);

// Some component #2
const L2: FC<UserInputProps> = ({ nationality }) => (
  <L3 nationality={nationality} />
);

// Some component #1
const L1: FC<UserInputProps> = ({ nationality }) => (
  <L2 nationality={nationality} />
);

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
type SomeContainerProps = { onDetailGet: (v: string) => void };
const SomeContainer: FC<SomeContainerProps> = ({ onDetailGet }) => {
  // Performance issue
  const btnHandler = () => {
    const userDetails = fetchUser();
    onDetailGet(userDetails.nationality);
  };
  return <MyBtn text="Fetch user" onClick={btnHandler} />;
};

// Application
class App extends React.Component {
  state = { nationality: "Unknown" };
  render() {
    const { nationality } = this.state;
    return (
      <>
        <h1>My App</h1>
        <L1 nationality={nationality} />
        <SomeContainer onDetailGet={this.setNationality} />
      </>
    );
  }
  setNationality = (v: string) => this.setState({ nationality: v });
}

const container = document.getElementById("root");
createRoot(container!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
