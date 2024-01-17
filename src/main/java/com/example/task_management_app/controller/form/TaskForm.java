package com.example.task_management_app.controller.form;

import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;
import org.hibernate.validator.constraints.Length;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDateTime;

@Data
public class TaskForm {

    private Long id;

    @NotNull
    private Long todoId;

    @NotBlank
    private String title;

    private String detail;

    @DateTimeFormat(pattern = "yyyy-MM-dd hh:mm:ss")
    private LocalDateTime deadline;

    @Min(0)
    @Max(100)
    private int rateOfProgress;

    @NotNull
    private boolean done;
}
