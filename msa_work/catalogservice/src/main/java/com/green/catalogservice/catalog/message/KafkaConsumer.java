package com.green.catalogservice.catalog.message;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.green.catalogservice.catalog.jpa.CatalogEntity;
import com.green.catalogservice.catalog.jpa.CatalogRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Slf4j

public class KafkaConsumer {

    private final CatalogRepository catalogRepository;


    @KafkaListener(topics = "${spring.kafka.topic-name}")
    public void consumeMessage(String message){

        log.info("Received message: {}", message);

        Map<Object, Object> map = new HashMap<>();

        ObjectMapper mapper = new ObjectMapper();

        try{
            map = mapper.readValue(message, Map.class);
        }catch (Exception e){
            e.printStackTrace();
        }

        Optional<CatalogEntity> catalogEntity = catalogRepository.findByProductId((String) map.get("productId"));
        if(catalogEntity.isPresent()){
            catalogEntity.setStock(catalogEntity.get().getStock() - (Integer) map.get("qty"));

        }else {



        }

        CatalogEntity catalogEntity = catalogRepository.findByProductId((String) map.get("productId"))
                .orElse(CatalogEntity.builder()
                        .productId((String) map.get("productId"))
                        .productName((String) map.get("productName"))
                        .stock(Integer) map.get("qty"))
                ;



        catalogRepository.save(catalogEntity);

        log.info("catalogRepository.save(catalogEntity):{} 재고수량을 변경 했습니다.", catalogEntity.getProductId());
    }
}
