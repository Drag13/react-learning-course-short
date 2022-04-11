import React, { FC } from "react";
import { createRoot } from "react-dom/client";
import { configureStore, createSlice } from "@reduxjs/toolkit";
import { Provider, useDispatch, useSelector } from "react-redux";
import "./index.css";

const userDetailsSlice = createSlice({
  name: "userDetails",
  initialState: {
    nationality: "unknown",
  },
  reducers: {
    setNationality: (state, action) => ({...state, nationality: action.payload})
  },
});

const store = configureStore({
  reducer: {
    userDetails: userDetailsSlice.reducer,
  },
});

type UserInputProps = {};

// Component to show user details
const L3: FC = () => {
  const { nationality } = useSelector((state: any) => state.userDetails);
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
  const dispatch = useDispatch();
  const btnHandler = () => {
    const { nationality } = fetchUser();
    dispatch(userDetailsSlice.actions.setNationality(nationality));
  };
  return <MyBtn text="Fetch user" onClick={btnHandler} />;
};

// Application
class App extends React.Component {
  render() {
    return (
      <>
        <Provider store={store}>
          <h1>My App</h1>
          <L1 />
          <SomeContainer />
        </Provider>
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
