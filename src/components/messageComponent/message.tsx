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
    duration: duration || 2,
    onClose,
  };

  (message as any)[type](config);
};

export default showMessage;

// import showMessage from "@/components/messageComponent/message";
// showMessage("error", res.data.message, 3);
