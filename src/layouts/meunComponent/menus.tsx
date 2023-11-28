import { EditOutlined, UserOutlined } from "@ant-design/icons";
import { MenuItemType } from "./type/type";

export const menuItems: MenuItemType[] = [
  {
    key: "home",
    icon: <UserOutlined />,
    label: "首页",
  },
  {
    key: "test",
    icon: <UserOutlined />,
    label: "测逝",
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
      {
        key: "editor-roudancongji",
        label: "肉蛋葱鸡",
      },
      {
        key: "editor-lajiaochaorou",
        label: "辣椒炒肉",
      },
    ],
  },
];
