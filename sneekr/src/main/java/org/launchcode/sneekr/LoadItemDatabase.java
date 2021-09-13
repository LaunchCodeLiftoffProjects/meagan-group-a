package org.launchcode.sneekr;

import org.launchcode.sneekr.models.Item;
import org.launchcode.sneekr.models.User;
import org.launchcode.sneekr.repositories.ItemRepository;
import org.launchcode.sneekr.repositories.UserRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
class LoadItemDatabase {

    private static final Logger log = LoggerFactory.getLogger(LoadItemDatabase.class);

    @Bean
    CommandLineRunner initDatabase(ItemRepository itemRepository, UserRepository userRepository) {

        return args -> {
            log.info("Preloading products:");
            log.info("Preloading " + itemRepository.save(new Item("Air Jordan Elite", "The latest and greatest must have Jordans!", 99.99)));
            log.info("Preloading " + itemRepository.save(new Item("Performance Tennis Shoes", "High-end tennis shoes for the discerning tennis athlete.", 59.99)));
            log.info("Preloading " + itemRepository.save(new Item("Beach Flip Flops", "Comfortable and stylish footwear for casual outdoor fun!", 9.99)));
            log.info("Preloading " + itemRepository.save(new Item("Steel-toed Boots","Rugged boots ready to withstand anything your job site can throw at them", 89.99)));
            log.info("Preloading " + itemRepository.save(new Item("Soccer Cleats", "Keep your traction on the pitch with these stylish and functional cleats!",49.99 )));

            log.info("Preloading users:");
            log.info("Preloading " + userRepository.save(new User("John", "john@domain.com")));
            log.info("Preloading " + userRepository.save(new User("Julie", "julie@domain.com")));
            log.info("Preloading " + userRepository.save(new User("Jennifer", "jennifer@domain.com")));
            log.info("Preloading " + userRepository.save(new User("Helen", "helen@domain.com")));
            log.info("Preloading " + userRepository.save(new User("Rachel", "rachel@domain.com")));
        };
    }
}
