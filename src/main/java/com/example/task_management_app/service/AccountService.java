package com.example.task_management_app.service;

import com.example.task_management_app.controller.form.AccountForm;
import com.example.task_management_app.repository.domain.Account;
import com.example.task_management_app.repository.mapper.AccountMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@RequiredArgsConstructor
@Transactional
@Service
public class AccountService implements AccountServiceImpl{

    private final AccountMapper accountMapper;

    @Override
    public Account findById(Long id) {
        return accountMapper.findById(id);
    }

    @Override
    public List<Account> findAllAccount() {
        return accountMapper.findAllAccount();
    }

    @Override
    public AccountForm insertAccount(AccountForm accountForm) {
        int insertResult = accountMapper.insertAccount(accountForm);
        return accountForm;
    }

    @Override
    public AccountForm updateAccount(AccountForm accountForm) {
        int updateResult = accountMapper.updateAccount(accountForm);
        return accountForm;
    }

    @Override
    public Account findAllAccountTodos(Long id) {
        return accountMapper.findAllAccountTodos(id);
    }
}
