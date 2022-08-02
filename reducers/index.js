import { HYDRATE } from 'next-redux-wrapper'
import { combineReducers } from 'redux'

import userSlice from './user';

const rootReducer = (state, action) => {
    switch (action.type) {
        case HYDRATE:
            return action.payload
        default: {
            const combineReducer = combineReducers({
                user: userSlice.reducer,
                //추가
            })
            return combineReducer(state, action)
        }   
    }
}

export default rootReducer