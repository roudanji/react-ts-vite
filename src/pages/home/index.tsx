import { message } from "antd";

export default () => {
  const token = localStorage.getItem("token");
  if (!token) {
    message.error("This is an error message");
    window.location.href = "/login";
  }

  return (
    <div>
      <div>首页</div>
    </div>
  );
};
