import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Categories } from '../interface/categories'

export const categoriesApi = createApi({
    reducerPath: 'categories',
    tagTypes: ['Categories'],
    baseQuery: fetchBaseQuery({
        baseUrl: `http://localhost:8080/api`,

    }),
    endpoints: (builder) => ({
        getProducts: builder.query<Categories[], void>({
            query: () => `/categories`,
            providesTags: ['Categories']
        }),
        getProductById: builder.query<Categories, number | string>({
            query: (id) => `/categories/${id}`,
            providesTags: ['Categories']
        }),
        removeProduct: builder.mutation<void, string | number>({
            query: (id) => ({
                url: `/categories/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['Categories']
        }),
        addProduct: builder.mutation<Categories, Categories>({
            query: (categories) => ({
                url: `/categories`,
                method: 'POST',
                body: categories
            }),
            invalidatesTags: ['Categories']
        }),
        updateProduct: builder.mutation<Categories, Categories>({
            query: (categories) => ({
                url: `/categories/${categories.catgoryId}`,
                method: 'PATCH',
                body: categories
            }),
            invalidatesTags: ['Categories']
        }),

    })

})

export const { useGetProductsQuery, useGetProductByIdQuery, useRemoveProductMutation, useAddProductMutation, useUpdateProductMutation } = categoriesApi
export const categoriesReducer = categoriesApi.reducer
export default categoriesApi