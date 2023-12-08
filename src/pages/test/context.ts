import React, { Context } from "react";
import { TestContextType } from "./type/contextType";

export const createContext = <T extends object>(defaultValue: T): Context<T> =>
  React.createContext(defaultValue);

export const TestContext = createContext<TestContextType>(
  {} as TestContextType,
);
