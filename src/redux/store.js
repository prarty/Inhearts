import {combineReducers, configureStore} from '@reduxjs/toolkit'
import {persistReducer, persistStore} from "redux-persist";
import formReducer from './form/formSlice.js'
import storage from 'redux-persist/lib/storage'

const rootReducer = combineReducers({
    form: formReducer
})

const persistConfig = {
    key: 'root',
    storage,
    version: 1
}
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
    reducer: {form: persistedReducer},
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }),
})

export const persistor = persistStore(store);