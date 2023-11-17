import { nanoid } from 'nanoid';
import { atom } from 'recoil';

// todo  Recoil atom 的引入以及使用方法
// import { useRecoilValue } from 'recoil'
// import { adminInfo } from '@/recoil-stroe/admin'
// const Recoil_adminInfo = useRecoilValue(adminInfo)
// console.log('Recoil_adminInfo', Recoil_adminInfo)

export const adminInfo = atom({
    key: 'adminInfo',
    default: [
        { id: nanoid(), name: '超级管理员' },
        { id: nanoid(), name: '普通管理员' },
    ],
});