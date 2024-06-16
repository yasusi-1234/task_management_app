package com.example.task_management_app.service;

import com.example.task_management_app.controller.form.TaskForm;

public interface TaskServiceImpl {

    public int insertTask(TaskForm taskForm);

    public int updateTask(TaskForm taskForm);
}
