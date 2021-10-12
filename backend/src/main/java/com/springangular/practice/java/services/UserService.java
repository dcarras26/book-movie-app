package com.springangular.practice.java.services;

import java.util.List;
import java.util.Optional;

import com.springangular.practice.java.models.User;

public interface UserService {

    //TODO Generate Javadoc comments CTRL + SHIFT + J
    public User save(User user);

    //TODO Generate Javadoc comments CTRL + SHIFT + J
    public Optional<User> get(Long id);

    //TODO Generate Javadoc comments CTRL + SHIFT + J
    public User update(User user);

    //TODO Generate Javadoc comments CTRL + SHIFT + J
    public String delete(Long id);
    
    //TODO Generate Javadoc comments CTRL + SHIFT + J
    public List<User> getAll();
}
