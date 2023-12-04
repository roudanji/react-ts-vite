/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import funnyImg from "@/assets/funny.gif";
import ShowMessage from "@/components/messageComponent/message";
import RouterData from "@/config/Router";
import Login from "@/pages/login/index";
import { userInfo } from "@/recoil-stroe/userInfo";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Button, Dropdown, Layout, Menu, Tabs } from "antd";
import { memo, useContext, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { MenuComponentContext } from "../../context";
import "./MenuComponent.less";
const { Header, Sider, Content } = Layout;

const MenuComponent = () => {
  const location = useLocation();
  const ifLoginPathname = location.pathname === "/login";

  const pushRouter = useNavigate();
  const { menuConfig } = useContext(MenuComponentContext);

  const {
    collapsed,
    currentPath,
    breadCrumbs,
    colorBgContainer,
    filterMenuItemsData,
    breadCrumbsActiveKey,
    currentDefaultOpenKeys,
    breadCrumbsTabsEdit,
    getMenuKey,
    breadCrumbsTabsChange,
    setCollapsed,
    setBreadCrumbs,
    menuOnOpenChange,
  } = menuConfig;

  // 当前用户信息
  const currentUserInfo = useRecoilValue(userInfo);

  const onClick: MenuProps["onClick"] = ({ key }) => {
    if (key === "1") {
      setBreadCrumbs([]);
      ShowMessage("success", "已退出，请重新登录");
      pushRouter("/login");
    }
  };
  const items: MenuProps["items"] = [
    {
      label: "退出登录",
      key: "1",
    },
  ];

  const memoMenuComponent = useMemo(() => {
    return !ifLoginPathname ? (
      <Layout className="layout">
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

        <Layout>
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
              <div className="user_selector_box">
                <Dropdown menu={{ items, onClick }} placement="bottom">
                  <span
                    style={{ color: "#fff" }}
                    onClick={(e: any) => e.preventDefault()}
                  >
                    {currentUserInfo ? currentUserInfo.username : ""}
                  </span>
                </Dropdown>
              </div>
            </Header>
            <div className="bread_box">
              <Tabs
                type={breadCrumbs.length === 1 ? "card" : "editable-card"} // 是否显示关闭按钮
                onChange={breadCrumbsTabsChange}
                activeKey={breadCrumbsActiveKey || breadCrumbs[0]?.key}
                onEdit={breadCrumbsTabsEdit}
                items={breadCrumbs}
                hideAdd
              />
            </div>
          </>

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
    ) : (
      <Login></Login>
    );
  }, [menuConfig]);

  return memoMenuComponent;
};
export default memo(MenuComponent);
