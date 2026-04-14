// package com.codespace.docexpiry.exception;

// import java.util.Map;
// import java.util.HashMap;
// import org.springframework.http.ResponseEntity;
// import org.springframework.web.bind.MethodArgumentNotValidException;
// import org.springframework.web.bind.annotation.RestControllerAdvice;
// import org.springframework.web.bind.annotation.ExceptionHandler;


// @RestControllerAdvice
// public class GlobalExceptionHandler {
//     @ExceptionHandler(MethodArgumentNotValidException.class)
//     public ResponseEntity<Map<String,String>> handleValidationError
//     (MethodArgumentNotValidException exception){
//         var errors = new HashMap<String,String>();

//         exception.getBindingResult().getFieldErrors().forEach(error -> {
//             errors.put(error.getField(),error.getDefaultMessage());
//         });
//         return ResponseEntity.badRequest().body(errors);
//     }

   
// }
