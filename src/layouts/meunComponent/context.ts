import React, { Context } from "react";
import { MenuComponentContextConfig } from "./type/type";

export const createContext = <T extends object>(defaultValue: T): Context<T> =>
  React.createContext(defaultValue);

export const MenuComponentContext = createContext<MenuComponentContextConfig>(
  {} as MenuComponentContextConfig,
);
