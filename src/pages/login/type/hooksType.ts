import { ReadonlyProperties } from "@/@types/publicType";

export type loginFormType = ReadonlyProperties<{
  username: string;
  password: string;
}>;
