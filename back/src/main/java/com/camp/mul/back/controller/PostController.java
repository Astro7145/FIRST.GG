package com.camp.mul.back.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import java.time.LocalTime;

import com.camp.mul.back.dto.PostDto;
import com.camp.mul.back.service.PostService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PostController {
    
    @Autowired
    PostService service;

    @RequestMapping(value = "/test", method = {RequestMethod.GET, RequestMethod.POST})
    public String test()
    {
        System.out.println("PostController test() " + LocalTime.now());

        return "test";
    }

    @RequestMapping(value = "/loadPosts", method = {RequestMethod.GET, RequestMethod.POST})
    public List<PostDto> loadPosts(String sort, String keyword, int page) {

        System.out.println("PostController loadPosts() " + LocalTime.now());

        int start = (page * 10) - 9;
        int end = page * 10;

        List<PostDto> dto = service.loadPosts(sort, keyword, start, end);
        
        return dto;
    }

    @RequestMapping(value = "/loadPostsAll", method = {RequestMethod.GET, RequestMethod.POST})
    public List<PostDto> loadPostsAll(String sort) {

        System.out.println("PostController loadPostsAll() " + LocalTime.now());

        List<PostDto> dto = service.loadPostsAll(sort);
        
        return dto;
    }

    @RequestMapping(value = "/post", method = {RequestMethod.GET, RequestMethod.POST})
    public PostDto post(int seq) {

        System.out.println("PostController post() " + LocalTime.now());

        PostDto dto = service.loadPost(seq);
        
        return dto;
    }

    @RequestMapping(value = "/likePost", method = {RequestMethod.GET, RequestMethod.POST})
    public int likePost(int seq)
    {
        System.out.println("PostController like() " + LocalTime.now());
        
        return service.likePost(seq);
    }

    @RequestMapping(value = "/writePost", method = {RequestMethod.GET, RequestMethod.POST})
    public int writePost(PostDto dto)
    {
        System.out.println("PostController writePost() " + LocalTime.now());

        return service.writePost(dto);
    }

    @RequestMapping(value = "/updatePost", method = {RequestMethod.GET, RequestMethod.POST})
    public int updatePost(PostDto dto)
    {
        System.out.println("PostController updatePost() " + LocalTime.now());

        return service.updatePost(dto);
    }

    @RequestMapping(value = "/deletePost", method = {RequestMethod.GET, RequestMethod.POST})
    public int deletePost(int seq, HttpServletRequest req)
    {
        System.out.println("PostController deletePost() " + LocalTime.now());

        return service.deletePost(seq);
    }

    @RequestMapping(value = "/isLikedFlag", method = {RequestMethod.GET, RequestMethod.POST})
    public boolean isLikedFlag(int seq, String writer)
    {
        System.out.println("PostController isLikedFlag() " + LocalTime.now());

        boolean flag = service.isLikedFlag(seq, writer);

        System.out.println(flag);

        return flag;
    }

    @RequestMapping(value = "/updateLike", method = {RequestMethod.GET, RequestMethod.POST})
    public int updateLike(int seq, String writer, boolean flag)
    {
        System.out.println("PostController updateLike() " + LocalTime.now());

        return service.updateLike(seq, writer, flag);
    }

    @RequestMapping(value = "/getLikes", method = {RequestMethod.GET, RequestMethod.POST})
    public int getLikes(int seq)
    {
        System.out.println("PostController getLikes() " + LocalTime.now());

        return service.getLikes(seq);
    }

    @RequestMapping(value = "/getPostCount", method = {RequestMethod.GET, RequestMethod.POST})
    public int getPostCount()
    {
        System.out.println("PostController getPostCount() " + LocalTime.now());

        return service.getPostCount();
    }

    @RequestMapping(value = "/myPost", method = {RequestMethod.GET, RequestMethod.POST})
    public List<PostDto> myPost(String id)
    {
        System.out.println("myPost getPostCount() " + LocalTime.now());

        return service.myPost(id);
    }
}


// mysql -u gyu -h 175.116.94.172 -p

/*
    신고글 리스트. 내가 쓴 게시물, 내가 쓴 댓글
*/