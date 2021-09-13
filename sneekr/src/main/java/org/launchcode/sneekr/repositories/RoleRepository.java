package org.launchcode.sneekr.repositories;

import org.launchcode.sneekr.models.ERole;
import org.launchcode.sneekr.models.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
    Optional<Role> findByName(ERole name);
}
