import { LoginContext } from "./context";
import store from "./hooks/hooks";
import "./index.less";

// 登录组件
import LoginComponent from "./components/loginComponent";

export default () => {
  const storeData = store();

  return (
    <LoginContext.Provider value={storeData}>
      <div className="login_box">
        <LoginComponent />
      </div>
    </LoginContext.Provider>
  );
};
