import { notification } from "antd";

type NotificationType = "success" | "info" | "warning" | "error";

type OptionsType = {
  message: string;
  description: string | Array<string> | any;
  placement?: string;
  duration?: number;
  style?: Record<any, number | string>;
};

const ShowNotification = (
  type: NotificationType,
  { placement, message, description, duration, style }: OptionsType,
) => {
  (notification as any)[type]({
    placement: placement ?? "bottomRight",
    message: <b>{message}</b>,
    description,
    duration: duration ?? null,
    style: style ?? { width: "100%" },
  });
};

export default ShowNotification;

// import ShowNotification from "@/components/notificationComponent/notification";

// ShowNotification("success", {
//   message: stateData.message,
//   description: stateData.result,
// });
