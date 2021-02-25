package com.tyss.demoboottwo.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.tyss.demoboottwo.dtos.Questions;
import com.tyss.demoboottwo.dtos.Results;

@Service
public interface QuizService {
	public List<Questions> getQuiz(String language);

	public List<Results> getResults(String username, String language, int score);
}
