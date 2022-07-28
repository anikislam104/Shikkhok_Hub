package com.tutor.shikkhokhub.controller;

import com.tutor.shikkhokhub.model.User;
import com.tutor.shikkhokhub.services.UserServiceInterface;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1")
public class UserController {
    private final UserServiceInterface userService;

    public UserController(UserServiceInterface userService) {
        this.userService = userService;
    }

    @PostMapping("/user")
    public User createUser(@RequestBody User user) {
        return userService.createUser(user);
    }

    @GetMapping("/user")
    public List<User> getAllUser(@RequestBody User user) {
        return userService.getAllUser();
    }
}
