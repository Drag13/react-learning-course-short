import { FC } from "react";
import { createRoot } from "react-dom/client";
import React from "react";

type MessageBlockProps = { message: string };

const MessageBlock: FC<MessageBlockProps> = ({ message }) => (
  <div className="ma-message">{message}</div>
);

const MyApp = () => <MessageBlock message="Some initial text"></MessageBlock>;

const container = document.getElementById("root");
createRoot(container!).render(
  <React.StrictMode>
    <MyApp />
  </React.StrictMode>
);
