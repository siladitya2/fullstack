package com.adityarocks.rest.webservices.restfulwebservices.budget;

import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
@Repository
public interface ExpenseJPARepository extends JpaRepository<Expense, Long> {
	public List<Expense> findByUsername(String username);
	
	public List<Expense> findByType(String type);
	
	public List<Expense> findByExpenseDate(Date date);
	
	public List<Expense> findByExpenseMonth(String username);
	
	public List<Expense> findById(long id);
	
	
	@Query("SELECT e FROM Expense e WHERE LOWER(e.expenseMonth) = LOWER(:expenseMonth) AND LOWER(e.username) = LOWER(:username) ")
    public List<Expense> find(@Param("expenseMonth") String expenseMonth,@Param("username") String username);
}
