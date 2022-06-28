package com.dala.grademanager.Grade;

import com.dala.grademanager.exceptions.LoginException;
import com.dala.grademanager.jpa.Grade;
import io.swagger.v3.oas.annotations.Operation;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/grades")
public class GradeController {

    private final GradeService gradeService;

    @GetMapping("/")
    @Operation(description = "Get all grades that are in the database. (Only for testing or stats purposes)")
    public List<Grade> getAllGrades() {
        return gradeService.getAllGrades();
    }

    @GetMapping("/{id}")
    @Operation(description = "Get Grade by ID")
    public Grade getGradeByID(@PathVariable("id") String id) {
        return gradeService.getGradeByID(id);
    }

    @GetMapping("/count/{id}")
    @Operation(description = "Get Count of Grades by User ID")
    public int getGradeCountByUserID(@PathVariable("id") String userId) {
        return gradeService.getGradesByUserID(userId).size();
    }

    @GetMapping("/user/{id}")
    @Operation(description = "Get Grades by User ID")
    public List<Grade> getGradesByUserID(@PathVariable("id") String userId) {
        return gradeService.getGradesByUserID(userId);
    }

    @PostMapping("/persistence/addgrade")
    @Operation(description = "Persist a new Grade")
    public Grade saveGrade(@RequestBody Grade grade) {
        System.out.println("Got add grade request with payload of " + grade.toString());
        return gradeService.saveGrade(grade);
    }

    @DeleteMapping("/delete/{id}")
    @Operation(description = "Delete an existing Grade")
    public void deleteGradeByID(@PathVariable("id") String gradeId) {
        System.out.println("Got a grade delete request.");
        gradeService.deleteGradeByID(gradeId);
    }

    @PutMapping("/update/{id}")
    @Operation(description = "Update an existing Grade")
    public Grade updateGradeByID(@PathVariable("id") String gradeId, @RequestBody Grade updatedGrade) {
        System.out.println("Got a grade update request");
        return gradeService.updateGradeByID(gradeId, updatedGrade);
    }
}
