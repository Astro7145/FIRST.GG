package com.camp.mul.back.service;

import java.util.*;

import com.camp.mul.back.dao.UserDao;
import com.camp.mul.back.dto.UserDto;
import com.fasterxml.jackson.databind.ObjectMapper;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.FileSystemResource;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

@Service
@Transactional
public class UserService {
    
    private final String KEY         = "ahoy";
    
    private final String KEY_ID      = "id";
    private final String KEY_TOKEN   = "token";
    private final String KEY_RESULT  = "result";
    private final String VAL_SUCCESS = "success";
    private final String VAL_FAIL    = "fail";

    private final String KEY_DETAIL  = "detail";
    private final String KEY_DATA    = "data";
    
    public static final String KEY_PW       = "pw";
    public static final String KEY_USERNAME = "username";
    public static final String KEY_EMAIL    = "email";
    public static final String KEY_INTRO    = "intro";
    public static final String KEY_INFO    = "info";


    public static ObjectMapper mapper = new ObjectMapper();
    @Autowired
    private UserDao userDao;

    public String checkToken(String token) {

        JSONObject result = new JSONObject();

        if (token == null) {
            result.put(KEY_RESULT, VAL_FAIL);
        } else {
            
            String id = verifyToken(token);

            if (id == null || id == "") {
                result.put(KEY_RESULT, VAL_FAIL);
                result.put(KEY_DETAIL, "wrong token");

            } else {
                UserDto user = userDao.getUserById(id);

                if (user == null) {

                    result.put(KEY_RESULT, VAL_FAIL);
                    result.put(KEY_DETAIL, "wrong token");

                } else {

                    result.put(KEY_RESULT, VAL_SUCCESS);
                    result.put(KEY_DATA, id);

                }
            }
        }

        return result.toString();
    }

    public String login(String id, String pw) {

        JSONObject result = new JSONObject();

        if (id == null || pw == null) { 
            result.put(KEY_RESULT, VAL_FAIL);
            result.put(KEY_DETAIL, "wrong value");

        } else {
            UserDto user = userDao.getUserById(id);
            if (user != null && user.getPw().equals(pw)) { 

                if (user.getAuth() == 4) {
                    result.put(KEY_RESULT, VAL_FAIL);
                    result.put(KEY_DETAIL, "blocked ID");
                } else {
                    result.put(KEY_RESULT, VAL_SUCCESS);
                    result.put(KEY_TOKEN, createToken(id));
                }
            } else {

                result.put(KEY_RESULT, VAL_FAIL);
            }
        }

        return result.toString();
    }

    public String register(UserDto user) {

        JSONObject result = new JSONObject();

        if (user == null) { 
            result.put(KEY_RESULT, VAL_FAIL);

        } else {
            result.put(KEY_RESULT, userDao.addUser(user) > 0 ? VAL_SUCCESS : VAL_FAIL );
        }

        return result.toString();
    }

    public String checkDup(String id) {

        JSONObject result = new JSONObject();

        if (id == null) {
            result.put(KEY_RESULT, VAL_FAIL);
        } else {
            
            UserDto user = userDao.getUserById(id);
    
            if (user == null) {
                result.put(KEY_RESULT, VAL_SUCCESS);
            } else {
                result.put(KEY_RESULT, VAL_FAIL);
            }
        }
        return result.toString();
    }

    public String modUserInfo(String token, String key, String value) {

        JSONObject result = new JSONObject();

        if (token == null || token == "") {

            result.put(KEY_RESULT, VAL_FAIL);
            result.put(KEY_DETAIL, "no token");
            
        } else if (value == null || value == "") {

            result.put(KEY_RESULT, VAL_FAIL);
            result.put(KEY_DETAIL, "wrong " + key);

        } else {

            String id = verifyToken(token);

            if (id == null) {

                result.put(KEY_RESULT, VAL_FAIL);
                result.put(KEY_DETAIL, "wrong token");

            } else {

                UserDto user = userDao.getUserById(id);

                if (user == null) {

                    result.put(KEY_RESULT, VAL_FAIL);
                    result.put(KEY_DETAIL, "wrong token");

                } else {

                    if (key == KEY_PW) {
                        user.setPw(value);
                    } else if (key == KEY_USERNAME) {
                        user.setUsername(value);
                    } else if (key == KEY_EMAIL) {
                        user.setEmail(value);
                    } else if (key == KEY_INTRO) {
                        user.setIntro(value);
                    }

                    userDao.changeUserInfo(user);

                    result.put(KEY_RESULT, VAL_SUCCESS);
                }
            }
        }
        return result.toString();
    }

    public String modInfo(String token, String pw, String username, String email, String intro) {

        JSONObject result = new JSONObject();

        if (token == null || token == "") {

            result.put(KEY_RESULT, VAL_FAIL);
            result.put(KEY_DETAIL, "no token");
            
        } else if (pw == null || pw == "" || username == null || username == "" || email == null || email == "" || intro == null || intro == "") {

            result.put(KEY_RESULT, VAL_FAIL);
            result.put(KEY_DETAIL, "wrong value");

        } else {

            String id = verifyToken(token);

            if (id == null) {

                result.put(KEY_RESULT, VAL_FAIL);
                result.put(KEY_DETAIL, "wrong token");

            } else {

                UserDto user = userDao.getUserById(id);

                if (user == null) {

                    result.put(KEY_RESULT, VAL_FAIL);
                    result.put(KEY_DETAIL, "wrong token");

                } else {

                    user.setPw(pw);
                    user.setUsername(username);
                    user.setEmail(email);
                    user.setIntro(intro);
                    userDao.changeUserInfo(user);

                    result.put(KEY_RESULT, VAL_SUCCESS);
                }
            }
        }
        return result.toString();
    }

    public String modProfile(String token, MultipartFile file) {

        return "123";
    }

    public String profile(String token) {

        JSONObject result = new JSONObject();

        if (token == null || token == "") {

            result.put(KEY_RESULT, VAL_FAIL);
            result.put(KEY_DETAIL, "no token");
            
        } else {

            String id = verifyToken(token);

            if (id == null) {

                result.put(KEY_RESULT, VAL_FAIL);
                result.put(KEY_DETAIL, "wrong token");

            } else {

                // 파일 꺼내기
                try {

                    String path = "/resources/images/";
                    String fileName = id + ".jpg";
                    FileSystemResource resource = new FileSystemResource(path + fileName);
                    
                    result.put(KEY_RESULT, VAL_SUCCESS);
                    result.put(KEY_DATA, resource.toString());
                } catch (Exception e) {

                    result.put(KEY_RESULT, VAL_FAIL);
                }
            }
        }
        return result.toString();
    }

    public String userInfo(String token) {

        JSONObject result = new JSONObject();

        if (token == null || token == "") {

            result.put(KEY_RESULT, VAL_FAIL);
            result.put(KEY_DETAIL, "no token");
            
        } else {

            String id = verifyToken(token);

            if (id == null) {

                result.put(KEY_RESULT, VAL_FAIL);
                result.put(KEY_DETAIL, "wrong token");

            } else {
                
                UserDto user = userDao.getUserById(id);

                if (user == null) {

                    result.put(KEY_RESULT, VAL_FAIL);
                    result.put(KEY_DETAIL, "wrong token");

                } else {

                    try {
                        result.put(KEY_RESULT, VAL_SUCCESS);
                        result.put(KEY_DATA, mapper.writeValueAsString(user));
                    } catch (Exception e) { }
                }
            }
        }

        return result.toString();
    }

    

    public String withdraw(String token) {

        JSONObject result = new JSONObject();

        if (token == null || token == "") {

            result.put(KEY_RESULT, VAL_FAIL);
            result.put(KEY_DETAIL, "no token");
            
        } else {

            String id = verifyToken(token);

            if (id == null) {

                result.put(KEY_RESULT, VAL_FAIL);
                result.put(KEY_DETAIL, "wrong token");

            } else {
                
                UserDto user = userDao.getUserById(id);

                if (user == null) {

                    result.put(KEY_RESULT, VAL_FAIL);
                    result.put(KEY_DETAIL, "wrong token");

                } else {

                    result.put(KEY_RESULT, (userDao.deleteUserBySeq(user.getSeq()) > 0) ? VAL_SUCCESS : VAL_FAIL);
                }
            }
        }

        return result.toString();
    }

    public String withdraw(String token, Integer seq) {

        JSONObject result = new JSONObject();

        if (token == null || token == "") {

            result.put(KEY_RESULT, VAL_FAIL);
            result.put(KEY_DETAIL, "no token");
            
        } else {

            String id = verifyToken(token);

            if (id == null) {

                result.put(KEY_RESULT, VAL_FAIL);
                result.put(KEY_DETAIL, "wrong token");

            } else {
                
                UserDto user = userDao.getUserById(id);
                UserDto user2 = userDao.getUserBySeq(seq);

                if (user == null) {

                    result.put(KEY_RESULT, VAL_FAIL);
                    result.put(KEY_DETAIL, "wrong token");

                } else if (user.getAuth() != 1) {

                    result.put(KEY_RESULT, VAL_FAIL);
                    result.put(KEY_DETAIL, "not admin");

                } else if (user2 == null || user2.getAuth() == 1) {
                    
                    result.put(KEY_RESULT, VAL_FAIL);
                    result.put(KEY_DETAIL, "wrong seq");

                } else {

                    result.put(KEY_RESULT, (userDao.deleteUserBySeq(seq) > 0) ? VAL_SUCCESS : VAL_FAIL);
                }
            }
        }

        return result.toString();
    }

    // 관리자 전용
    public String allUserInfo(String token) {

        JSONObject result = new JSONObject();

        if (token == null || token == "") {

            result.put(KEY_RESULT, VAL_FAIL);
            result.put(KEY_DETAIL, "no token");
            
        } else {

            String id = verifyToken(token);

            if (id == null) {

                result.put(KEY_RESULT, VAL_FAIL);
                result.put(KEY_DETAIL, "wrong token");

            } else {
                
                UserDto user = userDao.getUserById(id);

                if (user == null) {

                    result.put(KEY_RESULT, VAL_FAIL);
                    result.put(KEY_DETAIL, "wrong token");

                } else if (user.getAuth() != 1) {

                    result.put(KEY_RESULT, VAL_FAIL);
                    result.put(KEY_DETAIL, "not admin");
                    
                } else {

                    ArrayList<UserDto> list = userDao.getAllUser();
                    try {
                        
                        result.put(KEY_RESULT, VAL_SUCCESS);
                        result.put(KEY_DATA, mapper.writeValueAsString(list));
                    } catch (Exception e) {}
                }
            }
        }

        return result.toString();
    }

    public String modAuth(String token, Integer seq, Integer auth) {

        JSONObject result = new JSONObject();

        if (token == null || token == "") {

            result.put(KEY_RESULT, VAL_FAIL);
            result.put(KEY_DETAIL, "no token");
            
        } else if (seq == null || auth == null) {

            result.put(KEY_RESULT, VAL_FAIL);
            result.put(KEY_DETAIL, "wrong value");

        } else {

            String adminId = verifyToken(token);

            if (adminId == null) {

                result.put(KEY_RESULT, VAL_FAIL);
                result.put(KEY_DETAIL, "wrong token");

            } else {

                UserDto admin = userDao.getUserById(adminId);

                if (admin == null) {

                    result.put(KEY_RESULT, VAL_FAIL);
                    result.put(KEY_DETAIL, "wrong token");

                } else {

                    if (admin.getAuth() == 1) {

                        UserDto user = userDao.getUserBySeq(seq);
                        user.setAuth(auth);
                        userDao.changeUserInfo(user);

                        result.put(KEY_RESULT, VAL_SUCCESS);

                    } else {

                        result.put(KEY_RESULT, VAL_FAIL);
                    }

                }
            }
        }
        return result.toString();
    }

    public String nomalUserList(String token) {
        JSONObject result = new JSONObject();

        if (token == null || token == "") {

            result.put(KEY_RESULT, VAL_FAIL);
            result.put(KEY_DETAIL, "no token");
            
        } else {

            String id = verifyToken(token);

            if (id == null) {

                result.put(KEY_RESULT, VAL_FAIL);
                result.put(KEY_DETAIL, "wrong token");

            } else {
                
                UserDto user = userDao.getUserById(id);

                if (user == null) {

                    result.put(KEY_RESULT, VAL_FAIL);
                    result.put(KEY_DETAIL, "wrong token");

                } else if (user.getAuth() != 1) {

                    result.put(KEY_RESULT, VAL_FAIL);
                    result.put(KEY_DETAIL, "not admin");
                    
                } else {

                    ArrayList<UserDto> list = userDao.getUserListByAuth(3);
                    try {
                        
                        result.put(KEY_RESULT, VAL_SUCCESS);
                        result.put(KEY_DATA, mapper.writeValueAsString(list));
                    } catch (Exception e) {}
                }
            }
        }

        return result.toString();
    }

    public String blockedUserList(String token) {
        JSONObject result = new JSONObject();

        if (token == null || token == "") {

            result.put(KEY_RESULT, VAL_FAIL);
            result.put(KEY_DETAIL, "no token");
            
        } else {

            String id = verifyToken(token);

            if (id == null) {

                result.put(KEY_RESULT, VAL_FAIL);
                result.put(KEY_DETAIL, "wrong token");

            } else {
                
                UserDto user = userDao.getUserById(id);

                if (user == null) {

                    result.put(KEY_RESULT, VAL_FAIL);
                    result.put(KEY_DETAIL, "wrong token");

                } else if (user.getAuth() != 1) {

                    result.put(KEY_RESULT, VAL_FAIL);
                    result.put(KEY_DETAIL, "not admin");
                    
                } else {

                    ArrayList<UserDto> list = userDao.getUserListByAuth(4);
                    try {
                        
                        result.put(KEY_RESULT, VAL_SUCCESS);
                        result.put(KEY_DATA, mapper.writeValueAsString(list));

                    } catch (Exception e) {}
                }
            }
        }

        return result.toString();
    }

    //토큰 관련
    private String createToken(String id) {

        Map<String, Object> headers = new HashMap<>();
        headers.put("typ", "JWT");
        headers.put("alg", "HS256");

        Map<String, Object> payloads = new HashMap<>();
        payloads.put(KEY_ID, id);

        Long expiredTime = 1000 * 60L * 60L;    // 1시간

        Date ext = new Date();
        ext.setTime(ext.getTime() + expiredTime);

        String token = Jwts.builder()
                         .setHeader(headers)
                         .setClaims(payloads)
                         .setSubject("auth")
                         .setExpiration(ext)
                         .signWith(SignatureAlgorithm.HS256, KEY.getBytes())
                         .compact();
        return token;
    } 

    private String verifyToken(String token) {

        String result = "";

        try {
            
            Claims claims = Jwts.parser()
                .setSigningKey(KEY.getBytes("UTF-8"))
                .parseClaimsJws(token)
                .getBody();

            result = claims.get(KEY_ID, String.class);

        } catch (Exception e) { }

        return result;
    }
}
