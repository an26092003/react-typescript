import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { Product } from '../interface/product'

export const productApi = createApi({
    reducerPath: 'products',
    tagTypes: ['Products'],
    baseQuery: fetchBaseQuery({
        baseUrl: `http://localhost:8080/api`,

    }),
    endpoints: (builder) => ({
        getProducts: builder.query<Product[], void>({
            query: () => `/products`,
            providesTags: ['Products']
        }),
        getProductById: builder.query<Product, number | string>({
            query: (id) => `/products/${id}`,
            providesTags: ['Products']
        }),
        removeProduct: builder.mutation<void, string | number>({
            query: (id) => ({
                url: `/products/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['Products']
        }),
        addProduct: builder.mutation<Product, Product>({
            query: (product) => ({
                url: `/products`,
                method: 'POST',
                body: product
            }),
            invalidatesTags: ['Products']
        }),
        updateProduct: builder.mutation<Product, Product>({
            query: (product) => ({
                url: `/products/${product._id}`,
                method: 'PATCH',
                body: product
            }),
            invalidatesTags: ['Products']
        }),
        uploadImage: builder.mutation < {image: string}, FormData> ({
            query: (img) => ({
                url: `/products/upload`,
                method: 'POST', 
                body: img
            })
        })
})

})

export const { useGetProductsQuery , useGetProductByIdQuery, useRemoveProductMutation, useAddProductMutation, useUpdateProductMutation} = productApi
export const productReducer = productApi.reducer
export default productApi