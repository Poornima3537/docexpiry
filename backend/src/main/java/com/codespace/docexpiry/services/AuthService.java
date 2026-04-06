package com.codespace.docexpiry.services;

import com.codespace.docexpiry.dtos.AuthRequestDto;
import com.codespace.docexpiry.dtos.AuthResponseDto;

public interface  AuthService {
    
     
    AuthResponseDto register(AuthRequestDto dto);
    AuthResponseDto login(AuthRequestDto dto);
    AuthResponseDto getUserById(Long id);
    void deleteUser(Long id);

}
