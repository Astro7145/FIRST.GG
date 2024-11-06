package com.camp.mul.back.dto;

import com.fasterxml.jackson.annotation.JsonIgnore;

public class UserDto {
    private int seq;
    private String id;
    @JsonIgnore
    private String pw;
    private String username;
    private String email;
    private String intro;
    private String profile;
    private int auth;

    public UserDto(int seq, String id, String pw, String username, String email, String intro, String profile, int auth) {
        this.seq = seq;
        this.id = id;
        this.pw = pw;
        this.username = username;
        this.email = email;
        this.intro = intro;
        this.profile = profile;
        this.auth = auth;
    }

    public UserDto() {}    
    
    public int getSeq() {
        return seq;
    }
    public void setSeq(int seq) {
        this.seq = seq;
    }
    public String getId() {
        return id;
    }
    public void setId(String id) {
        this.id = id;
    }
    public String getPw() {
        return pw;
    }
    public void setPw(String pw) {
        this.pw = pw;
    }
    public String getUsername() {
        return username;
    }
    public void setUsername(String username) {
        this.username = username;
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public String getIntro() {
        return intro;
    }
    public void setIntro(String intro) {
        this.intro = intro;
    }
    public String getProfile() {
        return profile;
    }

    public void setProfile(String profile) {
        this.profile = profile;
    }

    public int getAuth() {
        return auth;
    }

    public void setAuth(int auth) {
        this.auth = auth;
    }
}
