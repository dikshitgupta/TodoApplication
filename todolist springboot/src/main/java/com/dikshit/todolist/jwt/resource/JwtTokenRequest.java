package com.dikshit.todolist.jwt.resource;

import java.io.Serializable;

public class JwtTokenRequest implements Serializable {

	private static final long serialVersionUID = -5616176897013108345L;

	private String username;
	private String password;

	public JwtTokenRequest() {
		super();
	}

	public JwtTokenRequest(String username, String password) {
		this.setUsername(username);
		this.setPassword(password);
	}

	public String getUsername() {
		return this.username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return this.password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
}


//{
// Bearer feyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0b2RvbGlzdCIsImV4cCI6MTYyOTg5NDAwNCwiaWF0IjoxNjI5Mjg5MjA0fQ.VmZeKoS2eMPZar_KyFC9rAEJg2wAnwP-lA6Y89_a3F_s734UStga6kzYxiQ3AUhk0GPSREriF0RY7Mc3UCsfRA
//		"token": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0b2RvbGlzdCIsImV4cCI6MTYyOTg5NDAwNCwiaWF0IjoxNjI5Mjg5MjA0fQ.VmZeKoS2eMPZar_KyFC9rAEJg2wAnwP-lA6Y89_a3F_s734UStga6kzYxiQ3AUhk0GPSREriF0RY7Mc3UCsfRA"
//}