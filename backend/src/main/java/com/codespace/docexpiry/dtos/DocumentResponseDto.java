package com.codespace.docexpiry.dtos;

import java.time.LocalDate;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class DocumentResponseDto {
    private Long id;
    private String name;
    private String categoryName;
    private LocalDate expiryDate;
    private String status;
}
