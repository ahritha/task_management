import axios, { AxiosResponse } from 'axios';
import { Response } from '../types';

axios.defaults.baseURL = process.env.API_URL;

export const axiosGet = async <T>(url: string, params: Record<string, any> = {}): Promise<Response<T>> => {
    try {
        const response: AxiosResponse<Response<T>> = await axios.get(url, { params });
        return response.data;
    } catch (error: any) {
        throw error.response ? error.response.data : new Error('Network Error');
    }
};

export const axiosPost = async <T>(url: string, data: Record<string, any>): Promise<Response<T>> => {
    try {
        const response: AxiosResponse<Response<T>> = await axios.post(url, data);
        return response.data;
    } catch (error: any) {
        throw error.response ? error.response.data : new Error('Network Error');
    }
};

export const axiosPatch = async <T>(url: string, data: Record<string, any>): Promise<Response<T>> => {
    try {
        const response: AxiosResponse<Response<T>> = await axios.patch(url, data);
        return response.data;
    } catch (error: any) {
        throw error.response ? error.response.data : new Error('Network Error');
    }
};


export const axiosDelete = async <T>(url: string): Promise<Response<T>> => {
    try {
        const response: AxiosResponse<Response<T>> = await axios.delete(url);
        return response.data;
    } catch (error: any) {
        throw error.response ? error.response.data : new Error('Network Error');
    }
};
