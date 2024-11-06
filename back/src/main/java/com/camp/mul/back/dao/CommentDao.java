package com.camp.mul.back.dao;

import java.util.List;

import com.camp.mul.back.dto.CommentDto;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

@Mapper
@Repository
public interface CommentDao {
    public List<CommentDto> loadComments(@Param("sort") String sort, @Param("refPost") int refPost);

    public int likeComment(int seq);

    public int writeComment(CommentDto dto);

    public int updateComment(CommentDto dto);

    public int deleteComment(int seq);
}
