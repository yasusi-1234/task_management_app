package com.example.task_management_app.repository.mapper;

import com.example.task_management_app.controller.form.TaskForm;
import com.example.task_management_app.repository.domain.Task;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface TaskMapper {

    Task findById(Long id);

    List<Task> findByTodoId(Long todoId);

    int insertTask(TaskForm taskForm);

    int updateTask(TaskForm taskForm);

    int deleteTask(Long id);
}
