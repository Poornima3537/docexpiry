package com.codespace.docexpiry.services.Impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.codespace.docexpiry.dtos.AuthRequestDto;
import com.codespace.docexpiry.dtos.AuthResponseDto;
import com.codespace.docexpiry.entity.User;
import com.codespace.docexpiry.mapper.AuthMapper;
import com.codespace.docexpiry.repository.UserRepository;
import com.codespace.docexpiry.services.AuthService;

@Service
public class AuthServiceImpl implements AuthService {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Override
    public AuthResponseDto register(AuthRequestDto dto) {

        User user = AuthMapper.toEntity(dto);
        user.setPassword(passwordEncoder.encode(dto.getPassword()));
        User saved = userRepository.save(user);

        return AuthMapper.toDto(saved);
    }

    @Override
    public AuthResponseDto login(AuthRequestDto dto) {

        User user = userRepository.findByEmail(dto.getEmail())
                .orElseThrow(() -> new RuntimeException("User not found"));

        if (!passwordEncoder.matches(dto.getPassword(), user.getPassword())) {
            throw new RuntimeException("Invalid password");
        }

        return AuthMapper.toDto(user);
    }

    @Override
    public AuthResponseDto getUserById(Long id) {

        User user = userRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("User not found"));

        return AuthMapper.toDto(user);
    }

    @Override
    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }
}