package com.tyss.demoboottwo.service;


import java.util.List;

import org.springframework.stereotype.Service;

import com.tyss.demoboottwo.dtos.User;

@Service
public interface UserService {
	
	public User registerUserById(User user);

	public boolean loginUser(int id, User user);

	public List<User> getAllUsers();

	public User findById(int id);
}
