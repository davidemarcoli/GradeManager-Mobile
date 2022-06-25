package com.dala.grademanager.jpa;

import lombok.*;

import javax.persistence.*;
import java.util.UUID;

@Entity (name = "grades")
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Grade {
    @Id
    private String id;
    private String name;
    private double grade;
    private String subject;
    private String school;
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @PrePersist
    public void prePersist() {
        if (id == null) {
            id = UUID.randomUUID().toString();
        }
    }
}
