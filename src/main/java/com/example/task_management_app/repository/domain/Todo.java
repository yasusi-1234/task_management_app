package com.example.task_management_app.repository.domain;

import lombok.Data;

import java.time.LocalDateTime;
import java.util.List;

@Data
public class Todo {

    private Long id;

    private Long ownerId;

    private String title;

    private String detail;

    private LocalDateTime deadline;

    private String importance;

    private boolean done;

    private List<Task> tasks;


}

