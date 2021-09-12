package org.launchcode.sneekr.models;

import org.springframework.context.annotation.Primary;

import javax.persistence.*;
import java.util.List;

@Entity
public class User {

//    @Id
//    @GeneratedValue(strategy = GenerationType.AUTO)
//    private Long id;

    @Id
    @Column(nullable = false, unique = true, length = 45)
    private String email;

    @Column(nullable = false, unique = true, length = 20)
    private String username;

    @Column(nullable = false, length = 64)
    private String password;

    @Column(nullable = true, length = 30)
    private String firstName;

    @Column(nullable = true, length = 30)
    private String lastName;

    @OneToMany(mappedBy = "user")
    private List<CustomerOrder> customerOrders;
    // standard constructors / setters / getters / toString

    public User() {
    }
    public User(String username,String email, String password,String firstName, String lastName) {
        this.username = username;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.setPassword(password);
    }
    public User(String username,String email, String password) {
        this.username = username;
        this.email = email;
        this.setPassword(password);
    }


//    public long getId() {
//        return id;
//    }
//
//    public void setId(Long id) {
//        this.id = id;
//    }

    public String getEmail() { return email; }

    public void setEmail(String username) { this.email = username; }

    public String getPassword() {  return password; }

    public void setPassword(String password) { this.password = password; }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getUsername() { return username; }

    public void setUsername(String username) { this.username = username; }

    @Override
    public String toString() {
        return "User{" +
                //"id=" + id +
                ", username='" + username + '\'' +
                ", email='" + email + '\'' +
                ", Password='" + password + '\'' +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                '}';
    }
}