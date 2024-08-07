package com.emetadata.dynamicui.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class MainController {
    
    @GetMapping("/")
    public String index() {
        return "index";
    }

     @RequestMapping(value = "")
    public String redirect() {
        return "forward:/";
    }


}
