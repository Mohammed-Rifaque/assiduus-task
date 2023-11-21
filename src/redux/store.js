import { combineReducers , configureStore } from "@reduxjs/toolkit";

import activityReducer from "./slicers/activitySlice";


const rootReducer = combineReducers({
    activity: activityReducer
});

const store = configureStore({
    reducer: rootReducer
});

export default store;