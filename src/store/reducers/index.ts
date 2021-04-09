import { combineReducers } from 'redux';
import uiReducer from './uiReducer'
import projectReducer from './projectReducer';

export default combineReducers({
    projects: projectReducer,
    ui: uiReducer
})
