package com.camp.mul.back.dao;

import java.util.ArrayList;

import com.camp.mul.back.dto.CommentDto;
import com.camp.mul.back.dto.PostDto;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface UserPostDao {
    
    public ArrayList<PostDto> getPostsById(String id);

    public ArrayList<CommentDto> getCommentsById(String id);

    public ArrayList<PostDto> getRecentPostsAndCmtCntOrderByLike();
}
