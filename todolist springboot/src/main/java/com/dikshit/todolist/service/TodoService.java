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

	public List<TodoItem> fetchAllTodoItems () {
		List <TodoItem> todoItems=new ArrayList<>();
		todoRepository.findAll().forEach(todoItem1 -> todoItems.add(todoItem1));
		return todoItems;
	}


	public TodoItem updateTodoItem(Integer id, TodoItem todoItem) {
		Optional<TodoItem> todoOpt=this.fetchAllTodoItems().stream().filter(item -> item.getId().equals(id)).findAny();
		if(todoOpt.isPresent()){
			TodoItem todoTemp=todoOpt.get();
			delete(todoTemp.getId());
			addTodoItem(todoItem.getId(),todoItem);
			return todoItem;
		}
		return null;
	}

	public List<TodoItem> addTodoItem(Integer id, TodoItem todoItem) {
		todoRepository.save(todoItem);
		return fetchAllTodoItems();
	}

	public List<TodoItem> delete(Integer id) {
		todoRepository.deleteById(id);
		return fetchAllTodoItems();
	}


}
