package com.tutor.shikkhokhub.controller;

import com.tutor.shikkhokhub.model.User;
import com.tutor.shikkhokhub.services.UserServiceInterface;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
}
