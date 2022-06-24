package com.dala.grademanager.jpa;

import lombok.*;
import org.hibernate.annotations.GenericGenerator;
import org.springframework.security.crypto.bcrypt.BCrypt;

import javax.persistence.*;
import java.util.UUID;

@Entity(name = "users")
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class User {

    @Id
    private String id;
    private String name;
    private String email;
    private String password;
    private String profilePictureUrl;

    @PrePersist
    public void prePersist() {
        if (id == null) {
            id = UUID.randomUUID().toString();
        }
        // encrypt password
        if (password != null)
            password = BCrypt.hashpw(password, BCrypt.gensalt());
/*
        password = passwordEncoder.encode(password);
*/

    }
}
