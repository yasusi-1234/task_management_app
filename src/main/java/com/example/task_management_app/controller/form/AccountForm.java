package com.example.task_management_app.controller.form;

import com.example.task_management_app.repository.domain.Account;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import lombok.Data;

@Data
public class AccountForm {

    private Long id;

    @NotBlank
    private String userName;

    @Pattern(regexp = "^[a-zA-Z0-9_+&*-]+(?:\\.[a-zA-Z0-9_+&*-]+)*@(?:[a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,7}$")
    private String mailAddress;
    @NotBlank
    private String fullName;
    @NotBlank
    private String password;
    @NotNull
    private boolean isDelete;

    public Account convertToAccount() {
        return Account.builder()
                .id(this.id)
                .userName(this.userName)
                .mailAddress(this.mailAddress)
                .fullName(this.fullName)
                .password(this.password)
                .isDelete(this.isDelete)
                .build();
    }
}
