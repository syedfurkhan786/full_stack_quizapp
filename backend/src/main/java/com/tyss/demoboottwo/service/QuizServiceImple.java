package com.tyss.demoboottwo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tyss.demoboottwo.dao.QuizDao;
import com.tyss.demoboottwo.dtos.Questions;
import com.tyss.demoboottwo.dtos.Results;

@Service
public class QuizServiceImple implements QuizService {

	@Autowired
	QuizDao quiz;
	
	@Override
	public List<Questions> getQuiz(String language) {
		
		return quiz.getQuiz(language);
	}

	@Override
	public List<Results> getResults(String username, String language, int score) {

		return quiz.getResults(username,language,score);
	}

}
