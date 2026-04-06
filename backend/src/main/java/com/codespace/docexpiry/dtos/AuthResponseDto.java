package com.codespace.docexpiry.dtos;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class AuthResponseDto {
    private Long id;
    private String name;
    private String email;
}
