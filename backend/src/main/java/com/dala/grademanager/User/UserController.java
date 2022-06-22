package com.dala.grademanager.User;

import com.dala.grademanager.exceptions.LoginException;
import com.dala.grademanager.jpa.User;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.context.request.WebRequest;

import javax.persistence.EntityExistsException;
import java.util.List;
import java.util.UUID;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/users")
public class UserController {

    private final UserService userService;

    @GetMapping("/")
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }

    @GetMapping("/{id}")
    public User getUser(@PathVariable("id") UUID id) {
        return userService.getUserById(id);
    }

    @GetMapping("/email/{email}")
    public User getUser(@PathVariable("email") String email) {
        return userService.getUserByEmail(email);
    }

    @PostMapping("/security/register")
    public User saveUser(@RequestBody User user) throws LoginException {
        return userService.saveUser(user);
    }

    @PostMapping("/security/login")
    public User loginUser(@RequestBody User user) throws LoginException {
        return userService.loginUser(user);
    }

    @PostMapping("/security/plainLogin")
    public User validateUserLogin(@RequestBody User user) throws LoginException {
        return userService.validateUserLogin(user);
    }

}
