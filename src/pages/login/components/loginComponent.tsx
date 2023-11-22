import { Button, Form, Input } from "antd";
import { useContext } from "react";
import { LoginContext } from "../context";
import "./loginComponent.less";

type FieldType = {
  username?: string;
  password?: string;
};

export default () => {
  const { loginConfig } = useContext(LoginContext);

  return (
    <div className="login_Box">
      <Form
        name="basic"
        form={loginConfig.loginForm}
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 17 }}
        style={{ width: "100%" }}
        initialValues={{ remember: true }}
        onFinish={loginConfig.loginOnFinish}
        autoComplete="off"
      >
        <Form.Item<FieldType>
          label="账号"
          name="username"
          rules={[{ required: true, message: "请输入账号!" }]}
        >
          <Input placeholder="666888" />
        </Form.Item>

        <Form.Item<FieldType>
          label="密码"
          name="password"
          rules={[{ required: true, message: "请输入密码!" }]}
        >
          <Input.Password placeholder="666888" />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 10, span: 16 }}>
          <Button type="primary" htmlType="submit">
            登录
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
