package com.example.task_management_app.controller;

import com.example.task_management_app.controller.form.TodoForm;
import com.example.task_management_app.service.TodoService;
import lombok.RequiredArgsConstructor;
import org.apache.ibatis.annotations.Delete;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController
@RequestMapping("api/todo")
public class TodoController {

    @Autowired
    private TodoService todoService;

    @GetMapping
    public ResponseEntity<?> findAllTodo(@RequestParam("id") long id) {
        return ResponseEntity.status(HttpStatus.OK).body(todoService.findByAccountId(id));
    }

    @PostMapping
    public ResponseEntity<?> insertTodo(@Validated @RequestBody TodoForm todoForm, BindingResult bindingResult) {
        if(bindingResult.hasErrors()) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("this is bad request");
        }
        return ResponseEntity.status(HttpStatus.NO_CONTENT).body(todoService.insertTodo(todoForm));
    }


    @PatchMapping
    public ResponseEntity<?> updateTodo(@Validated @RequestBody TodoForm todoForm, BindingResult bindingResult) {
        if (bindingResult.hasErrors() || todoForm.getId() == null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("this is bad request");
        }
        return ResponseEntity.status(HttpStatus.NO_CONTENT).body(todoService.updateTodo(todoForm));
    }

    @DeleteMapping
    public ResponseEntity<?> deleteTodo(@RequestParam(required = false) Long id) {
        System.out.println("todo request delete id = " + id);
        if (id == null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("this is bad request");
        }
        return ResponseEntity.status(HttpStatus.NO_CONTENT).body(todoService.deleteTodo(id));
    }

}
