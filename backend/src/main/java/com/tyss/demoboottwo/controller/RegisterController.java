package com.tyss.demoboottwo.controller;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.tyss.demoboottwo.dtos.User;
import com.tyss.demoboottwo.service.UserService;

@CrossOrigin(origins = { "http://localhost:3000", "http://localhost:4200" })
@RestController
@RequestMapping("/api/v1")
public class RegisterController {
	
	@Autowired
	UserService serviceImp;
	
	
	@GetMapping("/users")
	  public List<User> getAllUsers() {
	    return serviceImp.getAllUsers();
	  }
	
	@GetMapping("/users/{id}")
	  public User getUser(@PathVariable int id) {
	    return serviceImp.findById(id);
	  }
	
	@PostMapping("/users")
	public ResponseEntity<Void> registerUser(User user) {
		
		user = serviceImp.registerUserById(user);
		if(user.getId() != 0) {
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(user.getId())
		        .toUri();

		    return ResponseEntity.created(uri).build();
		}
		
		return ResponseEntity.notFound().build();

	}
	
	@PostMapping("/users/{id}")
	public ResponseEntity<User> loginUser(@PathVariable int id,@RequestBody User user){
		boolean flag = serviceImp.loginUser(id,user);
		
		if (flag) {
				
		      return ResponseEntity.accepted().build();
		    }

		    return ResponseEntity.notFound().build();
		
	}
	
}
