import React, { FC, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

type BtnWithCounterProps = {
  onAfterChange: (v: number) => void;
};

const BtnWithCounter: FC<BtnWithCounterProps> = ({ onAfterChange }) => {
  const [counter, setCounter] = useState(0); // setup state
  const handleClick = () => {                // define handler
    const newValue = counter + 1;            // implement logic
    setCounter(newValue);                    // update state 
    onAfterChange(newValue);                 // invoke callback
  };
  return (
    <button type="button" onClick={handleClick}>
      Clicked {counter} times
    </button>
  );
};

const App = () => <BtnWithCounter onAfterChange={(v) => console.log(v)} />;

const container = document.getElementById("root");
createRoot(container!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
