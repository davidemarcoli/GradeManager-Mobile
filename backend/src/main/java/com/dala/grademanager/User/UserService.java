package com.dala.grademanager.User;

import com.dala.grademanager.jpa.User;

import java.util.List;
import java.util.UUID;

public interface UserService {
    List<User> getAllUsers();

    User getUserById(UUID id);

    User getUserByEmail(String email);

    User saveUser(User user);

    User loginUser(User user);
}
