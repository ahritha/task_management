import axios, { AxiosResponse } from 'axios';
import { Response } from './types';

axios.defaults.baseURL = process.env.REACT_APP_API;

export const axiosGet = async <T>(url: string, params: Record<string, any> = {}): Promise<AxiosResponse<Response<T>>> => {
    try {
        const response: AxiosResponse<Response<T>> = await axios.get(url, { params });
        return response;
    } catch (error: any) {
        throw error.response ? error.response : new Error('Network Error');
    }
};

export const axiosPost = async <T>(url: string, data: Record<string, any>): Promise<AxiosResponse<Response<T>>> => {
    try {
        const response: AxiosResponse<Response<T>> = await axios.post(url, data);
        return response;
    } catch (error: any) {
        throw error.response ? error.response : new Error('Network Error');
    }
};

export const axiosPatch = async <T>(url: string, data: Record<string, any>): Promise<AxiosResponse<Response<T>>> => {
    try {
        const response: AxiosResponse<Response<T>> = await axios.patch(url, data);
        return response;
    } catch (error: any) {
        throw error.response ? error.response : new Error('Network Error');
    }
};

export const axiosDelete = async <T>(url: string): Promise<AxiosResponse<Response<T>>> => {
    try {
        const response: AxiosResponse<Response<T>> = await axios.delete(url);
        return response;
    } catch (error: any) {
        throw error.response ? error.response : new Error('Network Error');
    }
};
