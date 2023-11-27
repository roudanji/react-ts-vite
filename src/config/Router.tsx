import { Skeleton } from "antd";
import React, { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

// 登录
import Login from "@/pages/login/index";
// 首页
import Home from "@/pages/home/index";
// 编辑器
import Editor from "@/pages/editUtils/editUtils";
// 测试页面
import Test from "@/pages/test/index";

// 懒加载路由公用方法
const lazyRouter = (routerComponent: React.ReactElement) => {
  return (
    <Suspense
      fallback={
        <>
          <Skeleton active />
          <Skeleton active />
        </>
      }
    >
      {routerComponent}
    </Suspense>
  );
};

const RouterData = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={lazyRouter(<Login />)} />
      <Route path="/home" element={lazyRouter(<Home />)} />
      <Route path="/test" element={lazyRouter(<Test />)} />

      {/* 编辑器 */}
      <Route path="/editor-editor" element={lazyRouter(<Editor />)} />

      {/* <Route
                path="/lazy2/*"
                element={<Lazy2 />}
            />

            <Route
                path="*"
                element={lazyRouter(<NotFound />)}
            /> */}
    </Routes>
  );
};

export default RouterData;
