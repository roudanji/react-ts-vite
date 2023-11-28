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
