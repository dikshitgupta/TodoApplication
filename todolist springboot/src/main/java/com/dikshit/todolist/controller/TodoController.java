package com.dikshit.todolist.controller;

import com.dikshit.todolist.model.TodoItem;
import com.dikshit.todolist.service.TodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

// on 8080 host
@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class TodoController {

//	      HTTP Request --> Controller --> Service --> Repository
//    frontend  <-----     Controller  <--  Service

	@Autowired
	private TodoService todoService;

	//fetch all todo items
	@GetMapping("/api/todoItems")
	public ResponseEntity<?> fetchAllTodoItems(){
		List<TodoItem> todoItems=todoService.fetchAllTodoItems();
		return ResponseEntity.ok(todoItems);
	}

	@PutMapping("/api/todoItems/{id}")
	public ResponseEntity<?> updateTodoItems(@PathVariable Integer id, @RequestBody TodoItem todoItem){
		TodoItem updatedTodoItem=todoService.updateTodoItem(id,todoItem);
		return ResponseEntity.ok(updatedTodoItem);
	}

	@PostMapping("/api/todoItems/{id}")
	public ResponseEntity<?> addTodoItems(@PathVariable Integer id, @RequestBody TodoItem todoItem){
		List<TodoItem> todoItems=todoService.addTodoItem(id,todoItem);
		return ResponseEntity.ok(todoItems);
	}

	@DeleteMapping("/api/todoItems/{id}")
	public ResponseEntity<?> deleteTodoItem(@PathVariable Integer id, @RequestBody TodoItem todoItem){
		System.out.println("inside controller of delete mapping");
		List<TodoItem> todoItems=todoService.delete(id);
		return ResponseEntity.ok(todoItems);
	}








}
