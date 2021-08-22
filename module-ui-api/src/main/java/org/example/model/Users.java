package org.example.model;

import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
public class Users {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String username;

    private String password;

    private boolean isActive = true;

    @ElementCollection(targetClass = UserRole.class, fetch = FetchType.LAZY)
    @CollectionTable(name = "user_role", joinColumns = @JoinColumn(name = "user_id"))
    @Enumerated(EnumType.STRING)
    private List<UserRole> userRole;

    private String fullName;

}
