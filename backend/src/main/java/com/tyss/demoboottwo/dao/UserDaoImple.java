package com.tyss.demoboottwo.dao;


import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.Query;
import javax.persistence.TypedQuery;
import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.tyss.demoboottwo.dtos.User;
import com.tyss.demoboottwo.utility.QuizUtility;

@Repository
public class UserDaoImple implements UserDao {

	
	 EntityManager em;
	
	 List<User> list ;
	 User user = new User();
	 
	 @Autowired
	 QuizUtility quiz;
	
	@Transactional 
	@SuppressWarnings("unchecked")
	public User registerUserById(User user) {
		 em = quiz.dbConnector();
		 
		Query query = em.createQuery("select U from User U where U.username=:names");
		query.setParameter("names", user.getUsername());
		list = query.getResultList();
		if(list.isEmpty()) {
			em.persist(user);
			
			System.out.println("User registered");
			return user;
		}
		else {
			
			System.out.println("User already exists");
	   		 return user;
		}
		
		
	}

	@SuppressWarnings("unchecked")
	@Override
	public boolean loginUser(int id, User user) {
		em = quiz.dbConnector();
		Query query = em.createQuery("select U from User U where U.id=:id and U.username=:name and U.password=:pass");
		query.setParameter("id", id);
		query.setParameter("name", user.getUsername());
		query.setParameter("pass", user.getPassword());
		list = query.getResultList();
		if(list.isEmpty()) {
			System.out.println("failed");
			return false;
		}
		else {
			System.out.println("Successful");
			return true;
		}
		
	}

	@Override
	public List<User> getAllUsers() {
		
		em = quiz.dbConnector();
		TypedQuery<User> typedQuery= em.createQuery("FROM User ", User.class);
		list=typedQuery.getResultList();
		em.close();
		return list;
	}

	@Override
	public User findById(int id) {
		em = quiz.dbConnector();
		User user=em.find(User.class, id);
		em.close();
		return user;
	}

	
}
