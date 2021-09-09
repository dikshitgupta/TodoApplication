package com.dikshit.todolist.repository;

import com.dikshit.todolist.model.TodoItem;
import com.dikshit.todolist.service.TodoService;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface TodoRepository extends CrudRepository<TodoItem,Integer> {
	List<TodoItem> findByUsername(String username);
}
