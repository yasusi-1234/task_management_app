package com.example.task_management_app.controller;

import com.example.task_management_app.controller.form.TaskForm;
import com.example.task_management_app.service.TaskServiceImpl;
import io.micrometer.common.util.StringUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/task")
@RequiredArgsConstructor
public class TaskController {

    @Autowired
    private final TaskServiceImpl taskService;

    @PostMapping
    public ResponseEntity<?> insertTask(@Validated @RequestBody TaskForm taskForm, BindingResult bindingResult) {
        if (bindingResult.hasErrors()) {
            return ResponseEntity.badRequest().body("this is bad request.");
        }

        return ResponseEntity.status(HttpStatus.NO_CONTENT).body(taskService.insertTask(taskForm));
    }

    @PatchMapping
    public ResponseEntity<?> updateTask(@Validated @RequestBody TaskForm taskForm, BindingResult bindingResult){
        if (bindingResult.hasErrors() || taskForm.getId() == null ) {
            return ResponseEntity.badRequest().body("this is bad request.");
        }

        return ResponseEntity.status(HttpStatus.NO_CONTENT).body(taskService.updateTask(taskForm));
    }
}
