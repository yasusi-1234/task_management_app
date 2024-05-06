import axios from 'axios';

const findAllTodos = async () => {
    return await axios.get("http://localhost:4030/todos")
    .then((data) => data);
}

const findByIdTodo = async (id) => {
    return await axios.get(`http://localhost:4030/todos/${id}`)
    .then(data => data);
}

const insertTodo = async (todo) => {
    return await axios.post("http://localhost:4030/todos", todo)
    .then(res => res);
}

const updateTodo = async (todo) => {
    return await axios.patch("http://localhost:4030/todos", todo)
    .then(res => res);
}

export {findAllTodos, findByIdTodo, insertTodo, updateTodo};