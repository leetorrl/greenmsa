package com.example.firstproject.dto;

import com.example.firstproject.entity.Article;
import lombok.*;

 //자동 생성자
@Data
@NoArgsConstructor
@AllArgsConstructor
public class ArticleForm {

    private Long id;
    private String title; // 제목을 받을 필드
    private String content; // 내용을 받을 필드


    public Article toEntity() {
        return new Article(  id, title, content);
    }
}





