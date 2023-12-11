import { TestContext } from "./context";
import store from "./hooks/hooks";
import "./index.less";
// context biubiu
export default () => {
  const storeData = store();

  return (
    <TestContext.Provider value={storeData}>
      <div className="test_box">
        <p>这里只是一个 context 开发模式的一个文件示例</p>
        <p>vs code 可全局搜索 [context biubiu]</p>
      </div>
    </TestContext.Provider>
  );
};
