/**
 * @组件库 ( select ) 下拉组件可搜索
 */
export const filterOption = (
  input: string,
  option?: { label: string; value: string | number },
) => (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

/**
 * @param { data }     二进制文件流
 * @param { excelName }   导出的文件名字
 */
export const ExportExcel = (data: any, excelName: string) => {
  const blob = new Blob([data], {
    type: "application/vnd.ms-excel",
  });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `${excelName}`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

/**
 * @code码映射 判断接口 code 是否成功
 * @param { string }
 */
const codeArray: Record<number, boolean> = {
  200: true,
  401: false,
};
export const isInterfaceSuccess = (codeNumber: number) => {
  return codeArray[codeNumber] || false;
};
