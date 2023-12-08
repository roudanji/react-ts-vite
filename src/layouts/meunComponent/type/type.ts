import { ReadonlyProperties } from "@/@types/publicType";
import { MenuProps } from "antd";
import { ReactNode } from "react";

// 菜单 context 类型
export type MenuComponentContextConfig = ReadonlyProperties<{
  menuConfig: menuConfigType;
  fullScreenConfig: fullScreenConfigType;
  tabsBreadCrumbsConfig: any;
}>;

// 菜单配置
export type menuConfigType = ReadonlyProperties<{
  collapsed: boolean;
  currentPath: string;
  currentDefaultOpenKeys: string | null | any;
  filterMenuItemsData: any;
  colorBgContainer: any;
  getMenuKey: MenuProps["onClick"];
  setCollapsed: (params: boolean) => void;
  setBreadCrumbs: (params: any) => void;
  menuOnOpenChange: (params: Array<string | "">) => void;
}>;

// 全屏功能所需配置
export type fullScreenConfigType = {
  isFullScreen: boolean;
  toggleFullscreen: () => void;
};

// tabs 面包屑配置
export type tabsBreadCrumbsConfig = {
  breadCrumbs: Array<{ label: string; key: string; icon?: ReactNode }>;
  breadCrumbsActiveKey: string;
  breadCrumbsTabsEdit: (params: string | any) => void;
  breadCrumbsTabsChange: (params: string) => void;
};

// 菜单类型配置
export type MenuItemType = ReadonlyProperties<{
  key: string;
  icon?: ReactNode;
  label: string;
  children?: MenuItemType[];
}>;
