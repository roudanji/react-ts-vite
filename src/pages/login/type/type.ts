import { ReadonlyProperties } from "@/@types/publicType";
import { FormInstance } from "antd";
import { loginFormType } from "./hooksType";

// 登录 context 类型
export type LoginContextConfig = ReadonlyProperties<{
  loginConfig: loginConfigType;
}>;

// 登录 config 对象配置
export type loginConfigType = ReadonlyProperties<{
  loginForm: FormInstance;
  loginOnFinish: (params: loginFormType) => void;
}>;
