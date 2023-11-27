import showMessage from "@/components/messageComponent/message";
import { isInterfaceSuccess } from "@/utils/utils";
import { useForm } from "antd/es/form/Form";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { loginFormType } from "../type/hooksType";
import { LoginContextConfig, loginConfigType } from "../type/type";

export default (): LoginContextConfig => {
  const routerPush = useNavigate();

  // 登录 Form 实例
  const [loginForm] = useForm();

  // 登录表单校验通过
  const loginOnFinish = async (values: loginFormType) => {
    const res = await axios.post("/login", values);
    if (isInterfaceSuccess(res.data.code)) {
      const { token } = res.data;
      showMessage("success", `${res.data.message}`);
      localStorage.setItem("token", token);
      routerPush("/home");
    } else {
      showMessage("error", res.data.message);
    }
  };

  useEffect(() => {
    localStorage.removeItem("token");
  }, []);

  // 登录配置对象
  const loginConfig: loginConfigType = {
    loginForm,
    loginOnFinish,
  };

  return { loginConfig };
};
