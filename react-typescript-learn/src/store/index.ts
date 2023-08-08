import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import productApi, { productReducer } from "../api/product";
import categoriesApi, { categoriesReducer } from "../api/categories";

export const store = configureStore({
    reducer: {
        [productApi.reducerPath]: productReducer,
        [categoriesApi.reducerPath]: categoriesReducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware()
            .concat(productApi.middleware, categoriesApi.middleware)

})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch