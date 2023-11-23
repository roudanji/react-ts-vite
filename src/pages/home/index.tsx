import { shopSimplePLContext } from "./context";
import store from "./hooks/hooks";
import "./index.less";

// 顶部搜索组件 导出组件
import TopSearchComponent from "./components/topComponent/index";
// 底部表格组件
import BottomTableComponent from "./components/bottomTableComponent/index";

export default () => {
  const storeData = store();

  return (
    <shopSimplePLContext.Provider value={storeData}>
      <div className="shopSimplePLBox">
        <div className="search-area">
          <div className="top_search_box">
            <TopSearchComponent />
          </div>
        </div>
        <div className="bottom_table_box">
          <BottomTableComponent />
        </div>
      </div>
    </shopSimplePLContext.Provider>
  );
};
