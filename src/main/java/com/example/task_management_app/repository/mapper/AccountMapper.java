package com.example.task_management_app.repository.mapper;

import com.example.task_management_app.controller.form.AccountForm;
import com.example.task_management_app.repository.domain.Account;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;


@Mapper
public interface AccountMapper {

    Account findById(Long id);

    List<Account> findAllAccount();

    int insertAccount(AccountForm accountForm);

    int updateAccount(AccountForm accountForm);

    Account findAllAccountTodos(Long id);
}
