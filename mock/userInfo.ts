import Mock from "mockjs";

// 模拟getuserinfo接口
Mock.mock("/getuserinfo", "get", (options) => {
  const token = localStorage.getItem("token");

  if (token === "你获得了一只肉蛋葱鸡") {
    return {
      code: 200,
      message: "获取用户信息成功",
      data: {
        username: "your_username",
        role: "admin",
      },
    };
  } else {
    return {
      code: 401,
      message: "Token 无效",
    };
  }
});
