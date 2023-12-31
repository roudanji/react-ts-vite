import React, { Context } from "react";
import { LoginContextConfig } from "./type/type";

export const createContext = <T extends object>(defaultValue: T): Context<T> =>
  React.createContext(defaultValue);

export const LoginContext = createContext<LoginContextConfig>(
  {} as LoginContextConfig,
);
