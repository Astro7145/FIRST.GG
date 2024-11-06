package com.camp.mul.back.controller;

import com.camp.mul.back.service.UserPostService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;


@RestController
public class UserPostController {
    
    @Autowired
    UserPostService userPostService;

    // 보내준!다 뭐?를 내!가 쓴 글
    @GetMapping(value="myPosts")
    public String myPosts(String id) {
        String result = userPostService.myPosts(id);
        System.out.println("myPosts: " + id + " (" + result + ")");
        return result;
    }
    
    // 보내준!다 뭐?를 내!가 쓴 댓!글
    @GetMapping(value="myComments")
    public String myComments(String id) {
        String result = userPostService.myComments(id);
        System.out.println("myComments: " + id + " (" + result + ")");
        return result;
    }

    @GetMapping("popularPosts")
    public String popularPosts() {
        String result = userPostService.popularPosts();
        System.out.println("popularPosts: " + "(" + result + ")");
        return result;
    }
}
