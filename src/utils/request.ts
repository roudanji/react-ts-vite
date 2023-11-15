import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { notification } from 'antd'


// 接口返回类型定义
type PromiseData<T = any> = {
    code: number
    data?: T
    msg?: string
};

notification.config({ maxCount: 3 });


const serverCodeMessage: Record<number, string> = {
    200: '服务器成功返回请求的数据',
    400: 'Bad Request',
    401: 'Unauthorized',
    403: 'Forbidden',
    404: 'Not Found',
    500: '服务器发生错误，请检查服务器(Internal Server Error)',
    502: '网关错误(Bad Gateway)',
    503: '服务不可用，服务器暂时过载或维护(Service Unavailable)',
    504: '网关超时(Gateway Timeout)',
};


const whiteList = [''];


// 动态提示接口错误
const showErrorNotification = (code: number | string | undefined, messageError: string | undefined) => {
    notification.info({ duration: 3.5, message: 'Request Error', description: code !== void 0 ? serverCodeMessage[+code] : messageError });
};


// 创建 Axios 实例
const service = axios.create({
    baseURL: 'http://localhost:8800', // 设置基础URL
    timeout: 10000, // 设置请求超时时间
});


// 请求拦截器
service.interceptors.request.use(
    (config: AxiosRequestConfig) => {
        const TOKEN = 'token';
        const { headers, url } = config;

        if (TOKEN && headers && !whiteList.includes(url!.split('?')[0])) {
            // headers[settings.ajaxHeadersTokenKey] = TOKEN
        };
        return config;
    },
    (error) => {
        showErrorNotification(undefined, error);
    }
);


// 响应拦截器
service.interceptors.response.use(
    (response: AxiosResponse<PromiseData>) => {

        const res = response.data;

        if (res && res.code === 200) {
            return response;
        }

        if (res.code === 401) {
            setTimeout(() => {
                window.location.href = '/login';
            }, 500);
        }

        showErrorNotification(res.code, undefined);

        return response;
    },
    (error) => {
        showErrorNotification(undefined, error);
    }
);


type HttpRequest = {
    getUri(config?: AxiosRequestConfig): string;
    get<T = PromiseData>(url: string, config?: AxiosRequestConfig): Promise<T>;
    delete<T = PromiseData>(url: string, config?: AxiosRequestConfig): Promise<T>;
    put<T = PromiseData>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>;
    post<T = PromiseData>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>;
    patch<T = PromiseData>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>;
};

// 为了类型安全二次封装
const request: HttpRequest = {
    getUri: (config?: AxiosRequestConfig) => service.getUri(config),
    get: (url: string, config?: AxiosRequestConfig) => service.get(url, config),
    delete: (url: string, config?: AxiosRequestConfig) => service.delete(url, config),
    put: (url: string, data?: any, config?: AxiosRequestConfig) => service.put(url, data, config),
    post: (url: string, data?: any, config?: AxiosRequestConfig) => service.post(url, data, config),
    patch: (url: string, data?: any, config?: AxiosRequestConfig) => service.patch(url, data, config),
};

export default request;
