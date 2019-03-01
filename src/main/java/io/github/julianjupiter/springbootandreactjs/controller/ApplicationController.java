package io.github.julianjupiter.springbootandreactjs.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ApplicationController {
    @GetMapping("/")
    public String index() {
        return "forward:/index.html";
    }
}
