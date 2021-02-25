package com.tyss.demoboottwo.dao;




import java.util.List;

import org.springframework.stereotype.Repository;

import com.tyss.demoboottwo.dtos.User;

@Repository
public interface UserDao {
	
	
	public User registerUserById(User user);

	public boolean loginUser(int id, User user);

	public List<User> getAllUsers();

	public User findById(int id);

	
}
