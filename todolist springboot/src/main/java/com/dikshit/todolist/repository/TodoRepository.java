package com.dikshit.todolist.repository;

import com.dikshit.todolist.model.TodoItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

//@Repository
//@Component
public interface TodoRepository extends CrudRepository<TodoItem,Integer> {

//	public interface TodoRepository extends 	JpaRepository<TodoItem, Integer> {

	// we are getting crud methods using this.
	//	CREATE TABLE todo_item  (      id         VARCHAR(100),      task VARCHAR(100),      done Boolean,      description  VARCHAR(100)   );

}
