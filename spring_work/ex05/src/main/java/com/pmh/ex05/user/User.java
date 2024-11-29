package com.pmh.ex05.user;

import jakarta.persistence.*;
import lombok.*;
import org.springframework.data.annotation.CreatedDate;

import java.time.LocalDateTime;

/*
    @Configuraion -> 객체 담는통 정의
    @Bean -> 그거 객체야
    @Component -> 그것도 객체야
    @ComponentScan -> 패키지 내용읽어서 객체 주입해줘
    @Autowired -> new 예약어 안쓰고 객체 자동 할당..
    private final -> @RequiredArgsConstructor -> 객체 자동할당

    @Entity -> 이거 테이블이야
    @Table -> table 이름 바꾸께
    @Id -> 기본키야 Primary 키야
 */

@Entity
@Table(name = "free_board")
@Builder
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Getter
@Setter
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // AUTOINCREMENT 이거 설정해줘...
    private Long f_idx; //오토인크리먼트 프라이머리

    @Column(columnDefinition = "int default 1")
    private int f_avail; //삭제된 게시글 처리 논리적 삭제

    private String f_password; //프론트

    private String f_nickname; //프론트

    private String f_title; //프론트

    private String f_body; //프론트

    @CreatedDate
    private LocalDateTime f_timestamp; //로컬데이트 나우


//    @LastModifiedDate
//    private LocalDateTime modDate; //수정날짜

//    private String name;
//    private int age;
//
//    @Column(length = 100, unique = true)
//    private String email;
//
//    @Column(length = 100)
//    private String password;


    // JPA CLASS -> talbe CREATE가 됩니다.

}