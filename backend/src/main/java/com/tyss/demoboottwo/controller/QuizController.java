package com.tyss.demoboottwo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tyss.demoboottwo.dtos.Questions;
import com.tyss.demoboottwo.dtos.Results;
import com.tyss.demoboottwo.service.QuizService;

@CrossOrigin(origins = { "http://localhost:3000", "http://localhost:4200" })
@RestController
@RequestMapping("/api/v1")
public class QuizController {
	
	@Autowired
	QuizService quiz;
	
	@PostMapping("{username}/quiz/{language}")
	public List<Questions> getQuiz(@PathVariable String username,@PathVariable String language){
		return quiz.getQuiz(language);
	}
	
	@PostMapping("{username}/quiz/{language}/results/{score}")
	public List<Results> getResults(@PathVariable String username,@PathVariable String language,@PathVariable int score){
		return quiz.getResults(username,language,score);
	}
}
