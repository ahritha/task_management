import {combineReducers} from '@reduxjs/toolkit';
import tasks from '../modules/tasks/actions/reducer'


const rootReducer = combineReducers({
    tasks
})


export default rootReducer
