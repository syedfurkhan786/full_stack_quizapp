package com.tyss.demoboottwo.dtos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="questions")
public class Questions {
	@Id
	@Column(name="question_Id")
	private int questionId;
	@Column(name="question_language")
	private String questionLanguage;
	@Column(name="question")
	private String questions;
	@Column(name="answer")
	private String answer;
	@Column(name="option_one")
	private String optionOne;
	@Column(name="option_two")
	private String optionTwo;
	@Column(name="option_three")
	private String optionThree;
	@Column(name="option_four")
	private String optionFour;
	
	
	
	
}
