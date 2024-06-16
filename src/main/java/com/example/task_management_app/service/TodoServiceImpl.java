package com.example.task_management_app.service;

import com.example.task_management_app.controller.form.TodoForm;
import com.example.task_management_app.repository.domain.Todo;

import java.util.List;

public interface TodoServiceImpl {

    public Todo findById(long id);

    public List<Todo> findByAccountId(long accountId);

    public int updateTodo(TodoForm todoForm);

    public int insertTodo(TodoForm todoForm);
}
