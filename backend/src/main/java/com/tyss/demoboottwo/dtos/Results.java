package com.tyss.demoboottwo.dtos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="results")
public class Results {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="result_id")
	private int resultId;
	@Column(name="username")
	private String username;
	@Column(name="score")
	private int score;
	@Column(name="question_language")
	private String questionLanguage;
	
	
	public Results(String username, int score,String questionLanguage) {
		this.username = username;
		this.score = score;
		this.questionLanguage = questionLanguage;
	}
	
	

	

	
	
}
