package com.dala.grademanager.exceptions;

import lombok.AllArgsConstructor;
import lombok.Getter;
import org.springframework.http.HttpStatus;

@AllArgsConstructor
@Getter
public class LoginException extends Exception {
    private HttpStatus status;
    private String message;
}
