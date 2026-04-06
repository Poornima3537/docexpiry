package com.codespace.docexpiry.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.codespace.docexpiry.entity.Document;

public interface DocumentRepository extends JpaRepository<Document, Long>{
       List<Document> findByUserId(Long userId);
       List<Document> findByCategoryId(Long categoryId); 
}
