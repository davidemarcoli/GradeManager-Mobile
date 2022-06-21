package com.dala.grademanager.User;

import com.dala.grademanager.jpa.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;
import java.util.UUID;

public interface UserRepository extends JpaRepository<User, UUID> {

    public Optional<User> findUserByEmail(String email);

}
