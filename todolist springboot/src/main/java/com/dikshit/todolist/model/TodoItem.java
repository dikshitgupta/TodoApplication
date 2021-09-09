package com.dikshit.todolist.model;

import javax.persistence.*;

@Entity
@Table(name = "todo_item")
public class TodoItem {

	@Id
	@GeneratedValue
	private Integer id;
	private String username;
	private String task;
	private Boolean done;
	private String description;


	public void setUsername(String username) {
		this.username = username;
	}

	public String getUsername() {
		return username;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getTask() {
		return task;
	}

	public void setTask(String task) {
		this.task = task;
	}

	@Override
	public String toString() {
		return "TodoItem{" +
				"id=" + id +
				", username='" + username + '\'' +
				", task='" + task + '\'' +
				", done=" + done +
				", description='" + description + '\'' +
				'}';
	}

	public Boolean getDone() {
		return done;
	}

	public void setDone(Boolean done) {
		this.done = done;
	}
}
