import funnyImg from "@/assets/funny.gif";
import RouterData from "@/config/Router";
import LoginComponent from "@/pages/login/index";
import { userInfo } from "@/recoil-stroe/userInfo";
import { isInterfaceSuccess } from "@/utils/utils";
import {
  EditOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Button, Layout, Menu, theme } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import "./MenuComponent.less";

const { Header, Sider, Content } = Layout;

export default () => {
  const location = useLocation();

  // 判断是否在登录页
  const isLoginPage = location.pathname === "/login";
  if (isLoginPage) {
    return <LoginComponent />;
  }

  // 跳转路由
  const pushRouter = useNavigate();

  // 修改 Recoil 用户信息数据
  const [, setUser] = useRecoilState(userInfo);

  // 控制左侧菜单是否要默认收缩 / 展开
  const [collapsed, setCollapsed] = useState<boolean>(false);

  // 过滤之后的菜单数据
  const [filterMenuItemsData, setFilterMenuItemsData] = useState<any>([]);

  // 动态生成路由方法
  const filterMenuItems = (menuData: any, keysData: Array<string>) => {
    const filteredItems = menuData.filter((item: any) => {
      if (keysData.includes(item.key)) {
        return true;
      }

      if (item.children) {
        item.children = filterMenuItems(item.children, keysData);
        return item.children.length > 0;
      }

      return false;
    });

    return filteredItems;
  };

  // 获取当前用户信息
  const getUserInfo = async () => {
    const token = localStorage.getItem("token");
    if (token !== null) {
      const res = await axios.get("/getuserinfo");
      if (isInterfaceSuccess(res.data.code)) {
        setUser(res.data.data);

        // 读取成功之后 动态生成路由
        setFilterMenuItemsData(
          filterMenuItems(menuItems, res.data.data.jurisdiction),
        );
      }
    }
  };

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  // 点击侧边路由进行跳转
  const getMenuKey: MenuProps["onClick"] = (e) => {
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
          key: "editor-editor",
          label: "编辑器",
        },
      ],
    },
  ];

  useEffect(() => {
    getUserInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // 获取当前路由的一级路径，用于设置 defaultSelectedKeys 和 defaultOpenKeys
  const currentPath = location.pathname.split("/")[1];

  const defaultOpenKeys = menuItems
    .filter(
      (item) =>
        item.children &&
        item.children.some((child) => child.key === currentPath),
    )
    .map((item) => item.key);

  return (
    !isLoginPage && (
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
            items={filterMenuItemsData}
            // items={menuItems}
          />
        </Sider>
        <Layout>
          <Header style={{ padding: 0, background: colorBgContainer }}>
            <div className="header_box">
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
    )
  );
};
