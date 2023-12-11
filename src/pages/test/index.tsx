import { TestContext } from "./context";
import store from "./hooks/hooks";
import "./index.less";
// context biubiu
export default () => {
  const storeData = store();

  return (
    <TestContext.Provider value={storeData}>
      <div className="test_box"></div>
    </TestContext.Provider>
  );
};
