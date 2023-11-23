import funnyImg from "@/assets/funny.gif";
import RouterData from "@/config/Router";
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
import { useLocation, useNavigate } from "react-router-dom";
import "./MenuComponent.less";
const { Header, Sider, Content } = Layout;

export default () => {
  const location = useLocation();

  const pushRouter = useNavigate();

  // 控制左侧菜单是否要默认收缩 / 展开
  const [collapsed, setCollapsed] = useState(false);

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const getMenuKey: MenuProps["onClick"] = (e) => {
    // console.log("click ", e);
    pushRouter(e.key);
  };

  // 判断是否在登录页
  const isLoginPage = location.pathname === "/login";

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
          key: "editor-editor",
          label: "编辑器",
        },
      ],
    },
  ];

  // 获取当前路由的一级路径，用于设置 defaultSelectedKeys 和 defaultOpenKeys
  const currentPath = location.pathname.split("/")[1];

  const defaultOpenKeys = menuItems
    .filter(
      (item) =>
        item.children &&
        item.children.some((child) => child.key === currentPath),
    )
    .map((item) => item.key);

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
          defaultSelectedKeys={[currentPath]}
          defaultOpenKeys={defaultOpenKeys}
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
            padding: 10,
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
