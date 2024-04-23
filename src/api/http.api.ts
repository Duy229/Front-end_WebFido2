import { readClientId, readLangues, readToken } from '../services/localStorage.service';
import axios from 'axios';

// let refreshToken = true;

export const httpApi = axios.create({
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        "Access-Control-Allow-Methods": '*',
        'Access-Control-Allow-Credentials': 'true',
    },
    baseURL: import.meta.env.VITE_REACT_APP_BASE_URL,
    timeout: 60000,
})

httpApi.interceptors.request.use((config) => {
    config.headers = {
        ...config.headers,
        'Client-Language': readLangues() || 'vi',
        Authorization: `Bearer ${readToken()}`,
        'CIC-Client-Id': readClientId() || '',
    }

    // console.warn('🚀 ~ | ' + config.method + ' | ' + config.url + ' | ', config.data)
    return config
})

httpApi.interceptors.response.use(
    (response) => {
        // const method = response.config.method;

        if (response?.data?.status === 200) {
            // const message = response?.data?.message
            // if (message) {
            //     notificationController.success({ message: message })
            // } else if (method !== 'get') {
            //     notificationController.success({ message: localStorage.getItem('lng') === 'vi' ? "Thành công!" : "Success" })
            // }
        } else if (response?.data?.status === 401) {
            // if (refreshToken) {
            //     const account: any = store.getState().user?.account?.response;

            //     const valuesRequest: any = {
            //         account: account?.subject,
            //         password: account?.issuer,
            //         remember: true
            //     }
            //     if (account?.id && account?.issuer && account?.token) {
            //         store.dispatch(doRefreshToken(valuesRequest))
            //             .then(() => refreshToken = false)
            //             .catch(() => {
            //                 deleteToken()
            //                 window.location.replace('/auth/login')
            //             })
            //     }
            //     refreshToken = false;
            // } else {
            //     deleteToken()
            //     window.location.replace('/auth/login')
            // }

        } else if (response?.data?.response?.status === 403) {
            setTimeout(() => {
                // deleteToken();
                // window.location.replace('/auth/login');
            }, 1000);
        } else if (response?.data?.status === 403) {
            setTimeout(() => {
                // deleteToken();
                // window.location.replace('/auth/login');
            }, 1000);
        } else if (response?.data?.status === 400) {
            const message = response?.data?.message
            if (message) {
                // notificationController.error({ message: message })
            }
        } else {
            // const message = response?.data?.message
            // notificationController.error({ message: message })
        }

        response.data = response.data.object || response.data
        return response
    },
    (error) => {
        // console.error('🚀 ~ error:', error)
        // const message = error?.response?.data?.message || error?.message
        // const status = error?.response?.status
        // Xử lý các lỗi gọi API
        if (error.response) {
            // Lỗi phản hồi từ API (status code không phải 2xx)
            console.error('API Error:', error.response.status, error.response.data)
            // if (status === 0 || message === 'Network Error') {
            //     window.location.href = '/server-error'
            // }
        } else if (error.request) {
            // Không nhận được phản hồi từ API
            console.error('No API Response:', error.request)
        } else {
            // Lỗi xảy ra khi thiết lập request
            console.error('Request Error:', error.message)
        }
        // notificationController.error({ message: message })
        return error
    },
)
