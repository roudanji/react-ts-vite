import { notification } from "antd";

type optionsType = {
  message: string;
  description: string | Array<string> | any;
  placement?: string;
  duration?: number;
  style?: Record<any, number | string>;
};

const ShowNotification = (type: string, options: optionsType) => {
  const { placement, message, description, duration, style } = options;

  (notification as any)[type]({
    placement: placement || "bottomLeft",
    message: <b>{message}</b>,
    description,
    duration: duration || null,
    style: style || { width: "100%" },
  });
};

export default ShowNotification;

// import ShowNotification from "@/components/notificationComponent/notification";

// ShowNotification("success", {
//   message: stateData.message,
//   description: stateData.result,
//   ......
// });
