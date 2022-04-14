import React, { Component, FC } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import {
  BrowserRouter,
  Routes,
  Route,
  useParams,
  Navigate,
  Link,
  Outlet,
} from "react-router-dom";

const UserPage = () => {
  const { userName } = useParams();
  return (
    <div>
      Hello user: {userName}
      <div>
        View: <Outlet></Outlet>
      </div>
      <div>
        <Link to="">Default view</Link>
      </div>
      <div>
        <Link to="posts">Posts view</Link>
      </div>
    </div>
  );
};

type UserData = { user?: { authenticated: boolean } };

const UserPageGuard: FC<UserData> = ({ user }) =>
  user && user.authenticated ? <UserPage /> : <Navigate to="/login" />;

// Application
class App extends Component {
  state = { authenticated: true };
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={"Please login"} />
          <Route
            path="/:userName"
            element={<UserPageGuard user={{ authenticated: true }} />}
          >
            <Route index element={"Default View"} />
            <Route path="posts" element={"Showing all posts"} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
}

const container = document.getElementById("root");
createRoot(container!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
