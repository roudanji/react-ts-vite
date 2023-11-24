import { MenuProps } from "antd";
import { ReactNode } from "react";

// 菜单 context 类型
export type MenuComponentContextConfig = {
  menuConfig: menuConfigType;
};

// 菜单 tabs Ts 类型
export type menuConfigType = {
  collapsed: boolean;
  breadCrumbsActiveKey: string;
  currentPath: string;
  currentDefaultOpenKeys: string | null | any;
  filterMenuItemsData: any;
  breadCrumbs: Array<{ label: string; key: string; icon?: ReactNode }>;
  colorBgContainer: any;
  TabsEdit: (params: string | any) => void;
  TabsChange: (params: string) => void;
  getMenuKey: MenuProps["onClick"];
  setCollapsed: (params: boolean) => void;
  menuOnOpenChange: (params: Array<string | "">) => void;
};

// 菜单类型配置
export type MenuItemType = {
  key: string;
  icon?: ReactNode;
  label: string;
  children?: MenuItemType[];
};
