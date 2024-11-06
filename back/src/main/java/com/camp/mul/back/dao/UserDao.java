package com.camp.mul.back.dao;

import java.util.ArrayList;

import com.camp.mul.back.dto.UserDto;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface UserDao {
    
    public UserDto getUserById(String id);

    public UserDto getUserBySeq(Integer seq);

    public int addUser(UserDto dto);

    public int changeUserInfo(UserDto dto);

    public int deleteUserBySeq(int seq);

    public ArrayList<UserDto> getAllUser();

    public ArrayList<UserDto> getUserListByAuth(int auth);
}
