import Mock from "mockjs";
// import { nanoid } from 'nanoid'

const testData = ["xxxx"];

Mock.mock("/api/testInterface", "get", {
  code: 200,
  testData,
});

// Mock.mock('/api/variable', 'post', (params: any) => {
//     const paString = JSON.parse(params.body);
//     console.log('paString', paString.params.fieldValue);
//     if (paString.params.fieldValue === void 0 || paString.params.fieldValue === '') {
//         return {
//             code: 200,
//             testData,
//         }
//     } else {
//         let test = testData.filter(item => item['2'] === paString.params.fieldValue)
//         return {
//             code: 200,
//             testData: test
//         }
//     }

// })
