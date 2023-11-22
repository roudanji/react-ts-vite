import funnyImg from "@/assets/funny.gif";
import RouterData from "@/layouts/Router";
import LoginComponent from "@/pages/login/index";
import {
  EditOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Button, Layout, Menu, theme } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./MenuComponent.less";
const { Header, Sider, Content } = Layout;

console.log("此处菜单被渲染");

export default () => {
  // 控制左侧菜单是否要默认收缩 / 展开
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const pushRouter = useNavigate();

  const getMenuKey: MenuProps["onClick"] = (e) => {
    // console.log("click ", e);
    pushRouter(e.key);
  };

  const menuItems = [
    {
      key: "home",
      icon: <UserOutlined />,
      label: "首页",
    },
    {
      key: "editor",
      icon: <EditOutlined />,
      label: "editor",
      children: [
        {
          key: "editor",
          label: "编辑器",
        },
      ],
    },
  ];

  // 判断是否在登录页
  const isLoginPage = location.pathname === "/login";

  return !isLoginPage ? (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <div className="logo_box">
          <img src={funnyImg} alt="滑小稽" />
        </div>
        <Menu
          onClick={getMenuKey}
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["home"]}
          items={menuItems}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <div className="header_box">
            <div>
              {/* 控制左侧菜单是否收缩按钮 */}
              <Button
                type="text"
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={() => setCollapsed(!collapsed)}
                style={{
                  fontSize: "16px",
                  width: 64,
                  height: 64,
                }}
              />
            </div>
            <div>头像显示部分</div>
          </div>
        </Header>
        <Content
          style={{
            margin: "24px 5px",
            padding: 24,
            minHeight: 360,
            background: colorBgContainer,
          }}
        >
          <RouterData />
        </Content>
      </Layout>
    </Layout>
  ) : (
    <LoginComponent />
  );
};
