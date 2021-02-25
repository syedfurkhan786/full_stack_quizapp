package com.tyss.demoboottwo.service;




import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tyss.demoboottwo.dao.UserDao;
import com.tyss.demoboottwo.dtos.User;

@Service
public class UserServiceImple implements UserService {

	@Autowired
	UserDao daoImp;
	
	
	
	@Override
	public User registerUserById(User user) {
		 return daoImp.registerUserById(user);
		 

	}



	@Override
	public boolean loginUser(int id,User user) {
		return daoImp.loginUser(id, user);
	}



	@Override
	public List<User> getAllUsers() {
		return daoImp.getAllUsers();
	}



	@Override
	public User findById(int id) {
		
		return daoImp.findById(id);
	}

}
