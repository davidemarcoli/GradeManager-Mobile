package com.dala.grademanager.User;

import com.dala.grademanager.exceptions.LoginException;
import com.dala.grademanager.jpa.User;
import io.swagger.v3.oas.annotations.Operation;
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
    @Operation(description = "Get all Users (for testing purposes)")
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }

    @GetMapping("/{id}")
    @Operation(description = "Get User by ID")
    public User getUserById(@PathVariable("id") String id) {
        return userService.getUserById(id);
    }

    @GetMapping("/email/{email}")
    @Operation(description = "Get User by Email")
    public User getUserByEmail(@PathVariable("email") String email) {
        return userService.getUserByEmail(email);
    }

    @PostMapping("/security/register")
    @Operation(description = "Register a new User")
    public User saveUser(@RequestBody User user) throws LoginException {

        System.out.println("Got register request with payload of " + user.toString());

        return userService.saveUser(user);
    }

    @PostMapping("/security/login")
    @Operation(description = "Login with an existing User")
    public User loginUser(@RequestBody User user) throws LoginException {

        System.out.println("Got login request with payload of " + user.toString());

        return userService.loginUser(user);
    }

    @PostMapping("/security/plainLogin")
    @Operation(description = "Login with an existing User")
    public User validateUserLogin(@RequestBody User user) throws LoginException {
        return userService.validateUserLogin(user);
    }

    @PutMapping("/edit")
    @Operation(description = "Update an existing User")
    public User editUser(@RequestBody User user) {
        System.out.println("Got PP change request with payload of " + user.toString());
        return userService.editUser(user);
    }

}
