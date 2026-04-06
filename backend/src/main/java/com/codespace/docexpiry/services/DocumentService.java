package com.codespace.docexpiry.services;

import java.util.List;

import com.codespace.docexpiry.dtos.DocumentRequestDto;
import com.codespace.docexpiry.dtos.DocumentResponseDto;

public interface DocumentService {

    DocumentResponseDto addDocument(Long userId, DocumentRequestDto dto);
    List<DocumentResponseDto> getDocuments(Long userId);
    DocumentResponseDto getDocumentById(Long id);
    List<DocumentResponseDto> getDocumentsByCategory(Long categoryId);
    DocumentResponseDto updateDocument(Long id, DocumentRequestDto dto);
    void deleteDocument(Long id);
}