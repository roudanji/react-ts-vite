// 店铺简易 PL 一览  Context
export type shopSimplePLContextType = {
  topConfig: topConfigType;
  bottomTableConfig: bottomTableConfigType;
};

// 顶部配置
export type topConfigType = {
  topSearchYear: string;
  topMounth: string;
  clickStoteGetValue: any;
  searchButton: () => void;
  tableLoading: boolean;
};

// 底部配置
export type bottomTableConfigType = {
  bottomTableData: any;
  clickShopGo: any;
};
