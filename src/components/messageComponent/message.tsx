import { message } from "antd";

type MessageType =
  | "success"
  | "info"
  | "warning"
  | "error"
  | "loading"
  | "ADD"
  | "DELETE"
  | "EDIT";

const ShowMessage = (
  type: MessageType,
  content?: string,
  duration?: number,
  onClose?: () => void,
) => {
  let messageType: MessageType = type;
  let messageContent: string;

  switch (type) {
    case "ADD":
      messageType = "success";
      messageContent = content || "新增成功";
      break;
    case "DELETE":
      messageType = "success";
      messageContent = content || "删除成功";
      break;
    case "EDIT":
      messageType = "success";
      messageContent = content || "编辑成功";
      break;
    default:
      messageContent = content || "";
  }

  const config = {
    content: messageContent,
    duration: duration || 2.5,
    onClose,
  };

  (message as any)[messageType](config);
};

export default ShowMessage;

// import showMessage from "@/components/messageComponent/message";
// showMessage("error", res.data.message, 3);
