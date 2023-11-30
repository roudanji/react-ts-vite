import App from "@/App.tsx";
import { ConfigProvider, message } from "antd";
import zhCN from "antd/es/locale/zh_CN";
import dayjs from "dayjs";
import "dayjs/locale/zh-cn";
import arraySupport from "dayjs/plugin/arraySupport";
import timezone from "dayjs/plugin/timezone";
import toArray from "dayjs/plugin/toArray";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import "./index.less";
dayjs.extend(timezone);
dayjs.extend(arraySupport);
dayjs.extend(toArray);
dayjs.tz.setDefault("Asia/Shanghai");

// 轻提示最多同时显示数量
message.config({ maxCount: 3 });

// Mock 模拟
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
