package com.library1;


import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import com.library.service.BookService;

public class MainClass {
	 public static void main(String[] args) {
	        ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");
	        BookService bookService = (BookService) context.getBean("bookService");
	        bookService.addBook("The Great Gatsby");
	    }
}
