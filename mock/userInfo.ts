import Mock from "mockjs";

// 模拟 getuserinfo 接口
Mock.mock("/getuserinfo", "get", (options) => {
  const token = localStorage.getItem("token");

  if (token === "你获得了一只肉蛋葱鸡") {
    return {
      code: 200,
      message: "获取用户信息成功",
      data: {
        username: "肉蛋葱鸡",
        role: "超级管理员",
        sex: "男",
        age: 20,
        jurisdiction: ["home", "editor-editor", "test", "echarts"], // 权限数据，根据菜单的 key 属性
      },
    };
  } else {
    return {
      code: 401,
      message: "Token 无效",
    };
  }
});
