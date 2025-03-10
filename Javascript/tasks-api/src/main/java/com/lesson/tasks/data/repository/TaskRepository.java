package com.lesson.tasks.data.repository;

import com.lesson.tasks.data.model.Task;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface TaskRepository extends JpaRepository<Task, UUID> {
}
