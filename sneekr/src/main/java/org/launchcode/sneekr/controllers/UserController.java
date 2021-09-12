package org.launchcode.sneekr.controllers;

import com.fasterxml.jackson.databind.node.ObjectNode;
import org.launchcode.sneekr.models.User;
import org.launchcode.sneekr.repositories.UserRepository;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.security.Principal;
import java.util.Base64;
import java.util.List;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {

    private final UserRepository userRepository;

    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }
    @GetMapping("/users")
    public List<User> getUsers() {
        return (List<User>) userRepository.findAll();
    }

    @PostMapping("/users")
    void addUser(@RequestBody User user) {
        userRepository.save(user);
    }

    @GetMapping("/login")
    public String login(@RequestBody User user) {
        return
                (user.getEmail().equals("user") && user.getPassword().equals("password"))?"true":"false";
    }
    @PostMapping("/signin")
    public String signin(@RequestBody ObjectNode user) {
        return
                (user.get("username").asText().equals("user") && user.get("password").asText().equals("password"))?"true":"false";
    }

    @PostMapping("/signup")
    void register(@RequestBody User user) {
        userRepository.save(user);
    }

    @RequestMapping("/user")
    public Principal user(HttpServletRequest request) {
        String authToken = request.getHeader("Authorization")
                .substring("Basic".length()).trim();
        return () ->  new String(Base64.getDecoder()
                .decode(authToken)).split(":")[0];
    }
}
