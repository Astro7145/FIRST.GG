package com.camp.mul.back.service;

import java.util.List;

import com.camp.mul.back.dao.PostDao;
import com.camp.mul.back.dto.PostDto;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class PostService {
    
    @Autowired
    PostDao dao;

    public List<PostDto> loadPosts(String sort, String keyword, int start, int end)
    {
        // new = 최신 순
        // old = 오래된 순
        // like = 좋아요 순

        return dao.loadPosts(sort, keyword, start, end);
    }

    public int likePost(int seq)
    {
        return dao.likePost(seq);
    }

    public int writePost(PostDto dto)
    {
        return dao.writePost(dto);
    }

    public int updatePost(PostDto dto)
    {
        return dao.updatePost(dto);
    }

    public int deletePost(int seq)
    {
        return dao.deletePost(seq);
    }

    public boolean isLikedFlag(int seq, String name)
    {
        try
        {
            if(dao.isLikedFlag(seq, name) == 1)
            {
                return true;
            }   
        }
        catch(Exception e)
        {
            return false;
        }

        return false;
    }

    public int addLike(int seq, String name)
    {
        return dao.addLike(seq, name);
    }

    public int updateLike(int seq, String name, boolean flag) {
        if(dao.isLiked(seq, name) > 0)
        {
            dao.updateLike(seq, name, flag);
        }
        else
        {
            System.out.println("addLike("+seq+", " + name + ")");
            dao.addLike(seq, name);
        }
        return 1;
    }

    public PostDto loadPost(int seq) {
        return dao.loadPost(seq);
    }

    public int getLikes(int seq) {
        return dao.getLikes(seq);
    }

    public int getPostCount() {
        return dao.getPostCount();
    }

    public List<PostDto> myPost(String id) {
        return dao.myPost(id);
    }

    public List<PostDto> loadPostsAll(String sort) {
        return dao.loadPostsAll(sort);
    }
}
