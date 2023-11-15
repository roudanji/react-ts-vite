// index.tsx
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import '../mock/testMock.ts';
import { ConfigProvider } from "antd";
import jaJP from "antd/es/locale/ja_JP";
import Router from '@/Router.tsx';
import { BrowserRouter } from 'react-router-dom';  // 引入 BrowserRouter

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ConfigProvider locale={jaJP} componentSize="middle">
    <RecoilRoot>
      {/* 使用 BrowserRouter 包裹你的应用 */}
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </RecoilRoot>
  </ConfigProvider>
);