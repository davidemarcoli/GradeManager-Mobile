package com.dala.grademanager.User;

import com.dala.grademanager.jpa.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.stereotype.Service;

import javax.persistence.EntityExistsException;
import java.util.List;
import java.util.UUID;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @Override
    public User getUserById(UUID id) {
        return userRepository.findById(id).orElse(null);
    }

    @Override
    public User getUserByEmail(String email) {
        return userRepository.findUserByEmail(email).orElse(null);
    }

    @Override
    public User saveUser(User user) {

        if (userRepository.findUserByEmail(user.getEmail()).isPresent()) {
            throw new EntityExistsException("User with email " + user.getEmail() + " already exists. Please log in!");
        }

        return userRepository.save(user);
    }

    @Override
    public User loginUser(User user) {
        User userFromDb = userRepository.findUserByEmail(user.getEmail()).orElse(null);
        if (userFromDb == null) {
            throw new EntityExistsException("User with email " + user.getEmail() + " does not exist. Please register!");
        }
        if (!BCrypt.checkpw(user.getPassword(), userFromDb.getPassword())) {
            throw new EntityExistsException("Wrong password. Please try again!");
        }

        return userFromDb;
    }
}
