package com.dikshit.todolist.controller;

import com.dikshit.todolist.model.TodoItem;
import com.dikshit.todolist.service.TodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class TodoController {

//	      HTTP Request --> Controller --> Service --> Repository
//    frontend  <-----     Controller  <--  Service

	@Autowired
	private TodoService todoService;

	@GetMapping("/hello")
	public ResponseEntity<?> helloMethod(){
		String s="happy living";
		return ResponseEntity.ok(s);
	}

	//fetch all todo items
	@GetMapping("/api/todoItems/{username}")
	public ResponseEntity<?> fetchAllTodoItems(@PathVariable String username){
		List<TodoItem> todoItems=todoService.fetchAllTodoItems(username);
		return ResponseEntity.ok(todoItems);
	}

	// update a todoitem
	@PutMapping("/api/todoItems/{id}")
	public ResponseEntity<?> updateTodoItems(@PathVariable Integer id, @RequestBody TodoItem todoItem){
		TodoItem updatedTodoItem=todoService.updateTodoItem(id,todoItem);
		System.out.println(updatedTodoItem);
		return ResponseEntity.ok(updatedTodoItem);
	}

	// Add a todoitem
	// In this request send blank value in id. blank string. the id is genereated by springboot.
	@PostMapping("/api/todoItems")
	public ResponseEntity<?> addTodoItems(@RequestBody TodoItem todoItem){
		List<TodoItem> todoItems=todoService.addTodoItem(todoItem);
		return ResponseEntity.ok(todoItems);
	}

	//Delete a todoitem .
	@DeleteMapping("/api/todoItems/{id}")
	public ResponseEntity<?> deleteTodoItem(@PathVariable Integer id){
		System.out.println("inside controller of delete mapping");
		List<TodoItem> todoItems=todoService.delete(id);
		return ResponseEntity.ok(todoItems);
	}








}
