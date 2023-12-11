import {
  AliwangwangOutlined,
  CreditCardOutlined,
  EditOutlined,
  LineChartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { MenuItemType } from "./type/type";

export const menuItems: Array<MenuItemType> = [
  {
    key: "home",
    icon: <UserOutlined />,
    label: "首页",
  },
  {
    key: "test",
    icon: <AliwangwangOutlined />,
    label: "测逝",
  },
  {
    key: "echarts",
    icon: <LineChartOutlined />,
    label: "图表",
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
    ],
  },
];
