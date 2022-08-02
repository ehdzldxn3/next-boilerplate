import { createWrapper } from 'next-redux-wrapper'
import { configureStore } from '@reduxjs/toolkit'
import rootReducer from '../reducers'
import logger from 'redux-logger'


 
//Dev
// const isDev = process.env.NODE_ENV === 'development';

//Prod
// const isDev = process.env.NODE_ENV === 'production';
//

const createStore = () => {


    const store = configureStore({
        reducer: rootReducer,
        middleware : (getDefaultMiddleware) => getDefaultMiddleware().concat(),
        // devTools: isDev,
    })

    return store
}


const wrapper = createWrapper(createStore, {
    debug: false,
})

export default wrapper 