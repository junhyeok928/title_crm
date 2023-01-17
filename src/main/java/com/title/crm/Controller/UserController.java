package com.title.crm.Controller;

import com.title.crm.Entity.User;
import com.title.crm.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/users")
public class UserController {
    @Autowired
    private UserService userService;

    @GetMapping
    public List<User> userList(){
        return userService.userList();
    }

    @PostMapping
    public void insertUser(@RequestBody User user){
        userService.insertUser(user);
    }

    @GetMapping("/{id}")
    public Optional<User> fetchUserByID(@PathVariable int id){
        return userService.fetchUserByID(id);
    }

    @PutMapping("/{id}")
    public void updateUser(@PathVariable int id, @RequestBody User user){
        User updateUser = User.builder()
                .id(id)
                .password(user.getPassword())
                .username(user.getUsername())
                .firstName(user.getFirstName())
                .lastName(user.getLastName())
                .age(user.getAge())
                .salary(user.getSalary())
                .build();
        userService.updateUser(updateUser);
    }
    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable int id){
        userService.deleteUser(id);
    }
}
