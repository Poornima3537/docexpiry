package com.codespace.docexpiry.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.codespace.docexpiry.dtos.DocumentRequestDto;
import com.codespace.docexpiry.dtos.DocumentResponseDto;
import com.codespace.docexpiry.services.DocumentService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/documents")
public class DocumentController {

    @Autowired
    private DocumentService documentService;

    @PostMapping("/{userId}")
    public DocumentResponseDto addDocument(
            @PathVariable Long userId,
            @Valid @RequestBody DocumentRequestDto dto) {

        return documentService.addDocument(userId, dto);
    }

    @GetMapping("/user/{userId}")
    public List<DocumentResponseDto> getDocuments(@PathVariable Long userId) {
        return documentService.getDocuments(userId);
    }

    @GetMapping("/{id}")
    public DocumentResponseDto getDocumentById(@PathVariable Long id) {
        return documentService.getDocumentById(id);
    }

    @GetMapping("/category/{categoryId}")
    public List<DocumentResponseDto> getByCategory(@PathVariable Long categoryId) {
        return documentService.getDocumentsByCategory(categoryId);
    }

    @PutMapping("/{id}")
    public DocumentResponseDto updateDocument(
            @PathVariable Long id,
            @Valid @RequestBody DocumentRequestDto dto) {

        return documentService.updateDocument(id, dto);
    }

    // ✅ Delete Document
    @DeleteMapping("/{id}")
    public String deleteDocument(@PathVariable Long id) {
        documentService.deleteDocument(id);
        return "Document deleted successfully";
    }
}