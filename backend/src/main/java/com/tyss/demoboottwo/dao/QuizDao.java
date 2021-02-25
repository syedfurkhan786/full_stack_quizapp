package com.tyss.demoboottwo.dao;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.tyss.demoboottwo.dtos.Questions;
import com.tyss.demoboottwo.dtos.Results;

@Repository
public interface QuizDao {
	public List<Questions> getQuiz(String language);

	public List<Results> getResults(String username, String language, int score);
}
