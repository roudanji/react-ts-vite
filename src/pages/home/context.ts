import React, { Context } from "react";
import { shopSimplePLContextType } from "./type/type";

export const createContext = <T extends object>(defaultValue: T): Context<T> =>
  React.createContext(defaultValue);

export const shopSimplePLContext = createContext<shopSimplePLContextType>(
  {} as shopSimplePLContextType,
);
