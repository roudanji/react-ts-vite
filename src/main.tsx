import App from "@/App.tsx";
import { ConfigProvider } from "antd";
import zhCN from "antd/lib/locale/zh_CN";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import "./index.less";
// Mock 模拟
import "../mock/homeTable.ts";
import "../mock/login.ts";
import "../mock/userInfo.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ConfigProvider locale={zhCN} componentSize="middle">
    <BrowserRouter>
      <RecoilRoot>
        <App />
      </RecoilRoot>
    </BrowserRouter>
  </ConfigProvider>,
);
