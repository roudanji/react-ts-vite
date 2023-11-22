// index.tsx
import Router from "@/Router.tsx";
import { ConfigProvider } from "antd";
import jaJP from "antd/es/locale/ja_JP";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import "./index.less";
// Mock 模拟
import "../mock/testMock.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ConfigProvider locale={jaJP} componentSize="middle">
    <RecoilRoot>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </RecoilRoot>
  </ConfigProvider>,
);
