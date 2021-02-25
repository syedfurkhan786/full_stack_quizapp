package com.tyss.demoboottwo.dao;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.PersistenceUnit;
import javax.persistence.Query;

import org.springframework.stereotype.Repository;

import com.tyss.demoboottwo.dtos.Questions;
import com.tyss.demoboottwo.dtos.Results;

@Repository
public class QuizDaoImple implements QuizDao {

	@PersistenceUnit
	EntityManagerFactory emf=null;
	
	List<Results>list =new ArrayList<Results>();
	
	@SuppressWarnings("unchecked")
	@Override
	public List<Questions> getQuiz(String language) {
		EntityManager em = emf.createEntityManager();
		em.getTransaction().begin();
			
			
		Query query = em.createQuery("select Q from Questions Q where Q.questionLanguage=:language");
		query.setParameter("language", language);
		
		return query.getResultList();
		    		
		
		
	}


	@Override
	public List<Results> getResults(String username, String language, int score) {
		EntityManager em = emf.createEntityManager();
		em.getTransaction().begin();
		Results result = new Results(username, score, language);
		em.persist(result);
		list.add(result);
		em.getTransaction().commit();
		return list;
	}

}
