package com.camp.mul.back.dao;

import java.util.List;

import com.camp.mul.back.dto.PostDto;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

@Mapper
@Repository
public interface PostDao {
    public List<PostDto> loadPosts(@Param("sort") String sort, @Param("keyword") String keyword, @Param("start") int start, @Param("end") int end);

    public int likePost(int seq);

    public int writePost(PostDto dto);

    public int updatePost(PostDto dto);

    public int deletePost(int seq);

    public int isLiked(@Param("seq") int seq, @Param("id") String id);
    
    public int isLikedFlag(@Param("seq") int seq, @Param("id") String id);

    public int addLike(@Param("seq") int seq, @Param("id") String id);

    public int updateLike(@Param("seq") int seq, @Param("id") String id, @Param("flag") boolean flag);

    public PostDto loadPost(int seq);

    public int getLikes(int seq);

    public int getPostCount();

    public List<PostDto> myPost(String id);

    public List<PostDto> loadPostsAll(String sort);
}
