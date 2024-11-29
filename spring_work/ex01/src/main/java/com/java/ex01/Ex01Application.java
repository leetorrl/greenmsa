package com.java.ex01;

import com.java.ex01.user.UserControlier;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

import java.util.Arrays;

@SpringBootApplication
public class Ex01Application {

	public static void main(String[] args) {

		ApplicationContext applicationContext = SpringApplication.run(Ex01Application.class, args);
		Arrays.stream(applicationContext.getBeanDefinitionNames())
				.forEach(System.out::println);
	}
}
