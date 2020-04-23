package com.example.SpringReact.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.SpringReact.model.Expense;

public interface ExpenseRepository extends JpaRepository<Expense, Long> {
}
