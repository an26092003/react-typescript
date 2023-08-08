import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Category } from '../interface/category'

export const categoryApi = createApi({
    reducerPath: 'categories',
    tagTypes: ['Category'],
    baseQuery: fetchBaseQuery({
        baseUrl: `http://localhost:8080/api`,

    }),
    endpoints: (builder) => ({
        getCategories: builder.query<Category[], void>({
            query: () => `/categories`,
            providesTags: ['Category']
        }),
        getCategoryById: builder.query<Category, number | string>({
            query: (id) => `/categories/${id}`,
             
            providesTags: ['Category']
        }),
        removeCategory: builder.mutation<void, string | number>({
            query: (id) => ({
                url: `/categories/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['Category']
        }),
        addCategory: builder.mutation<Category, Category>({
            query: (category) => ({
                url: `/categories`,
                method: 'POST',
                body: category
            })
            ,
            invalidatesTags: ['Category']
        }),
        updateProduct: builder.mutation<Category, Category>({
            query: (category) => ({
                url: `/categories/${category._id}`,
                method: 'PATCH',
                body: category
            }),
            invalidatesTags: ['Category']
        }),
       
})

})

export const { useGetCategoriesQuery , useGetCategoryByIdQuery, useRemoveCategoryMutation, useAddCategoryMutation, useUpdateProductMutation} = categoryApi
export const productReducer = categoryApi.reducer
export default categoryApi