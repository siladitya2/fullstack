/*
 * package com.adityarocks.rest.webservices.restfulwebservices.jwt.resource;
 * 
 * import java.util.ArrayList; import java.util.List; import java.util.Optional;
 * 
 * import org.springframework.security.core.userdetails.UserDetails; import
 * org.springframework.security.core.userdetails.UserDetailsService; import
 * org.springframework.security.core.userdetails.UsernameNotFoundException;
 * import org.springframework.stereotype.Service;
 * 
 * @Service public class JwtInMemoryUserDetailsService implements
 * UserDetailsService {
 * 
 * static List<JwtUserDetails> inMemoryUserList = new ArrayList<>();
 * 
 * static { inMemoryUserList.add(new JwtUserDetails(1L, "in28minutes",
 * "$2a$10$3zHzb.Npv1hfZbLEU5qsdOju/tk2je6W6PnNnY.c1ujWPcZh4PL6e",
 * "ROLE_USER_2")); inMemoryUserList.add(new JwtUserDetails(2L,"mamai",
 * "$2a$10$Oc8vA/w2mt21DIMDmITmBu3n2YeoWWhYQzBZ6r82QMh7tbLgMOhPy","ROLE_USER_2")
 * ); //$2a$10$IetbreuU5KihCkDB6/r1DOJO0VyU9lSiBcrMDT.biU7FOt2oqZDPm
 * 
 * //$2a$10$Oc8vA/w2mt21DIMDmITmBu3n2YeoWWhYQzBZ6r82QMh7tbLgMOhPy
 * 
 * }
 * 
 * @Override public UserDetails loadUserByUsername(String username) throws
 * UsernameNotFoundException { Optional<JwtUserDetails> findFirst =
 * inMemoryUserList.stream() .filter(user ->
 * user.getUsername().equals(username)).findFirst();
 * 
 * if (!findFirst.isPresent()) { throw new
 * UsernameNotFoundException(String.format("USER_NOT_FOUND '%s'.", username)); }
 * 
 * return findFirst.get(); }
 * 
 * }
 * 
 * 
 */