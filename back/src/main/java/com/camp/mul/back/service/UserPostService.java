package com.camp.mul.back.service;

import java.util.ArrayList;

import com.camp.mul.back.dao.UserPostDao;
import com.camp.mul.back.dto.CommentDto;
import com.camp.mul.back.dto.PostDto;
import com.fasterxml.jackson.databind.ObjectMapper;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class UserPostService {
    
    private final String KEY_RESULT  = "result";
    private final String VAL_SUCCESS = "success";
    private final String VAL_FAIL    = "fail";

    private final String KEY_DETAIL  = "detail";
    private final String KEY_DATA    = "data";

    @Autowired
    private UserPostDao userPostDao;

    private static ObjectMapper mapper = new ObjectMapper();

    // 보내준다 뭐?를 내가 쓴 글!을
    public String myPosts(String id) {

        JSONObject result = new JSONObject();

        if (id == null || id.trim() == "") {
            result.put(KEY_RESULT, VAL_FAIL);
            result.put(KEY_DETAIL, "no ID");
        } else {

            ArrayList<PostDto> list = userPostDao.getPostsById(id);
            try {
                result.put(KEY_RESULT, VAL_SUCCESS);
                result.put(KEY_DATA, mapper.writeValueAsString(list));
            } catch (Exception e) {}
        }

        return result.toString();
    }
    
    // 보내준다 뭐?를 내가 쓴 댓!글을
    public String myComments(String id) {

        JSONObject result = new JSONObject();

        if (id == null || id.trim() == "") {
            result.put(KEY_RESULT, VAL_FAIL);
            result.put(KEY_DETAIL, "no ID");
        } else {

            ArrayList<CommentDto> list = userPostDao.getCommentsById(id);
            try {
                result.put(KEY_RESULT, VAL_SUCCESS);
                result.put(KEY_DATA, mapper.writeValueAsString(list));
            } catch (Exception e) {}
        }

        return result.toString();
    }

    // 보내준다 뭐?를 최신 글!
    public String popularPosts() {

        JSONObject result = new JSONObject();

        try {

            ArrayList<PostDto> list = userPostDao.getRecentPostsAndCmtCntOrderByLike();
            String data = mapper.writeValueAsString(list);
            result.put(KEY_RESULT, VAL_SUCCESS);
            result.put(KEY_DATA, data);
        } catch (Exception e) {
            result.put(KEY_RESULT, VAL_FAIL);
        }

        return result.toString();
    }
}
