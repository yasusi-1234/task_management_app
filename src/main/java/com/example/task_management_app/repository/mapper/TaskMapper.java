package com.example.task_management_app.repository.mapper;

import com.example.task_management_app.repository.domain.Task;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface TaskMapper {

    Task findById(Long id);

    List<Task> findByTodoId(Long todoId);
}
