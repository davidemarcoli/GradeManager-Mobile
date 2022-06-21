package com.dala.grademanager.jpa;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.security.crypto.password.PasswordEncoder;

import javax.persistence.PrePersist;
import java.util.UUID;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class User {

    @Autowired
    private PasswordEncoder passwordEncoder;
    private UUID id;
    private String name;
    private String email;
    private String password;

    @PrePersist
    public void prePersist() {
        if (id == null) {
            id = UUID.randomUUID();
        }
        // encrypt password
        password = BCrypt.hashpw(password, BCrypt.gensalt());
/*
        password = passwordEncoder.encode(password);
*/

    }
}
