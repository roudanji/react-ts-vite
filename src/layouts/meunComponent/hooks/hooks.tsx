import { menuUseeffect } from "@/recoil-stroe/menuUseeffect";
import { userInfo } from "@/recoil-stroe/userInfo";
import { isInterfaceSuccess } from "@/utils/utils";
import { theme } from "antd";
import { MenuProps } from "antd/lib";
import axios from "axios";
import { ReactNode, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { menuItems } from "../menus";
import {
  MenuComponentContextConfig,
  MenuItemType,
  menuConfigType,
} from "../type/type";

export default (): MenuComponentContextConfig => {
  const menuState = useRecoilValue(menuUseeffect);

  // 跳转路由
  const pushRouter = useNavigate();

  // 获取当前路由的一级路径，用于设置 defaultSelectedKeys 初始化选中高亮
  const [currentPath, setCurrentPath] = useState(
    location.pathname.split("/")[1],
  );

  // 修改 Recoil 用户信息数据
  const [, setUser] = useRecoilState(userInfo);

  // 控制左侧菜单是否要默认    收缩 / 展开
  const [collapsed, setCollapsed] = useState<boolean>(false);

  // 动态路由过滤之后的菜单数据
  const [filterMenuItemsData, setFilterMenuItemsData] = useState<
    Array<MenuItemType>
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

        const result = findMenuDataByKey(menuItems, jurisdiction).filter(
          (item) => item !== null,
        ) as Array<MenuItemType>;
        setFilterMenuItemsData(result);
      }
    }
  };

  // 查询当前点击路由对应的整个路由信息（label key）
  const findCurrentRouterKey = (
    menuData: Array<MenuItemType>,
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
  const findMenuDataByKey = (
    menuData: Array<MenuItemType>,
    selectedKeys: Array<string>,
  ) => {
    return menuData
      .map((item: MenuItemType) => {
        if (item.children) {
          const filterMenuItemsDataByKey = item.children.filter(
            (child: MenuItemType) => selectedKeys.includes(child.key),
          );
          return filterMenuItemsDataByKey.length > 0
            ? { ...item, children: filterMenuItemsDataByKey }
            : null;
        }
        return selectedKeys.includes(item.key) ? item : null;
      })
      .filter((item: MenuItemType | null) => item !== null);
  };

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  // 默认展开二级菜单
  const findParentKey = (
    menuItems: Array<MenuItemType>,
    targetKey: string,
  ): any => {
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

  // 与 findCurrentRouterKey 函数配合找到具体对应的路由 key label
  const findMenuItems = (
    menuItems: Array<MenuItemType>,
    routerKey: string,
  ): any => {
    for (const item of menuItems) {
      if (item.key === routerKey) {
        return item;
      }
      if (item.children && Array.isArray(item.children)) {
        const result = findMenuItems(item.children, routerKey);
        if (result) {
          return result;
        }
      }
    }
    return null;
  };

  // 点击 tabs ( 切换 )
  const breadCrumbsTabsChange = (key: string) => {
    setBreadCrumbsActiveKey(key);
    pushRouter(key);
    setCurrentDefaultOpenKeys([findParentKey(menuItems, key)]);
    setCurrentPath(key);
  };

  // 点击关闭 tabs 按钮
  const breadCrumbsTabsEdit = (key: string) => {
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
      setCurrentPath(copyBreadCrumbs.at(-1).key);
      pushRouter(`/${copyBreadCrumbs.at(-1).key}`);
      setBreadCrumbsActiveKey(copyBreadCrumbs.at(-1).key);
      setCurrentDefaultOpenKeys([copyBreadCrumbs.at(-1).key.split("-")[0]]);
      return copyBreadCrumbs;
    });
  };

  // 刚进入页面 添加当前页面的面包屑
  const findMenuItemByKey = (menuItems: Array<MenuItemType>) => {
    for (const item of menuItems) {
      if (item.key === location.pathname.split("/")[1]) {
        setBreadCrumbs((prevMianbao) => [...prevMianbao, item]);
        if (item.key.includes("-")) {
          // 此处是展开二级路由对应的一级路由 根据 '-' ；如果公司有对应需求可更改 split 字符
          setCurrentDefaultOpenKeys([item.key.split("-")[0]]);
        }
      }
      if (item.children && Array.isArray(item.children)) {
        findMenuItemByKey(item.children);
      }
    }
    return null;
  };

  useEffect(() => {
    getUserInfo();
    findMenuItemByKey(menuItems);
    setCurrentPath(location.pathname.split("/")[1]);
  }, [menuState]);

  // menu 菜单以及面包屑所需配置
  const menuConfig: menuConfigType = {
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
  };

  return {
    menuConfig,
  };
};
