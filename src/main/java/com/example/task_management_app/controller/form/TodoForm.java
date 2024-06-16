package com.example.task_management_app.controller.form;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDateTime;

@Data
public class TodoForm {

    private Long id;

    @NotNull
    private Long ownerId;

    @NotBlank
    private String title;

    private String detail;

    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private LocalDateTime deadline;

    @NotNull
    private String importance;

    @NotNull
    private boolean done;
}
