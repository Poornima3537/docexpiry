package com.codespace.docexpiry.services.Impl;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.codespace.docexpiry.dtos.DocumentRequestDto;
import com.codespace.docexpiry.dtos.DocumentResponseDto;
import com.codespace.docexpiry.entity.Category;
import com.codespace.docexpiry.entity.Document;
import com.codespace.docexpiry.entity.User;
import com.codespace.docexpiry.mapper.DocumentMapper;
import com.codespace.docexpiry.repository.CategoryRepository;
import com.codespace.docexpiry.repository.DocumentRepository;
import com.codespace.docexpiry.repository.UserRepository;
import com.codespace.docexpiry.services.DocumentService;

@Service
public class DocumentServiceImpl implements DocumentService {

    @Autowired
    private DocumentRepository documentRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private CategoryRepository categoryRepository;

    @Override
    public DocumentResponseDto addDocument(Long userId, DocumentRequestDto dto) {

        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));

        Category category = categoryRepository.findById(dto.getCategoryId())
                .orElseThrow(() -> new RuntimeException("Category not found"));

        Document doc = new Document();
        doc.setName(dto.getName());
        doc.setExpiryDate(dto.getExpiryDate());
        doc.setCreatedAt(LocalDate.now());
        doc.setUser(user);
        doc.setCategory(category);

        Document saved = documentRepository.save(doc);

        return DocumentMapper.toDto(saved);
    }

    @Override
    public List<DocumentResponseDto> getDocuments(Long userId) {

        return documentRepository.findByUserId(userId)
                .stream()
                .map(DocumentMapper::toDto)
                .toList();
    }

    @Override
    public DocumentResponseDto getDocumentById(Long id) {

        Document doc = documentRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Document not found"));

        return DocumentMapper.toDto(doc);
    }

    @Override
    public List<DocumentResponseDto> getDocumentsByCategory(Long categoryId) {

        return documentRepository.findByCategoryId(categoryId)
                .stream()
                .map(DocumentMapper::toDto)
                .toList();
    }

    @Override
    public DocumentResponseDto updateDocument(Long id, DocumentRequestDto dto) {

        Document doc = documentRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Document not found"));

        Category category = categoryRepository.findById(dto.getCategoryId())
                .orElseThrow(() -> new RuntimeException("Category not found"));

        doc.setName(dto.getName());
        doc.setExpiryDate(dto.getExpiryDate());
        doc.setCategory(category);

        Document updated = documentRepository.save(doc);

        return DocumentMapper.toDto(updated);
    }

    @Override
    public void deleteDocument(Long id) {
        documentRepository.deleteById(id);
    }
}