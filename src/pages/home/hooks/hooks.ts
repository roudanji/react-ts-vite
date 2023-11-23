import axios from "axios";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import {
  bottomTableConfigType,
  shopSimplePLContextType,
  topConfigType,
} from "../type/type";

export default (): shopSimplePLContextType => {
  // 顶部配置 年
  const [topSearchYear, setTopSearchYear] = useState(
    dayjs().format("YYYY/MM/DD"),
  );

  // 顶部配置 月
  const [topMounth, setTopMounth] = useState(dayjs().format("MM"));

  // 存储的当前搜索的店铺
  const [currentSearchStore, setCurrentSearchStore] = useState("");

  // 底部表格数据
  const [bottomTableData, setBottomTableData] = useState([]);

  // 控制检索 loading 效果
  const [tableLoading, setTableLoading] = useState<boolean>(false);

  // 点击获取店铺的 value 查询对应的店铺进行渲染
  const clickStoteGetValue = (item: string) => {
    setCurrentSearchStore(item);
  };

  // 检索按钮
  const searchButton = () => {
    setTableLoading(true);

    setTimeout(() => {
      test();
      setTableLoading(false);
    }, 1000);
  };

  // 点击店铺名称( 获取单行数据之后 )进行跳转
  const clickShopGo = (item: any) => {
    console.log("item", item);
  };

  // 获取模拟的表格数据
  const test = () => {
    axios
      .post("/variable", {
        params: {
          fieldValue: currentSearchStore,
        },
      })
      .then((response) => {
        setBottomTableData(response.data.testData);
      });
  };

  useEffect(() => {
    test();
  }, []);

  // 顶部配置
  const topConfig: topConfigType = {
    topSearchYear,
    topMounth,
    clickStoteGetValue,
    searchButton,
    tableLoading,
  };

  // 底部表格配置
  const bottomTableConfig: bottomTableConfigType = {
    bottomTableData,
    clickShopGo,
  };
  return { topConfig, bottomTableConfig };
};
