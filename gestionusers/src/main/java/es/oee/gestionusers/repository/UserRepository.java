package es.oee.gestionusers.repository;

import es.oee.gestionusers.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, String>{
    User findUserByEmail(String email);
}
