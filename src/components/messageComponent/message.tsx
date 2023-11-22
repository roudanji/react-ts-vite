import { message } from "antd";

type MessageType = "success" | "info" | "warning" | "error" | "loading";

const showMessage = (
  type: MessageType,
  content: string,
  duration?: number,
  onClose?: () => void,
) => {
  const config = {
    content,
    duration,
    onClose,
  };

  (message as any)[type](config);
};

export default showMessage;
