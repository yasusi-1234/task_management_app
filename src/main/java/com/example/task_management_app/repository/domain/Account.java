package com.example.task_management_app.repository.domain;

import lombok.*;

import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Account {

    private Long id;

    private String userName;

    private String mailAddress;

    private String fullName;

    private String password;

    private boolean isDelete;

    List<Todo> todos;
}