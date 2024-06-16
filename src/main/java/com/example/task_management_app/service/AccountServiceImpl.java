package com.example.task_management_app.service;

import com.example.task_management_app.controller.form.AccountForm;
import com.example.task_management_app.repository.domain.Account;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface AccountServiceImpl {

    public Account findById(Long id);

    public List<Account> findAllAccount();

    public AccountForm insertAccount(AccountForm accountForm);

    public AccountForm updateAccount(AccountForm accountForm);

    public Account findAllAccountTodos(Long id);
}
