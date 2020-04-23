package com.example.SpringReact.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.SpringReact.model.User;

public interface UserRepository extends JpaRepository<User, Long> {
}
