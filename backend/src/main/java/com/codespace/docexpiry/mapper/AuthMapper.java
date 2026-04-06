package com.codespace.docexpiry.mapper;

import com.codespace.docexpiry.dtos.AuthRequestDto;
import com.codespace.docexpiry.dtos.AuthResponseDto;
import com.codespace.docexpiry.entity.User;

public class AuthMapper {

    public static User toEntity(AuthRequestDto dto) {
        User user = new User();
        user.setName(dto.getName());
        user.setEmail(dto.getEmail());
        user.setPassword(dto.getPassword());
        return user;
    }

    public static AuthResponseDto toDto(User user) {
        return new AuthResponseDto(
                user.getId(),
                user.getName(),
                user.getEmail()
        );
    }
}