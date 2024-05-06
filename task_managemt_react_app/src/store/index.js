import { configureStore } from '@reduxjs/toolkit';

import { todoReducer } from './modules/todo';
import currentPageReducer from './modules/curentPage';
import backFormReducer from './modules/backForm';

export default configureStore({
    reducer : {
        todos: todoReducer,
        currentPage: currentPageReducer,
        backForm: backFormReducer
    }
});