import { MenuProps } from "antd";
import { ReactNode } from "react";

type ReadonlyProperties<T> = {
  readonly [K in keyof T]: T[K];
};

// 菜单 context 类型
export type MenuComponentContextConfig = ReadonlyProperties<{
  menuConfig: menuConfigType;
}>;

// 菜单 tabs Ts 类型
export type menuConfigType = ReadonlyProperties<{
  collapsed: boolean;
  breadCrumbsActiveKey: string;
  currentPath: string;
  currentDefaultOpenKeys: string | null | any;
  filterMenuItemsData: any;
  breadCrumbs: Array<{ label: string; key: string; icon?: ReactNode }>;
  colorBgContainer: any;
  breadCrumbsTabsEdit: (params: string | any) => void;
  breadCrumbsTabsChange: (params: string) => void;
  getMenuKey: MenuProps["onClick"];
  setCollapsed: (params: boolean) => void;
  setBreadCrumbs: (params: any) => void;
  menuOnOpenChange: (params: Array<string | "">) => void;
}>;

// 菜单类型配置
export type MenuItemType = ReadonlyProperties<{
  key: string;
  icon?: ReactNode;
  label: string;
  children?: MenuItemType[];
}>;
