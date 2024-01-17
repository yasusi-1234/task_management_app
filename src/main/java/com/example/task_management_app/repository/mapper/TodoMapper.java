package com.example.task_management_app.repository.mapper;

import com.example.task_management_app.repository.domain.Todo;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface TodoMapper {

    Todo findById(Long id);

    List<Todo> findByAccountId(Long accountId);

}
