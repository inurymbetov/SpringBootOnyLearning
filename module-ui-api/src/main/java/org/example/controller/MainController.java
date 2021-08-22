package org.example.controller;

import org.example.model.Users;
import org.example.service.UsersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import java.util.Map;

@Controller
public class MainController {

    @Autowired
    private UsersService usersService;

    @GetMapping("/")
    public String startPage(){
        return "index";
    }

    @GetMapping("/login")
    public String loginPage(){
        return "login";
    }

    @GetMapping("/main")
    public String mainPage(){
        return "main";
    }

    @GetMapping("/registration")
    public String registrationPage(){
        return "registration";
    }

    @PostMapping("/registration")
    public String addUsers(Users users, Map<String, Object> model){
        if (!usersService.registerUsers(users)){
            model.put("message", "User exists!");
        }
        return "redirect:/login";
    }
}
