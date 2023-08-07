import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import productApi, { productReducer } from "../api/product";
import authApi from "../api/auth";

export const store = configureStore({
    reducer: {
        [productApi.reducerPath]: productReducer,
        [authApi.reducerPath]: authApi.reducer,
    },
    middleware: getDefaultMiddleware => 
        getDefaultMiddleware()
            .concat(productApi.middleware)
            .concat(authApi.middleware),
    
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch