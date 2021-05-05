package es.oee.gestionusers.controller;

import es.oee.gestionusers.model.User;
import es.oee.gestionusers.service.UserService;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user")
public class UserController {
    private final UserService userService;

    public UserController(UserService userService){
        this.userService  = userService;
    }

    @GetMapping("/all")
    public ResponseEntity<List<User>> getAllUsers () {
        List<User> users = userService.findAllUsers();
        return new ResponseEntity<>(users, HttpStatus.OK);
    }

    @PostMapping("/find")
    public ResponseEntity<Boolean> getUserByEmail (@RequestBody User user) {
        Boolean res = false;
        User usuarioBD = userService.findUserByEmail(user.getEmail());
        if (user.getPasswd().equals(usuarioBD.getPasswd())){
            res = true;
        }
        return new ResponseEntity<>(res, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<User> addUser(@RequestBody User user) {
        User newUser = userService.addUser(user);
        return new ResponseEntity<>(newUser, HttpStatus.CREATED);
    }
}
