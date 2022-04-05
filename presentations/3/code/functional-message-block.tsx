import ReactDOM from "react-dom";
import { FC } from "react";

type MessageBlockProps = { message: string };

const MessageBlock: FC<MessageBlockProps> = ({ message }) => (
  <div className="ma-message">{message}</div>
);

const MyApp = () => (
  <>
    <MessageBlock message="Some initial text"></MessageBlock>
  </>
);

ReactDOM.render(<MyApp />, document.getElementById("root"));
