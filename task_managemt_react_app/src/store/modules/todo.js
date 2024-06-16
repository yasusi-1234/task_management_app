import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { findAllTodos, findByIdTodo } from '../../api/todoApi'

// const initialState = await findAllTodos().then(res => res.data);

const todos = createSlice({
    name: "todos",
    initialState: {
        todos: [],
        selectTodo: {},
        hasNextTodos: true,
        filterTodo: {
            title: "",
            detail: "",
            deadlineStart: "",
            deadlineEnd: "",
            createDateStart: "",
            createDateEnd: "",
            importance: "全て",
            rateOfProgress: "全て"
        }
    },
    reducers: {
        selectTodo(state, {type, payload}) {
            state.selectTodo = { ...state.todos.find(todo => todo.id === payload) };
        },
        setFilterTodo(state, {type, payload}) {
            state.filterTodo = payload;
        },
        clearFilterTodo(state) {
            state.filterTodo = {
                title: "",
                detail: "",
                deadlineStart: "",
                deadlineEnd: "",
                createDateStart: "",
                createDateEnd: "",
                importance: "全て",
                rateOfProgress: "全て"
            };
        }
    },
    extraReducers: (builder) => {
        builder.addCase(asyncFindAllTodos.rejected, (state) => {
            state.todos = []
        }).addCase(asyncFindAllTodos.fulfilled, (state, action) => {
            state.todos = action.payload;
        })
    }
});

const asyncFindAllTodos = createAsyncThunk(
    'todos/asyncFindAllTodos',
    async (id) => {
        // const todos = await findAllTodos();
        const todos = await findByIdTodo(id);
        console.log(todos);
        console.log(todos.data);
        return todos.data;
    }
);

const todoReducer = todos.reducer;

const { selectTodo, setFilterTodo, clearFilterTodo } = todos.actions;

export { todoReducer, asyncFindAllTodos, selectTodo, setFilterTodo, clearFilterTodo }