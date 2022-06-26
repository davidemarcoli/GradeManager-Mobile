package com.dala.grademanager.User;

import com.dala.grademanager.jpa.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;
import java.util.UUID;

public interface UserRepository extends JpaRepository<User, String> {
    @Query("select u from users u where u.email = ?1")
    Optional<User> findUserByEmail(String email);
}
