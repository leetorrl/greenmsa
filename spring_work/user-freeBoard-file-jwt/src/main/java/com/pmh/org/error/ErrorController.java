package com.pmh.org.error;

import jakarta.security.auth.message.AuthException;
import jakarta.validation.ConstraintViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import java.sql.SQLIntegrityConstraintViolationException;
import java.time.LocalDateTime;
import java.util.Arrays;
import java.util.SimpleTimeZone;

@ControllerAdvice
public class ErrorController {

    @ExceptionHandler(JWTAuthException.class)
    public ResponseEntity<String> jwtAuthException(JWTAuthException e){
        return ResponseEntity
                .status(HttpStatus.UNAUTHORIZED)
                .body(e.getMessage());
    }


    @ExceptionHandler(SQLIntegrityConstraintViolationException.class)
    public ResponseEntity<ErrorResponse> sqlIntegrityConstraintViolationException(SQLIntegrityConstraintViolationException e){
        ErrorResponse errorResponse = ErrorResponse.builder()
                .message(e.getMessage())
                .httpStatus(HttpStatus.INTERNAL_SERVER_ERROR)
                .localDateTime(LocalDateTime.now())
                .build();
        return ResponseEntity
                .status(errorResponse.getHttpStatus())
                .body(errorResponse);
    }

    @ExceptionHandler(BizException.class)
    public ResponseEntity<ErrorResponse> mException(BizException e){
        ErrorResponse errorResponse = ErrorResponse.builder()
                .message(e.getErrorCode().getMessage())
                .httpStatus(e.getErrorCode().getHttpStatus())
                .localDateTime(LocalDateTime.now())
                .build();
        return ResponseEntity
                .status(errorResponse.getHttpStatus())
                .body(errorResponse);
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<ErrorResponse> validityException(MethodArgumentNotValidException e){

        String msg = (String) Arrays.stream(e.getDetailMessageArguments())
                .reduce("",(s, s2) -> s.toString()+s2.toString());

        ErrorResponse errorResponse = ErrorResponse.builder()
                .httpStatus(HttpStatus.BAD_REQUEST)
                .message( msg )
                .localDateTime(LocalDateTime.now())
                .build();

        return ResponseEntity
                .status(HttpStatus.BAD_REQUEST)
                .body(errorResponse);
    }

    @ExceptionHandler(ConstraintViolationException.class)
    public ResponseEntity<ErrorResponse> constraintException(ConstraintViolationException e){

        // Stream
        String msg = e.getConstraintViolations()
                .stream()
                .map(constraintViolation -> constraintViolation.getMessage())
                .reduce("",(s, s2) -> s+s2);

        ErrorResponse errorResponse = ErrorResponse.builder()
                .httpStatus(HttpStatus.BAD_REQUEST)
                .message( msg )
                .localDateTime(LocalDateTime.now())
                .build();

        return ResponseEntity
                .status(HttpStatus.BAD_REQUEST)
                .body(errorResponse);
    }

//    @ExceptionHandler(SQLIntegrityConstraintViolationException.class)
//    public ResponseEntity<ErrorResponse> sqlException(SQLIntegrityConstraintViolationException e){
//        ErrorResponse errorResponse = ErrorResponse.builder()
//                .message(e.getMessage())
//                .httpStatus(HttpStatus.INTERNAL_SERVER_ERROR)
//                .localDateTime(LocalDateTime.now())
//                .build();
//        return ResponseEntity
//                .status(errorResponse.getHttpStatus())
//                .body(errorResponse);
//    }

}