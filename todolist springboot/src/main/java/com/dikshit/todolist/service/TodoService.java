package com.dikshit.todolist.service;

import com.dikshit.todolist.model.TodoItem;
import com.dikshit.todolist.repository.TodoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;


@Service
public class TodoService {

	@Autowired  // instantiating the todorepository in the todoservice
	private TodoRepository todoRepository;

	public List<TodoItem> fetchAllTodoItems (String username) {
		List <TodoItem> todoItems=new ArrayList<>();
		todoItems=todoRepository.findByUsername(username);
		return todoItems;
	}

	public TodoItem fetchTodoItemById (Integer id) {
		TodoItem todoItem=todoRepository.findById(id).get();
		return todoItem;
	}

	public TodoItem updateTodoItem(Integer id, TodoItem todoItem) {
		todoRepository.save(todoItem);
		return todoItem;
	}

	public List<TodoItem> addTodoItem(TodoItem todoItem) {
		todoRepository.save(todoItem);
		return fetchAllTodoItems(todoItem.getUsername());
	}

	public List<TodoItem> delete(Integer id) {
		TodoItem todoItem=fetchTodoItemById(id);
		todoRepository.deleteById(id);
		return fetchAllTodoItems(todoItem.getUsername());
	}
}
