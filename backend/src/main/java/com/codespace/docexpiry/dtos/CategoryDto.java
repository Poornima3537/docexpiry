package com.codespace.docexpiry.dtos;

import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CategoryDto {
    
    private Long id;

    @NotBlank(message = "Category name is required")
    private String categoryName;
}
