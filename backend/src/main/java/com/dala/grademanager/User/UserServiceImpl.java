package com.dala.grademanager.User;

import com.dala.grademanager.exceptions.LoginException;
import com.dala.grademanager.jpa.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.stereotype.Service;

import javax.persistence.EntityExistsException;
import java.util.List;
import java.util.Objects;
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
    public User saveUser(User user) throws LoginException {

        if (userRepository.findUserByEmail(user.getEmail()).isPresent()) {
            throw new LoginException(HttpStatus.CONFLICT, "User with email " + user.getEmail() + " already exists. Please log in!");
        }

        return userRepository.save(user);
    }

    @Override
    public User loginUser(User user) throws LoginException {
        User userFromDb = userRepository.findUserByEmail(user.getEmail()).orElse(null);
        if (userFromDb == null) {
            throw new LoginException(HttpStatus.NOT_FOUND, "User with email " + user.getEmail() + " does not exist. Please register!");
        }
        if (!BCrypt.checkpw(user.getPassword(), userFromDb.getPassword())) {
            throw new LoginException(HttpStatus.FORBIDDEN, "Wrong password. Please try again!");
        }

        return userFromDb;
    }

    @Override
    public User validateUserLogin(User user) throws LoginException {
        User userFromDb = userRepository.findUserByEmail(user.getEmail()).orElse(null);
        if (userFromDb == null) {
            throw new LoginException(HttpStatus.NOT_FOUND, "User with email " + user.getEmail() + " does not exist. Please register!");
        }
        if (!Objects.equals(user.getPassword(), userFromDb.getPassword())) {
            throw new LoginException(HttpStatus.FORBIDDEN, "Wrong password. Please try again!");
        }

        return userFromDb;
    }
}
