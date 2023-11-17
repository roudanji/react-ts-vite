// index.tsx
import Router from '@/Router.tsx';
import { ConfigProvider } from 'antd';
import jaJP from 'antd/es/locale/ja_JP';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // 引入 BrowserRouter
import { RecoilRoot } from 'recoil';
import './index.less';

import '../mock/testMock.ts';


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