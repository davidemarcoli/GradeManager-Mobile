package com.dala.grademanager.Grade;

import com.dala.grademanager.jpa.Grade;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface GradeRepository extends JpaRepository<Grade, String> {
    //@Query("select g from grades g where g.id = ?1")
    //Optional<Grade> findGradeById(String id);

    Optional<Grade> findGradeById(String id);

    @Query("SELECT g FROM grades g where g.user.id = ?1")
    List<Grade> getGradesByUserID(String userId);

    List<Grade> findByUser_Id(String id);

    //maybe need to declare function below:
    //void deleteGradeById(String gradeId);
}
