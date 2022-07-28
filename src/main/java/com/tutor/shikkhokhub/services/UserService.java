package com.tutor.shikkhokhub.services;

import com.tutor.shikkhokhub.entity.UserEntity;
import com.tutor.shikkhokhub.model.User;
import com.tutor.shikkhokhub.repository.UserRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService implements UserServiceInterface {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public User createUser(User user) {
        UserEntity userEntity = new UserEntity();

        BeanUtils.copyProperties(user, userEntity);
        userRepository.save(userEntity);
        return user;
    }

    @Override
    public List<User> getAllUser() {
        List<UserEntity> userEntities = userRepository.findAll();
        List<User> users = userEntities.stream().map(userEntity -> new User(
            userEntity.getId(),
                userEntity.getName(),
                userEntity.getEmail(),
                userEntity.getPassword()
        )).collect(java.util.stream.Collectors.toList());
        return users;
    }
}
