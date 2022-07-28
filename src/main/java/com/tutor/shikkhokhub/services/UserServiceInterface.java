package com.tutor.shikkhokhub.services;

import com.tutor.shikkhokhub.model.User;

import java.util.List;

public interface UserServiceInterface {
    User createUser(User user);

    List<User> getAllUser();
}
