package com.dala.grademanager.Grade;

import com.dala.grademanager.exceptions.LoginException;
import com.dala.grademanager.jpa.Grade;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/grades")
public class GradeController {

    private final GradeService gradeService;

    @GetMapping("/")
    public List<Grade> getAllGrades() {
        return gradeService.getAllGrades();
    }

    @GetMapping("/{id}")
    public Grade getGradeByID(@PathVariable("id") String id) {
        return gradeService.getGradeByID(id);
    }

    @PostMapping("/persistence/addgrade")
    public Grade saveGrade(@RequestBody Grade grade) throws LoginException {
        System.out.println("Got add grade request with payload of " + grade.toString());
        return gradeService.saveGrade(grade);
    }
}
