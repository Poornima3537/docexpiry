package com.codespace.docexpiry.dtos;

import java.time.LocalDate;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class DocumentRequestDto {
    
    @NotBlank(message = "Document name is required")
    private String name;

    @NotNull(message = "Category is required")   
    private Long categoryId;

    @NotNull(message = "Expiry date is required")
    private LocalDate expiryDate;
}
