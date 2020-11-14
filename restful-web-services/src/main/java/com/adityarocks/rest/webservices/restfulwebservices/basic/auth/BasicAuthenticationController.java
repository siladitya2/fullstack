package com.adityarocks.rest.webservices.restfulwebservices.basic.auth;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
@CrossOrigin
@RestController
public class BasicAuthenticationController {

	@GetMapping(path = "basicauth")
	public AuthenticationBean helloWorldBean() {
		return new AuthenticationBean("You are now authenticated");
	}
}