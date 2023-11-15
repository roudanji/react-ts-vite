// Router.tsx
import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";  // 使用 Routes 和 Route
import { Skeleton } from 'antd';

const Home = () => {
    return <div>Home Component</div>;
};

const SubRoute1 = () => {
    return <div>Sub Route 1 Component</div>;
};

const SubRoute2 = () => {
    return <div>Sub Route 2 Component</div>;
};


const notFound = () => {
    return <div>404</div>;
}

// 懒加载路由公用方法
const lazyRouter = (routerComponent: React.ReactElement) => {
    return (
        <Suspense fallback={<><Skeleton active /><Skeleton active /></>}>
            {routerComponent}
        </Suspense>
    )
}

const MyLazyComponent1 = lazy(() => import('@/pages/test1'))
const MyLazyComponent2 = lazy(() => import('@/pages/test2'))

const Router = () => {
    return (
        <Routes>
            <Route
                path="/"
                element={<Home />}
            />

            <Route
                path="/lazy1"
                element={lazyRouter(<MyLazyComponent1 />)}
            >
                <Route path="/lazy1/sub1" element={lazyRouter(<SubRoute1 />)} />
                <Route path="/lazy1/sub2" element={lazyRouter(<SubRoute2 />)} />
            </Route>

            <Route
                path="/lazy2"
                element={lazyRouter(<MyLazyComponent2 />)}
            />

            <Route
                path="*"
                element={lazyRouter(<SubRoute2 />)}
            />
        </Routes>
    );
};

export default Router;
