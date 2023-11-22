/**
 * @组件库 ( select ) 下拉组件可搜索
 */
export const filterOption = (
  input: string,
  option?: { label: string; value: string | number },
) => (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

/**
 * @数组去重 （权限）
 * @param { Array<string | number> }
 */
export const uniqueArray = (arr: Array<string | number>) =>
  Array.from(new Set(arr));

/**
 * @判断code码
 * @param { string }
 */
const codeArray: Record<number, boolean> = {
  200: true,
  401: false,
};
export const isInterfaceSuccess = (codeString: number) => {
  return codeArray[codeString] || false;
};
