package org.example.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class MainController {

    @GetMapping("/")
    public String startPage(){
        return "index";
    }

    @GetMapping("/main")
    public String mainPage(){
        return "main";
    }

}
