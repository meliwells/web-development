package com.lesson.tasks.controller;


import com.lesson.tasks.data.model.Task;
import com.lesson.tasks.data.repository.TaskRepository;
import jakarta.persistence.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.io.Serializable;
import java.util.List;


@RestController
@CrossOrigin
@RequestMapping("/tasks")
public class TaskController implements Serializable {
    @Autowired
    TaskRepository taskRepository;


    @GetMapping()
    public List<Task> getResource() {
        return taskRepository.findAll();
    }
}
