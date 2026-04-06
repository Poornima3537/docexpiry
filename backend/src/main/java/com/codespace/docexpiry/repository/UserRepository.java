package com.codespace.docexpiry.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.codespace.docexpiry.entity.User;


public interface UserRepository extends JpaRepository<User, Long>{
     Optional<User> findByEmail(String email);

}
