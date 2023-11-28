import MenuComponent from "./components/MenuComponent";
import { MenuComponentContext } from "./context";
import store from "./hooks/hooks";

export default () => {
  const storeData = store();

  return (
    <MenuComponentContext.Provider value={storeData}>
      <MenuComponent />
    </MenuComponentContext.Provider>
  );
};
