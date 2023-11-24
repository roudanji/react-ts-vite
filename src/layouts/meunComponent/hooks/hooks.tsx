import { userInfo } from "@/recoil-stroe/userInfo";
import { isInterfaceSuccess } from "@/utils/utils";
import { EditOutlined, UserOutlined } from "@ant-design/icons";
import { theme } from "antd";
import { MenuProps } from "antd/lib";
import axios from "axios";
import { ReactNode, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import {
  MenuComponentContextConfig,
  MenuItemType,
  menuConfigType,
} from "../type/type";

export default (): MenuComponentContextConfig => {
  const menuItems: MenuItemType[] = [
    {
      key: "home",
      icon: <UserOutlined />,
      label: "首页",
    },
    {
      key: "test",
      icon: <UserOutlined />,
      label: "测试",
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

  // 获取当前路由的一级路径，用于设置 defaultSelectedKeys
  const [currentPath, setCurrentPath] = useState(
    location.pathname.split("/")[1],
  );

  // 跳转路由
  const pushRouter = useNavigate();

  // 修改 Recoil 用户信息数据
  const [, setUser] = useRecoilState(userInfo);

  // 控制左侧菜单是否要默认收缩 / 展开
  const [collapsed, setCollapsed] = useState<boolean>(false);

  // 动态路由过滤之后的菜单数据
  const [filterMenuItemsData, setFilterMenuItemsData] = useState<
    MenuItemType[]
  >([]);

  // 面包屑数组
  const [breadCrumbs, setBreadCrumbs] = useState<
    Array<{ label: string; key: string; icon?: ReactNode }>
  >([]);

  // 面包屑当前选中的 key
  const [breadCrumbsActiveKey, setBreadCrumbsActiveKey] = useState<string>("");

  // 如果点击的是第二级，展开第二级的路由菜单
  const [currentDefaultOpenKeys, setCurrentDefaultOpenKeys] = useState<
    Array<string>
  >([]);

  // 获取当前用户信息
  const getUserInfo = async () => {
    const token = localStorage.getItem("token");
    if (token !== null) {
      const res = await axios.get("/getuserinfo");
      if (isInterfaceSuccess(res.data.code)) {
        setUser(res.data.data);

        const { jurisdiction } = res.data.data;
        // 读取成功之后 动态生成路由
        setFilterMenuItemsData(filterMenuItems(menuItems, jurisdiction));
      }
    }
  };

  // 与 findCurrentRouterKey 函数配合找到具体对应的路由 key label
  const findMenuItems = (menuItems: MenuItemType[], routerKey: string) => {
    for (const item of menuItems) {
      if (item.key === routerKey) {
        return item;
      }
      if (item.children && Array.isArray(item.children)) {
        const result: any = findMenuItems(item.children, routerKey);
        if (result) {
          return result;
        }
      }
    }
    return [];
  };

  // 查询当前点击路由对应的整个路由信息（label key）
  const findCurrentRouterKey = (
    menuData: MenuItemType[],
    currentRouterKey: string,
  ) => {
    // 如果面包屑数组没有当前这个路由信息 就添加到面包屑数组
    if (!menuData.some((item: MenuItemType) => item.key === currentRouterKey)) {
      setBreadCrumbs((currentValue) => [
        ...currentValue,
        findMenuItems(menuItems, currentRouterKey),
      ]);
    }
  };

  // 动态生成路由方法
  const filterMenuItems = (
    menuData: MenuItemType[],
    keysData: Array<string>,
  ) => {
    const filteredItems = menuData.filter((item: MenuItemType): any => {
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

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  // 默认展开二级菜单
  const findParentKey = (menuItems: MenuItemType[], targetKey: string): any => {
    for (const item of menuItems) {
      if (item.key === targetKey) {
        return item.key;
      }
      if (item.children && item.children.length > 0) {
        const parentKey = findParentKey(item.children, targetKey);
        if (parentKey !== null) {
          return item.key;
        }
      }
    }
    return [];
  };

  // 点击侧边路由进行跳转
  const getMenuKey: MenuProps["onClick"] = (e) => {
    findCurrentRouterKey(breadCrumbs, e.key);
    setBreadCrumbsActiveKey(e.key);
    pushRouter(e.key);
    setCurrentPath(e.key);
  };

  // 二级路由点击展开菜单触发事件
  const menuOnOpenChange = (v: Array<string | "">) => {
    setCurrentDefaultOpenKeys(v);
  };

  // 点击 tabs ( 切换 )
  const TabsChange = (key: string) => {
    setBreadCrumbsActiveKey(key);
    pushRouter(key);
    setCurrentDefaultOpenKeys([findParentKey(menuItems, key)]);
    setCurrentPath(key);
  };

  // 点击关闭 tabs 按钮
  const TabsEdit = (key: string) => {
    const copyBreadCrumbs:
      | Array<{
          label: string;
          key: string;
          icon?: ReactNode;
        }>
      | any = [...breadCrumbs];
    const findKeyItem = copyBreadCrumbs.findIndex(
      (item: MenuItemType) => item.key === key,
    );
    if (findKeyItem !== -1) {
      copyBreadCrumbs.splice(findKeyItem, 1);
    }
    setBreadCrumbs((currentValue) => {
      setBreadCrumbsActiveKey(copyBreadCrumbs.at(-1).key);
      setCurrentPath(copyBreadCrumbs.at(-1).key);
      setCurrentDefaultOpenKeys([copyBreadCrumbs.at(-1).key]);
      pushRouter(`/${copyBreadCrumbs.at(-1).key}`);
      return copyBreadCrumbs;
    });
  };

  // 刚进入页面 添加当前页面的面包屑
  const findMenuItemByKey = (menuItems: MenuItemType[]) => {
    for (const item of menuItems) {
      if (item.key === currentPath) {
        setBreadCrumbs((prevMianbao) => [...prevMianbao, item]);
        if (item.key.includes("-")) {
          // 此处是展开二级路由对应的一级路由 根据 - ；如果公司有对应需求可更改 split 字符
          setCurrentDefaultOpenKeys([item.key.split("-")[0]]);
        }
      }
      if (item.children && Array.isArray(item.children)) {
        findMenuItemByKey(item.children);
      }
    }
    return [];
  };

  // 初始化加载接口
  const initialGet = async () => {
    await getUserInfo();
  };

  useEffect(() => {
    initialGet();
    findMenuItemByKey(menuItems);
  }, []);

  // menu 菜单以及面包屑所需配置
  const menuConfig: menuConfigType = {
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
  };

  return {
    menuConfig,
  };
};
