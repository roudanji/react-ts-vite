import { Button, Form, Input } from "antd";
import { memo, useContext, useMemo } from "react";
import { LoginContext } from "../context";
import "./loginComponent.less";

type FieldType = {
  username: string;
  password: string;
};

type RequiredFieldType = Required<FieldType>;

const Login = () => {
  const { loginConfig } = useContext(LoginContext);

  const memoLogin = useMemo(() => {
    return (
      <>
        <div className="login_Boxx">
          <div className="form_box">
            <Form
              name="basic"
              form={loginConfig.loginForm}
              labelCol={{ span: 5 }}
              wrapperCol={{ span: 16 }}
              style={{ width: "100%" }}
              initialValues={{ remember: true }}
              onFinish={loginConfig.loginOnFinish}
              autoComplete="off"
            >
              <div className="title">
                <h1>简陋的 Login page</h1>
              </div>
              <Form.Item<RequiredFieldType>
                label="账号"
                name="username"
                rules={[{ required: true, message: "请输入账号!" }]}
              >
                <Input placeholder="admin" />
              </Form.Item>

              <Form.Item<RequiredFieldType>
                label="密码"
                name="password"
                rules={[{ required: true, message: "请输入密码!" }]}
              >
                <Input.Password placeholder="123456" />
              </Form.Item>

              <Form.Item wrapperCol={{ offset: 10, span: 16 }}>
                <Button
                  style={{ marginTop: "20px" }}
                  type="primary"
                  htmlType="submit"
                >
                  登录
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </>
    );
  }, [loginConfig]);
  return memoLogin;
};

export default memo(Login);
