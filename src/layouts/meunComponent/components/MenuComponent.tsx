import funnyImg from "@/assets/funny.gif";
import RouterData from "@/config/Router";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Button, Layout, Menu, Tabs } from "antd";
import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { MenuComponentContext } from "../context";
import "./MenuComponent.less";

const { Header, Sider, Content } = Layout;

export default () => {
  const location = useLocation();
  const ifLoginPathname = location.pathname === "/login";

  const { menuConfig } = useContext(MenuComponentContext);

  const {
    collapsed,
    currentPath,
    breadCrumbs,
    colorBgContainer,
    filterMenuItemsData,
    breadCrumbsActiveKey,
    currentDefaultOpenKeys,
    TabsEdit,
    getMenuKey,
    TabsChange,
    setCollapsed,
    menuOnOpenChange,
  } = menuConfig;

  return (
    <Layout>
      {!ifLoginPathname && (
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="demo-logo-vertical" />
          <div className="logo_box">
            <img src={funnyImg} alt="" />
          </div>
          <Menu
            onClick={getMenuKey}
            theme="dark"
            mode="inline"
            defaultSelectedKeys={[currentPath]} // 初始化选中高亮
            selectedKeys={[currentPath]} // 动态更新菜单高亮
            openKeys={currentDefaultOpenKeys} // 动态初始话选中展开
            onOpenChange={menuOnOpenChange} // 点击二级嵌套路由的回调事件
            items={filterMenuItemsData} // 过滤之后的菜单结构
          />
        </Sider>
      )}

      <Layout>
        {!ifLoginPathname && (
          <>
            <Header
              style={{
                padding: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                height: "40px",
                backgroundColor: "#304056",
              }}
            >
              <div>
                {/* 控制左侧菜单是否收缩按钮 */}
                <Button
                  type="text"
                  icon={
                    collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />
                  }
                  onClick={() => setCollapsed(!collapsed)}
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
                type={breadCrumbs.length === 1 ? "card" : "editable-card"} // 是否显示关闭按钮
                onChange={TabsChange}
                activeKey={breadCrumbsActiveKey || breadCrumbs[0]?.key}
                onEdit={TabsEdit}
                items={breadCrumbs}
                hideAdd
              />
            </div>
          </>
        )}

        <Content
          style={{
            margin: "0 5px",
            minHeight: 360,
            overflow: "scroll",
            background: colorBgContainer,
          }}
        >
          <RouterData />
        </Content>
      </Layout>
    </Layout>
  );
};
