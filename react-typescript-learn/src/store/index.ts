import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import productApi, { productReducer } from "../api/product";

export const store = configureStore({
    reducer: {
        [productApi.reducerPath]: productReducer,
    },
    middleware: getDefaultMiddleware => 
        getDefaultMiddleware()
            .concat(productApi.middleware)
    
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch