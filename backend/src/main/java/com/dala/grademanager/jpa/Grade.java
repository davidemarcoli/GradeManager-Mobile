package com.dala.grademanager.jpa;

import lombok.*;

@Setter @Getter
@NoArgsConstructor @AllArgsConstructor
public class Grade {
    private int id;
    private String name;
    private double grade;
    private String subject;
    private String school;

}
