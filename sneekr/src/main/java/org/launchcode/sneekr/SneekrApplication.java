package org.launchcode.sneekr;

import org.launchcode.sneekr.models.User;
import org.launchcode.sneekr.repositories.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.stream.Stream;

@SpringBootApplication
public class SneekrApplication {

	public static void main(String[] args) {
		SpringApplication.run(SneekrApplication.class, args);
	}

	@Bean
	CommandLineRunner init(UserRepository userRepository) {
		return args -> {
			userRepository.findAll().forEach(System.out::println);
		};
	}

}
