package com.example.SpringReact.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.SpringReact.model.Category;

public interface CategoryRepository extends JpaRepository<Category, Long> {
}
