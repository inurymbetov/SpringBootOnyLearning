package org.example.service;

import org.example.model.UserRole;
import org.example.model.Users;
import org.example.repository.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UsersService {

    @Autowired
    private UsersRepository usersRepository;

    public boolean registerUsers(Users users) {
        Users u = usersRepository.findByUsername(users.getUsername());
        if(u != null){
            return false;
        }
        Users newUsers = new Users();
        newUsers.setUsername(users.getUsername());
        newUsers.setPassword(users.getPassword());
        newUsers.setUserRole(List.of(UserRole.USER));
        usersRepository.save(newUsers);
        return true;
    }
}
