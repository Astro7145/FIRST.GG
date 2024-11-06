package com.camp.mul.back.controller;

import com.camp.mul.back.dto.UserDto;
import com.camp.mul.back.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
public class UserController {
    
    @Autowired
    UserService userService;

    // 체크 토큰
    @PostMapping ("checkToken")
    public String checkToken(String token) {
        String result = userService.checkToken(token);
        System.out.println("checkToken: " + token + " (" + result + ")");
        return result;
    }

    // 로그인
    @PostMapping ("login")
    public String login(String id, String pw) {
        
        String result = userService.login(id, pw);
        System.out.println("login: " + id + " (" + result + ")");
        return result;
    }

    // 회원가입
    @PostMapping("register")
    public String register(UserDto user) {

        String result = userService.register(user);
        System.out.println("register: " + user.toString() + " (" + result + ")");
        return result;
    }

    // 아이디 중복 확인
    @PostMapping("checkDup")
    public String checkDup(String id) {

        String result = userService.checkDup(id);
        System.out.println("checkDup: " + id + " (" + result + ")");
        return result;
    }

    // 회원정보 수정            
    @PostMapping("modPw")
    public String modPw(String token, String pw) {
        String result = userService.modUserInfo(token, UserService.KEY_PW, pw);
        System.out.println("modPw: " + token + " (" + result + ")");
        return result;
    }
    @PostMapping("modUsername")
    public String modNickname(String token, String username) {
        String result = userService.modUserInfo(token, UserService.KEY_USERNAME, username);
        System.out.println("modUsername: " + token + " (" + result + ")");
        return result;
    }
    @PostMapping("modEmail")
    public String modEmail(String token, String email) {
        String result = userService.modUserInfo(token, UserService.KEY_EMAIL, email);
        System.out.println("modEmail: " + token + " (" + result + ")");
        return result;
    }
    @PostMapping("modIntro")
    public String modIntro(String token, String intro) {
        String result = userService.modUserInfo(token, UserService.KEY_INTRO, intro);
        System.out.println("modIntro: " + token + " (" + result + ")");
        return result;
    }
    @PostMapping("modInfo")
    public String modInfo(String token, String pw, String username, String email, String intro) {
        String result = userService.modInfo(token, pw, username, email, intro);
        System.out.println("modInfo: " + token + " (" + result + ")");
        return result;
    }

    @PostMapping("modProfile")
    public String modProfile(String token, MultipartFile file) {
        String result = userService.modProfile(token, file);
        System.out.println("modProfile: " + token + " (" + result + ")");
        return result;
    }
    

    // 회원정보 요청
    @PostMapping("userInfo")
    public String userInfo(String token) {
        String result = userService.userInfo(token);
        System.out.println("userInfo: " + token + " (" + result + ")");
        return result;
    }

    // 회원 탈퇴
    @PostMapping("withdraw")
    public String withdraw(String token) {
        String result = userService.withdraw(token);
        System.out.println("withdraw: " + token + " (" + result + ")");
        return result;
    }

    // 관리자 관련
    @PostMapping("allUserInfo")
    public String allUserInfo(String token) {
        String result = userService.allUserInfo(token);
        System.out.println("allUserInfo: " + token + " (" + result + ")");
        return result;
    }

    @PostMapping("nomalUserList")
    public String nomalUserList(String token) {
        String result = userService.nomalUserList(token);
        System.out.println("nomalUserList: " + token + " (" + result + ")");
        return result;
    }
    @PostMapping("blockedUserList")
    public String blockedUserList(String token) {
        String result = userService.blockedUserList(token);
        System.out.println("blockedUserList: " + token + " (" + result + ")");
        return result;
    }

    @PostMapping("modAuth")
    public String modAuth(String token, Integer seq, Integer auth) {
        String result = userService.modAuth(token, seq, auth);
        System.out.println("modAuth: " + token + " (" + result + ")");
        return result;
    }

    @PostMapping("deleteUser")
    public String deleteUser(String token, Integer seq) {
        String result = userService.withdraw(token, seq);
        System.out.println("deleteUser: " + token + " (" + result + ")");
        return result;
    }
    
}