import showMessage from "@/components/messageComponent/message";
import { isInterfaceSuccess } from "@/utils/utils";
import { useForm } from "antd/es/form/Form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { loginFormType } from "../type/hooksType";
import { LoginContextConfig, loginConfigType } from "../type/type";

export default (): LoginContextConfig => {
  const [loginForm] = useForm();
  const routerPush = useNavigate();

  // 登录表单校验通过
  const loginOnFinish = async (values: loginFormType) => {
    const res = await axios.post("/login", values);
    if (isInterfaceSuccess(res.data.code)) {
      showMessage("success", `${res.data.message} - ${res.data.token}`, 3);
      localStorage.setItem("token", res.data.token);
      routerPush("/home");
    } else {
      showMessage("error", res.data.message, 3);
    }
  };

  // 登录配置对象
  const loginConfig: loginConfigType = {
    loginForm,
    loginOnFinish,
  };

  return { loginConfig };
};
