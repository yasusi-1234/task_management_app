package com.example.task_management_app.repository.domain;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class Task {

    private Long id;

    private Long todoId;

    private String title;

    private String detail;

    private LocalDateTime deadline;

    private int rateOfProgress;

    private boolean done;
}

