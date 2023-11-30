import Mock from "mockjs";

// 模拟登录接口
Mock.mock("/login", "post", (options) => {
  const { username, password } = JSON.parse(options.body);

  if (username === "admin" && password === "123456") {
    return {
      code: 200,
      message: "登录成功",
      token: "你获得了一只肉蛋葱鸡",
    };
  } else {
    return {
      code: 401,
      message: "用户名或密码错误",
    };
  }
});
