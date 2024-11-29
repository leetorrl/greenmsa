package com.shop.entity;

import com.shop.entity.constant.ItemSellStatus;
import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;


@Data
@Entity
@Table(name = "item")
public class Item {

    @Id
    @Column(name = "item_id")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id; //상품코드

    @Column(nullable = false, length = 50)
    private String itemNm; //상품명

    @Column(name = "pice", nullable = false)
    private int price; //가격

    @Column(nullable = false)
    private int stockNumber; //재고수량

    @Lob
    @Column(nullable = false)
    private String itemDetail; //상품상세설명

    @Enumerated(EnumType.STRING)
    private ItemSellStatus itemSellStatus; //상품판매상태

    private LocalDateTime regTime; //등록시간

    private LocalDateTime updateTime; //수정시간

}
