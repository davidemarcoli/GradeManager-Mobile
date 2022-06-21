package com.dala.grademanager.jpa;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.GenericGenerator;
import org.springframework.security.crypto.bcrypt.BCrypt;

import javax.persistence.*;
import java.util.UUID;

@Entity(name = "users")
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class User {

    @Id
    @GeneratedValue(generator = "UUID")
    @GenericGenerator(
            name = "UUID",
            strategy = "org.hibernate.id.UUIDGenerator"
    )
    @Column(updatable = false, nullable = false)
    private UUID id;
    private String name;
    private String email;
    private String password;

    @PrePersist
    public void prePersist() {
        /*if (id == null) {
            id = UUID.randomUUID();
        }*/
        // encrypt password
        password = BCrypt.hashpw(password, BCrypt.gensalt());
/*
        password = passwordEncoder.encode(password);
*/

    }
}
