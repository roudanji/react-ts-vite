import App from "@/App.tsx";
import { ConfigProvider } from "antd";
import zhCN from "antd/lib/locale/zh_CN";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
// import RouterData from "./Router.tsx";
import "./index.less";
// Mock 模拟
import "../mock/testMock.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ConfigProvider locale={zhCN} componentSize="middle">
    <BrowserRouter>
      <RecoilRoot>
        <App />
        {/* <RouterData /> */}
      </RecoilRoot>
    </BrowserRouter>
  </ConfigProvider>,
);
