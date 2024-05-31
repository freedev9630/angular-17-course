import { InjectionToken } from "@angular/core";

export const API_CONFIG: IApiConfig = {
    baseUrl: 'http://localhost:3000',
    isDevMode: true
}

export interface IApiConfig {
    baseUrl: string;
    isDevMode: boolean;
}

export const API_CONFIG_TOKEN = new InjectionToken('API_CONFIG_TOKEN', {
    factory: () => API_CONFIG
});