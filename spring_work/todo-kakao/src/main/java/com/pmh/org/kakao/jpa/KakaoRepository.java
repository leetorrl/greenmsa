package com.pmh.org.kakao.jpa;

import org.springframework.data.jpa.repository.JpaRepository;

public interface KakaoRepository extends JpaRepository<KakaoEntity,Long> {

    KakaoEntity findByEmail(String email);
}
