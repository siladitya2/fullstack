package com.adityarocks.rest.webservices.restfulwebservices.jwt.resource;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

public class BcryptEncoderTester {
public static void main(String[] args) {
	BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder();
	System.out.println(bCryptPasswordEncoder.encode("test"));
}
}
