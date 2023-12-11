import { ReadonlyProperties } from "@/@types/publicType";
import { MenuProps } from "antd";
import { ReactNode } from "react";

// 菜单 context 类型
export type MenuComponentContextConfig = ReadonlyProperties<{
  menuConfig: menuConfigType;
  fullScreenConfig: fullScreenConfigType;
  tabsBreadCrumbsConfig: tabsBreadCrumbsConfig;
}>;

// 菜单配置
export type menuConfigType = ReadonlyProperties<{
  collapsed: boolean;
  currentPath: string;
  colorBgContainer: any;
  currentDefaultOpenKeys: Array<string>;
  filterMenuItemsData: Array<MenuItemType>;
  getMenuKey: MenuProps["onClick"];
  setCollapsed: (params: boolean) => void;
  setBreadCrumbs: (params: []) => void;
  menuOnOpenChange: (params: Array<string | "">) => void;
}>;

// 全屏功能所需配置
export type fullScreenConfigType = ReadonlyProperties<{
  isFullScreen: boolean;
  toggleFullscreen: () => void;
}>;

// tabs 面包屑配置
export type tabsBreadCrumbsConfig = ReadonlyProperties<{
  breadCrumbs: Array<{ label: string; key: string; icon?: ReactNode }>;
  breadCrumbsActiveKey: string;
  breadCrumbsTabsEdit: (params: string | any) => void;
  breadCrumbsTabsChange: (params: string) => void;
}>;

// 菜单类型配置
export type MenuItemType = ReadonlyProperties<{
  key: string;
  icon?: React.ReactNode;
  label: string;
  children?: Array<MenuItemType>;
}>;
