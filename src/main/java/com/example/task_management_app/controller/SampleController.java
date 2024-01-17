package com.example.task_management_app.controller;

import com.example.task_management_app.controller.form.AccountForm;
import com.example.task_management_app.repository.domain.Account;
import com.example.task_management_app.repository.mapper.AccountMapper;
import com.example.task_management_app.repository.mapper.TaskMapper;
import com.example.task_management_app.repository.mapper.TodoMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.Objects;

@Slf4j
@RequiredArgsConstructor
@RequestMapping("api")
@RestController
public class SampleController {

    @Autowired
    private final AccountMapper accountMapper;

    @Autowired
    private final TodoMapper todoMapper;

    @Autowired
    private final TaskMapper taskMapper;

    @GetMapping("account")
    public ResponseEntity<?> findAccount() {

        return ResponseEntity.ok(accountMapper.findAllAccount());
    }
    @GetMapping("findTodo")
    public ResponseEntity<?> findTodo() {

        return ResponseEntity.ok(todoMapper.findByAccountId(1L));
    }
    @GetMapping("findTask")
    public ResponseEntity<?> findTask() {

        return ResponseEntity.ok(taskMapper.findByTodoId(1L));
    }

    @PostMapping("account")
    public ResponseEntity<?> insertAccount(@Validated @RequestBody AccountForm accountForm,
                                           BindingResult bindingResult) {
        if(bindingResult.hasErrors()) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST.value()).body("BadRequest");
        }

        long insertResult = accountMapper.insertAccount(accountForm);
        Account account = accountForm.convertToAccount();

        return ResponseEntity.ok(account);
    }

    @PatchMapping("account")
    public ResponseEntity<?> updateAccount(@Validated @RequestBody AccountForm accountForm, BindingResult bindingResult) {
        if(bindingResult.hasErrors() || Objects.isNull(accountForm.getId())){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST.value()).body("BadRequest");
        }
        int updateResult = accountMapper.updateAccount(accountForm);

        if(updateResult == 1){
            return ResponseEntity.ok().body("OK");
        }else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST.value()).body("BadRequest");
        }
    }

    @GetMapping("account2")
    public ResponseEntity<?> findAccount2() {

        return ResponseEntity.ok(accountMapper.findAllAccountTodos(1L));
    }
}
