package com.adityarocks.rest.webservices.restfulwebservices.basic.auth;

public class AuthenticationBean {

	private String message;

	public AuthenticationBean(String message) {
		// super();
		this.message = message;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}
	
}
