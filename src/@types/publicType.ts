// import { ReadonlyProperties,ResponseType } from "@/@types/publicType";

// 公用设置类型只读
export type ReadonlyProperties<TypeData> = {
  readonly [k in keyof TypeData]: TypeData[k];
};

// 公用接口返回 有多余数据使用继承
export type ResponseType = {
  code: number;
  message: string;
};

// 编辑器类型
type OnHtmlChangeCallback = (html: string) => void;
// 编辑器类型
export type EditorParamsConfigType = {
  onHtmlChange: OnHtmlChangeCallback;
  height: string;
  value?: string;
  placeholder?: string;
};
