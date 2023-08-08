import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


interface TokenResponse {
    token: string;
}

interface LoginCredentials {
    email: string;
    password: string;
}

interface RegisterCredentials {
    name: string;
    email: string;
    password: string;
    confirmPassword: string
}

export const authApi = createApi({
    reducerPath: 'auth',
    tagTypes: ['Auths'],
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:8080/api',
    }),
    endpoints: (builder) => ({
        login: builder.mutation<TokenResponse, LoginCredentials>({
            query: (credentials) => ({
                url: '/signin',
                method: 'POST',
                body: credentials,
            }),
            invalidatesTags: ['Auths']
        }),
        // logout: builder.mutation<void, void>({
        //     query: () => '/logout',
        // }),
        register: builder.mutation<TokenResponse, RegisterCredentials>({
            query: (registrationData) => ({
                url: '/signup',
                method: 'POST',
                body: registrationData,
            }),
             invalidatesTags: ['Auths']
        }),
    }),
});

export const { useLoginMutation, useRegisterMutation } = authApi;
export const authReducer = authApi.reducer

export default authApi;