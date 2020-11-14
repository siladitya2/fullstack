package com.adityarocks.rest.webservices.restfulwebservices.helloWorld;

public class HelloWorldBean {
	String message;
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	HelloWorldBean(String message){
		this.message=message;
	}
	
	
}
