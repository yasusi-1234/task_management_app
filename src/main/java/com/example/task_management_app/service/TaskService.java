package com.example.task_management_app.service;

import com.example.task_management_app.controller.form.TaskForm;
import com.example.task_management_app.repository.mapper.TaskMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional(readOnly = false)
@RequiredArgsConstructor
public class TaskService implements TaskServiceImpl {

    @Autowired
    private final TaskMapper taskMapper;

    @Override
    public int insertTask(TaskForm taskForm) {
        return taskMapper.insertTask(taskForm);
    }

    @Override
    public int updateTask(TaskForm taskForm) {
        return taskMapper.updateTask(taskForm);
    }
}
