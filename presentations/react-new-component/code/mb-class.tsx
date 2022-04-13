import React from "react";
import { PureComponent } from "react";
import { createRoot } from "react-dom/client";

type MessageBlockProps = { message: string };

class MessageBlock extends PureComponent<MessageBlockProps> {
  render() {
    const { message } = this.props;
    return <div className="ma-message">{message}</div>;
  }
}

const MyApp = () => <MessageBlock message="Some initial text"></MessageBlock>;

const container = document.getElementById("root");
createRoot(container!).render(
  <React.StrictMode>
    <MyApp />
  </React.StrictMode>
);
