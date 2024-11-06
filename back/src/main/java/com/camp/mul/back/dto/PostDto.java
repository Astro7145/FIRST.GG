package com.camp.mul.back.dto;

// `SEQ` INT(10) NOT NULL AUTO_INCREMENT, 1
// 	`TITLE` VARCHAR(100) NOT NULL DEFAULT '0' COLLATE 'utf8mb4_0900_ai_ci', 2
// 	`WRITER` VARCHAR(20) NOT NULL DEFAULT '0' COLLATE 'utf8mb4_0900_ai_ci', 3
// 	`CONTENT` VARCHAR(2000) NOT NULL DEFAULT '0' COLLATE 'utf8mb4_0900_ai_ci', 4
// 	`CREATED` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP, 5
// 	`READCOUNT` INT(10) NOT NULL DEFAULT '0', 6
// 	`LIKES` INT(10) NOT NULL DEFAULT '0', 7
// 	PRIMARY KEY (`SEQ`) USING BTREE

public class PostDto {
    private int seq;
    private String title;
    private String writer;
    private String content;
    private String created;
    private int readcount;
    private int likes;
    private int comments;
    private int deleted;

    public PostDto()
    {

    }

    public PostDto(int seq, String title, String writer, String content, String created, int readcount, int likes, int comments, int deleted) {
        this.seq = seq;
        this.title = title;
        this.writer = writer;
        this.content = content;
        this.created = created;
        this.readcount = readcount;
        this.likes = likes;
        this.setComments(comments);
        this.deleted = deleted;
    }

    public int getSeq() {
        return seq;
    }

    public void setSeq(int seq) {
        this.seq = seq;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
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

    public String getCreated() {
        return created;
    }

    public void setCreated(String created) {
        this.created = created;
    }

    public int getReadcount() {
        return readcount;
    }

    public void setReadcount(int readcount) {
        this.readcount = readcount;
    }

    public int getLikes() {
        return likes;
    }

    public void setLikes(int likes) {
        this.likes = likes;
    }


    public int getDeleted() {
        return deleted;
    }

    public void setDeleted(int deleted) {
        this.deleted = deleted;
    }

    public int getComments() {
        return comments;
    }

    public void setComments(int comments) {
        this.comments = comments;
    }

    @Override
    public String toString() {
        return "PostDto [content=" + content + ", created=" + created + ", likes=" + likes + ", readcount=" + readcount
                + ", seq=" + seq + ", title=" + title + ", writer=" + writer + ", deleted=" + deleted + "]";
    }

    
}
