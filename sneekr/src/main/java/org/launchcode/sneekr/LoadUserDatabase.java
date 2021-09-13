package org.launchcode.sneekr;

import org.launchcode.sneekr.controllers.AuthController;
import org.launchcode.sneekr.models.ERole;
import org.launchcode.sneekr.models.Role;
import org.launchcode.sneekr.models.User;
import org.launchcode.sneekr.payload.request.SignupRequest;
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
}