package com.camp.mul.back.service;

import java.util.List;

import com.camp.mul.back.dao.CommentDao;
import com.camp.mul.back.dto.CommentDto;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class CommentService {
    
    @Autowired
    CommentDao dao;

    public List<CommentDto> loadComments(String sort, int refPost)
    {
        return dao.loadComments(sort, refPost);
    }

    public int likeComment(int seq) {
        return dao.likeComment(seq);
    }

    public int writeComment(CommentDto dto) {
        return dao.writeComment(dto);
    }

    public int updateComment(CommentDto dto) {
        return dao.updateComment(dto);
    }

    public int deleteComment(int seq) {
        return dao.deleteComment(seq);
    }
}