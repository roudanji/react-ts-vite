import {
  AppleOutlined,
  CreditCardOutlined,
  EditOutlined,
  ProjectOutlined,
  SendOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { MenuItemType } from "./type/type";

export const menuItems: MenuItemType[] = [
  {
    key: "home",
    icon: <UserOutlined />,
    label: "首页",
  },
  {
    key: "test",
    icon: <AppleOutlined />,
    label: "测逝",
  },
  {
    key: "editor",
    icon: <EditOutlined />,
    label: "editor",
    children: [
      {
        key: "editor-editor",
        icon: <CreditCardOutlined />,
        label: "编辑器",
      },
      {
        key: "editor-roudancongji",
        icon: <SendOutlined />,
        label: "肉蛋葱鸡",
      },
      {
        key: "editor-lajiaochaorou",
        icon: <ProjectOutlined />,
        label: "辣椒炒肉",
      },
    ],
  },
];
