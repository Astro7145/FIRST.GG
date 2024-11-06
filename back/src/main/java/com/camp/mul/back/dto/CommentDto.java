package com.camp.mul.back.dto;

// `SEQ` INT(10) NOT NULL AUTO_INCREMENT,
// `refPost` INT(10) NOT NULL DEFAULT '0',
// `WRITER` VARCHAR(20) NOT NULL DEFAULT '0' COLLATE 'utf8mb4_0900_ai_ci',
// `CONTENT` VARCHAR(500) NOT NULL DEFAULT '0' COLLATE 'utf8mb4_0900_ai_ci',
// `LIKES` INT(10) NOT NULL DEFAULT '0',
// `CREATED` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
// `DELETED` INT(10) NOT NULL DEFAULT '0',

public class CommentDto {
    private int seq;
    private int refPost;
    private String writer;
    private String content;
    private int likes;
    private String created;
    private int deleted;
    private int hidden;

    public CommentDto()
    {
        
    }
    
    public CommentDto(int seq, int refPost, String writer, String content, int likes, String created, int deleted, int hidden) {
        this.seq = seq;
        this.refPost = refPost;
        this.writer = writer;
        this.content = content;
        this.likes = likes;
        this.created = created;
        this.deleted = deleted;
        this.hidden = hidden;
    }

    public int getSeq() {
        return seq;
    }

    public void setSeq(int seq) {
        this.seq = seq;
    }

    public int getrefPost() {
        return refPost;
    }

    public void setrefPost(int refPost) {
        this.refPost = refPost;
    }

    public String getWriter() {
        return writer;
    }

    public void setWriter(String writer) {
        this.writer = writer;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public int getLikes() {
        return likes;
    }

    public void setLikes(int likes) {
        this.likes = likes;
    }

    public String getCreated() {
        return created;
    }

    public void setCreated(String created) {
        this.created = created;
    }

    public int getDeleted() {
        return deleted;
    }

    public void setDeleted(int deleted) {
        this.deleted = deleted;
    }

    public int getHidden() {
        return hidden;
    }

    public void setHidden(int hidden) {
        this.hidden = hidden;
    }

    @Override
    public String toString() {
        return "CommentDto [content=" + content + ", created=" + created + ", deleted=" + deleted + ", likes=" + likes
                + ", refPost=" + refPost + ", seq=" + seq + ", writer=" + writer + ", hidden="+ hidden + "]";
    }

    
}
