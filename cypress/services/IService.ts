import { HttpMethod } from './types';

export interface IService {
    method: HttpMethod;
    url: string;
    alias: string;
    code: number;
}