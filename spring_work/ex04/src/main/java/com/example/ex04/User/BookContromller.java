package com.example.ex04.User;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController //url 맵핑하는 클래스
@RequestMapping("book") //주소줄에 user로 시작하는거
@RequiredArgsConstructor
@CrossOrigin
public class BookContromller {

    private BookRepository bookRepository;

    @GetMapping("select")
    public List<book> select(){
        return bookRepository.findAll();
    }

    @PostMapping("insert")
    public String insert(@RequestBody book u){

        System.out.println("실행");
        //save = insert실행..
//        user u = user.builder()
//                .name("오길동").age(520).email("aaa@gmail.com")
//                .password("1234")
//                .wdate(LocalDateTime.now())
//                .build();

        bookRepository.save(u);
        return "ok";
    }

}
