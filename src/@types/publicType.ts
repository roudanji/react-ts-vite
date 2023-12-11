// import { ReadonlyProperties,ResponseInterfaceReturnedValue } from "@/@types/publicType";

// 设置类型只读
export type ReadonlyProperties<TypeData> = {
  readonly [k in keyof TypeData]: TypeData[k];
};

// 公用接口返回
export type ResponseInterfaceReturnedValue = ReadonlyProperties<{
  code: number;
  message: string;
}>;

// 编辑器类型
type OnHtmlChangeCallback = (html: string) => void;
// 编辑器类型
export type EditorParamsConfigType = ReadonlyProperties<{
  onHtmlChange: OnHtmlChangeCallback;
  height: string;
  value?: string;
  placeholder?: string;
}>;
