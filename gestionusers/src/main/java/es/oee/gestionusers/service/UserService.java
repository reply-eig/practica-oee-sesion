package es.oee.gestionusers.service;

import es.oee.gestionusers.model.User;
import es.oee.gestionusers.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class UserService {
    private final UserRepository userRepo;

    @Autowired
    public UserService(UserRepository userRepo) {
        this.userRepo = userRepo;
    }

    public User addUser(User user) {
        return userRepo.save(user);
    }

    public List<User> findAllUsers() {
        return userRepo.findAll();
    }

    public User findUserByEmail(String email) {
        return userRepo.findUserByEmail(email);
    }
}
