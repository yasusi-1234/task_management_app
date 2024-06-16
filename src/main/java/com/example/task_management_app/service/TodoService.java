package com.example.task_management_app.service;

import com.example.task_management_app.controller.form.TodoForm;
import com.example.task_management_app.repository.domain.Todo;
import com.example.task_management_app.repository.mapper.TodoMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Transactional(readOnly = false)
@RequiredArgsConstructor
@Service
public class TodoService implements TodoServiceImpl{

    @Autowired
    private final TodoMapper todoMapper;


    @Override
    public Todo findById(long id) {
        return todoMapper.findById(id);
    }

    @Override
    public List<Todo> findByAccountId(long accountId) {
        return todoMapper.findByAccountId(accountId);
    }

    @Override
    public int updateTodo(TodoForm todoForm) {
        return todoMapper.updateTodo(todoForm);
    }

    @Override
    public int insertTodo(TodoForm todoForm) {
        return todoMapper.insertTodo(todoForm);
    }
}
