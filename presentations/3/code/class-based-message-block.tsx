import ReactDOM from "react-dom";
import { PureComponent } from "react";

type MessageBlockProps = { message: string };

class MessageBlock extends PureComponent<MessageBlockProps> {
  render() {
    const { message } = this.props;
    return <div className="ma-message">{message}</div>;
  }
}

const MyApp = () => (
  <>
    <MessageBlock message="Some initial text"></MessageBlock>
  </>
);

ReactDOM.render(<MyApp />, document.getElementById("root"));
