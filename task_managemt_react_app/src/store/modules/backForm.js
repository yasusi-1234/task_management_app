import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    showTodoBackForm: false,
    showTaskBackForm: false,
    showFilterBackForm: false,
    targetTask: null
};

const backForm = createSlice({
    name: "backForm",
    initialState,
    reducers: {
        toggleTodoBackForm(state, { type, payload }) {
            state.showTodoBackForm = payload;
        },
        toggleTaskBackForm(state, { type, payload }) {
            state.showTaskBackForm = payload;
        },
        toggleFilterBackForm(state, { type, payload }) {
            state.showFilterBackForm = payload;
        },
        setTargetTask(state, { type, payload }) {
            state.targetTask = payload;
        }
    }
});

const { toggleTaskBackForm, toggleTodoBackForm, toggleFilterBackForm, setTargetTask } = backForm.actions;

export { toggleTaskBackForm, toggleTodoBackForm, toggleFilterBackForm, setTargetTask };
export default backForm.reducer;