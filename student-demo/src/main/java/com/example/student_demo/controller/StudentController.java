package com.example.student_demo.controller;

import java.util.Arrays;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.student_demo.model.Student;

@RestController
public class StudentController {
    
    @GetMapping("/api/students")
    public List<Student> getStudents() {
        return Arrays.asList(
            new Student(1L, "Jone Doe", 20),
            new Student(2L, "Jone Smith", 22),
            new Student(3L, "Mike Johnson", 19)
        );
    }
}
