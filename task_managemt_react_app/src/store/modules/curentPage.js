import { createSlice } from '@reduxjs/toolkit';

const initialState = { 
    currentPage : "todoList",
    prevPage: "",
};

const PAGE_NAMES = {
    TODO_LIST: "todoList",
    TODO_DETAIL: "todoDetail",
    TODO_FORM: "todoForm"
}

const currentPage = createSlice({
    name: "currentPage",
    initialState,
    reducers: {
        movePage(state, {type, payload}) {
            state.prevPage = state.currentPage;
            state.currentPage = payload;
        },
        pageBack(state, { type, payload }) {
            state.currentPage = payload || state.prevPage;
        }
    }
});

const { movePage } = currentPage.actions;

export { movePage, PAGE_NAMES };
export default currentPage.reducer;