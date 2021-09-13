package org.launchcode.sneekr;

import org.launchcode.sneekr.models.ERole;
import org.launchcode.sneekr.models.Role;
import org.launchcode.sneekr.models.User;
import org.launchcode.sneekr.repositories.RoleRepository;
import org.launchcode.sneekr.repositories.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.annotation.Configuration;


import java.util.stream.Stream;

@Configuration
class LoadUserDatabase {

    private static final Logger log = LoggerFactory.getLogger(LoadUserDatabase.class);

    @Bean
    CommandLineRunner initRoleDatabase(RoleRepository roleRepository) {
        return args -> {
            log.info("Role Preloading " + roleRepository.save(new Role(ERole.ROLE_USER)));
            log.info("Role Preloading " + roleRepository.save(new Role(ERole.ROLE_MODERATOR)));
            log.info("Role Preloading " + roleRepository.save(new Role(ERole.ROLE_ADMIN)));		};
    };
    @Bean
    CommandLineRunner initUserDatabase(UserRepository userRepository) {

        return args -> {
            log.info("User Preloading " + userRepository.save(new User("admin", "admin@user.com", "password")));
            log.info("User Preloading " + userRepository.save(new User("user2", "user2@user.com", "password")));
            log.info("User Preloading " + userRepository.save(new User("user", "user@user.com", "password")));		};
    };

}