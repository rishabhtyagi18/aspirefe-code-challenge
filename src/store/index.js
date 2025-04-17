import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import cardReducer from './cardSlice';
const rootReducer = combineReducers({ cardReducer });
export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
        immutableCheck: false
    })
});
export const useAppDispatch = useDispatch;
export const useAppSelector = useSelector;
export default store;
