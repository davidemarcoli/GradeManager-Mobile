package com.dala.grademanager.Grade;

import com.dala.grademanager.jpa.Grade;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface GradeRepository extends JpaRepository<Grade, String> {
    @Query("select g from grades g where g.id = ?1")
    Optional<Grade> findGradeById(String id);
}
