package org.launchcode.sneekr;

import org.launchcode.sneekr.controllers.CustomerOrderController;
import org.launchcode.sneekr.models.*;
import org.launchcode.sneekr.repositories.ItemRepository;
import org.launchcode.sneekr.repositories.RoleRepository;
import org.launchcode.sneekr.repositories.UserRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.*;

@Configuration
class LoadItemDatabase {

    private static final Logger log = LoggerFactory.getLogger(LoadItemDatabase.class);

    @Autowired
    PasswordEncoder encoder;

    @Bean
    CommandLineRunner initDatabase(ItemRepository itemRepository, RoleRepository roleRepository, UserRepository userRepository, CustomerOrderController customerOrderController) {
        return args -> {
            Item sampleItemOne = new Item("Air Jordan Elite", "The latest and greatest must have Jordans!", 99.99f);
            Item sampleItemTwo = new Item("Performance Tennis Shoes", "High-end tennis shoes for the discerning tennis athlete.", 59.99f);
            Item sampleItemThree = new Item("Beach Flip Flops", "Comfortable and stylish footwear for casual outdoor fun!", 9.99f);
            Item sampleItemFour = new Item("Steel-toed Boots", "Rugged boots ready to withstand anything your job site can throw at them", 89.99f);
            Item sampleItemFive = new Item("Soccer Cleats", "Keep your traction on the pitch with these stylish and functional cleats!", 49.99f);

            log.info("Preloading Sample Products:");
            log.info("Preloading " + itemRepository.save(sampleItemOne));
            log.info("Preloading " + itemRepository.save(sampleItemTwo));
            log.info("Preloading " + itemRepository.save(sampleItemThree));
            log.info("Preloading " + itemRepository.save(sampleItemFour));
            log.info("Preloading " + itemRepository.save(sampleItemFive));

            log.info("Preloading Roles:");
            log.info("Role Preloading " + roleRepository.save(new Role(ERole.ROLE_USER)));
            log.info("Role Preloading " + roleRepository.save(new Role(ERole.ROLE_MODERATOR)));
            log.info("Role Preloading " + roleRepository.save(new Role(ERole.ROLE_ADMIN)));

            Set<Role> roles = new HashSet<>();
            Optional<Role> userRole = roleRepository.findByName(ERole.ROLE_USER);
            userRole.ifPresent(roles::add);
            User sampleUser = new User("sneekr", "sneekr@sneekr.org", encoder.encode("sneekr"), roles);

            List<Item> samplePurchasedItems = new ArrayList<>();
            samplePurchasedItems.add(sampleItemOne);
            samplePurchasedItems.add(sampleItemTwo);
            CustomerOrder sampleOrder = new CustomerOrder(samplePurchasedItems, sampleUser, "Sample Order", "123 Main St", "", "United States", "MO", "St. Louis", "63111");

            log.info("Preloading Sample User:");
            log.info("Preloading " + userRepository.save(sampleUser));

            log.info("Preloading Sample Customer Order:");
            log.info("Preloading " + customerOrderController.saveOrder(sampleOrder));
        };
    };
}
