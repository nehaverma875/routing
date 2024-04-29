import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import loginReducer from './slice'; 
const rootReducer = combineReducers({
  login: loginReducer,
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer, 
  middlware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,}),
});

export const persistor = persistStore(store);

export default { store, persistor };
