// Router.tsx
import { Skeleton } from "antd";
import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

// const NotFound = () => {
//     return <div>404</div>;
// };

import Login from "@/pages/login/index";

// 懒加载路由公用方法
const lazyRouter = (routerComponent: React.ReactElement) => {
  return (
    <Suspense
      fallback={
        <>
          <Skeleton active />
          <Skeleton active />
        </>
      }
    >
      {routerComponent}
    </Suspense>
  );
};

// const Lazy2 = () => {
//     return (
//         <Routes>
//             <Route
//                 path="*"
//                 element={lazyRouter(<div>xx</div>)}
//             />
//             <Route
//                 path="/sub1"
//                 element={lazyRouter(<div>Lazy2 Sub1</div>)}
//             />
//             <Route
//                 path="/sub2"
//                 element={lazyRouter(<div>Lazy2 Sub2</div>)}
//             />
//         </Routes>
//     );
// };

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={lazyRouter(<Login />)} />
      <Route path="/login" element={lazyRouter(<Login />)} />

      {/* <Route
                path="/lazy2/*"
                element={<Lazy2 />}
            />

            <Route
                path="*"
                element={lazyRouter(<NotFound />)}
            /> */}
    </Routes>
  );
};

export default Router;
