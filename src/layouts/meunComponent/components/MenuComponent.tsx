import funnyImg from "@/assets/funny.gif";
import RouterData from "@/config/Router";
import LoginComponent from "@/pages/login/index";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Button, Layout, Menu, Tabs } from "antd";
import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { MenuComponentContext } from "../context";
import "./MenuComponent.less";

const { Header, Sider, Content } = Layout;

export default () => {
  const location = useLocation();

  const { menuConfig } = useContext(MenuComponentContext);

  // 判断是否在登录页
  const isLoginPage = location.pathname === "/login";
  if (isLoginPage) {
    return <LoginComponent />;
  }

  return (
    !isLoginPage && (
      <Layout>
        <Sider trigger={null} collapsible collapsed={menuConfig.collapsed}>
          <div className="demo-logo-vertical" />
          <div className="logo_box">
            <img src={funnyImg} alt="滑小稽" />
          </div>
          <Menu
            onClick={menuConfig.getMenuKey}
            theme="dark"
            mode="inline"
            defaultSelectedKeys={[menuConfig.currentPath]} // 初始化选中高亮
            selectedKeys={[menuConfig.currentPath]} // 动态更新菜单高亮
            openKeys={menuConfig.currentDefaultOpenKeys} // 动态初始话选中展开
            onOpenChange={menuConfig.menuOnOpenChange} // 点击二级嵌套路由的回调事件
            items={menuConfig.filterMenuItemsData} // 过滤之后的菜单结构
          />
        </Sider>
        <Layout>
          <Header
            style={{
              padding: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              height: "40px",
              backgroundColor: "#001529",
            }}
          >
            <div>
              {/* 控制左侧菜单是否收缩按钮 */}
              <Button
                type="text"
                icon={
                  menuConfig.collapsed ? (
                    <MenuUnfoldOutlined />
                  ) : (
                    <MenuFoldOutlined />
                  )
                }
                onClick={() => menuConfig.setCollapsed(!menuConfig.collapsed)}
                style={{
                  fontSize: "16px",
                  width: 64,
                  height: 64,
                  color: "#fff",
                }}
              />
            </div>
            <div style={{ color: "#fff" }}>头像显示部分</div>
          </Header>
          <div className="bread_box">
            <Tabs
              type={
                menuConfig.breadCrumbs.length === 1 ? "card" : "editable-card"
              } // 是否显示关闭按钮
              onChange={menuConfig.TabsChange}
              activeKey={
                menuConfig.breadCrumbsActiveKey ||
                menuConfig.breadCrumbs[0]?.key
              }
              onEdit={menuConfig.TabsEdit}
              items={menuConfig.breadCrumbs}
              hideAdd
            />
          </div>
          <Content
            style={{
              margin: "0 5px",
              padding: 10,
              minHeight: 360,
              background: menuConfig.colorBgContainer,
            }}
          >
            <RouterData />
          </Content>
        </Layout>
      </Layout>
    )
  );
};
