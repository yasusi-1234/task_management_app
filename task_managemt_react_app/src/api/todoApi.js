import axios from 'axios';

const REQUEST_API_URL = "http://localhost:8080/api/";

const findAllTodos = async () => {
    return await axios.get("http://localhost:4030/todos")
    .then((data) => data);
}

const findByIdTodo = async (id) => {
    // return await axios.get(`http://localhost:4030/todos/${id}`)
    return await axios.get(`${REQUEST_API_URL}todo?id=${id}`)
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