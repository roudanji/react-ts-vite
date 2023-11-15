
/**
 * 组件库 ( select ) 下拉组件可搜索 
 */
export const filterOption = (input: string, option?: { label: string; value: string | number }) =>
    (option?.label ?? '').toLowerCase().includes(input.toLowerCase())


/**
* 字符串打乱方法 （权限）
* @param { inputString : 字符串   } 
*/
export const shuffleString = (inputString: string) => {
    const array = inputString.split('')
    // 使用 Fisher-Yates 算法进行随机排序
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]
    }
    const shuffledString = array.join('')
    return shuffledString
}


/**
 * 数组去重 （权限）
 * @param { Array<string | number> } 
 */
export const uniqueArray = (arr: Array<string | number>) => {
    return Array.from(new Set(arr))
}
