package com.camp.mul.back.controller;

import java.util.List;
import java.time.LocalTime;

import com.camp.mul.back.dto.CommentDto;
import com.camp.mul.back.service.CommentService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CommentController {

    @Autowired
    CommentService service;

    @RequestMapping(value = "/loadComments", method = {RequestMethod.GET, RequestMethod.POST})
    public List<CommentDto> loadComments(String sort, int refPost)
    {
        System.out.println("CommentController.loadComments() " + LocalTime.now());

        List<CommentDto> dto = service.loadComments(sort, refPost);

        return dto;
    }

    @RequestMapping(value = "/likeComment", method = {RequestMethod.GET, RequestMethod.POST})
    public int likeComment(int seq)
    {
        System.out.println("CommentController.likeComment() " + LocalTime.now());
        
        return service.likeComment(seq);
    }

    @RequestMapping(value = "/writeComment", method = {RequestMethod.GET, RequestMethod.POST})
    public int writeComment(CommentDto dto)
    {
        System.out.println("CommentController.writeComment() " + LocalTime.now());

        return service.writeComment(dto);
    }

    @RequestMapping(value = "/updateComment", method = {RequestMethod.GET, RequestMethod.POST})
    public int updateComment(CommentDto dto)
    {
        System.out.println("CommentController.updateComment() " + LocalTime.now());

        return service.updateComment(dto);
    }

    @RequestMapping(value = "/deleteComment", method = {RequestMethod.GET, RequestMethod.POST})
    public int deleteComment(int seq)
    {
        System.out.println("CommentController.deleteComment() " + LocalTime.now());

        return service.deleteComment(seq);
    }
}
