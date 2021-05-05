package es.oee.gestionusers.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.io.Serializable;

@Entity
public class User implements Serializable{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false, updatable = false)
    private Long id;
    @Column(name = "NAME", nullable = false, length = 150)
    private String name;
    @Column(name = "EMAIL", nullable = false, length = 200, unique = true)
    private String email;
    private Integer age;
    @Column(name = "PASSWD", length = 150)
    private String passwd;

    public User(){}

    public User(Long id, String name, String email, Integer age, String passwd) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.age = age;
        this.passwd = passwd;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    public String getPasswd() {
        return passwd;
    }

    public void setPasswd(String passwd) {
        this.passwd = passwd;
    }
}
