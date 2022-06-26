package com.dala.grademanager.Grade;

import com.dala.grademanager.jpa.Grade;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GradeServiceImpl implements GradeService {

    @Autowired
    private GradeRepository gradeRepository;

    @Override
    public List<Grade> getAllGrades() {
        return gradeRepository.findAll();
    }

    @Override
    public Grade getGradeByID(String id) { return gradeRepository.findGradeById(id).orElse(null); }

    @Override
    public Grade saveGrade(Grade grade) {
        return gradeRepository.save(grade);
    }

    @Override
    public List<Grade> getGradesByUserID(String userId) {
        return gradeRepository.findByUser_Id(userId);
    }
}
