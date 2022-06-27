package com.dala.grademanager.Grade;

import com.dala.grademanager.jpa.Grade;

import java.util.List;

public interface GradeService {
    List<Grade> getAllGrades();

    Grade getGradeByID(String id);

    Grade saveGrade(Grade grade);

    List<Grade> getGradesByUserID(String userId);

    void deleteGradeByID(String gradeId);

    Grade updateGradeByID(String gradeId, Grade newGrade);
}
