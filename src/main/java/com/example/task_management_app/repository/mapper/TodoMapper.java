package com.example.task_management_app.repository.mapper;

import com.example.task_management_app.controller.form.TodoForm;
import com.example.task_management_app.repository.domain.Todo;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface TodoMapper {

    Todo findById(long id);

    List<Todo> findByAccountId(long accountId);

    int insertTodo(TodoForm todoForm);

    int updateTodo(TodoForm todoForm);

    int deleteTodo(long id);

}
