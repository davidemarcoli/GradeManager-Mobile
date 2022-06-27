package com.dala.grademanager.User;

import com.dala.grademanager.exceptions.LoginException;
import com.dala.grademanager.jpa.User;

import java.util.List;
import java.util.UUID;

public interface UserService {
    List<User> getAllUsers();

    User getUserById(String id);

    User getUserByEmail(String email);

    User saveUser(User user) throws LoginException;

    User loginUser(User user) throws LoginException;

    User validateUserLogin(User user) throws LoginException;

    User editUser(User user);
}
