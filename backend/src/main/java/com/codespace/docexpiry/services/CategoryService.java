package com.codespace.docexpiry.services;

import java.util.List;

import com.codespace.docexpiry.dtos.CategoryDto;

public interface CategoryService {

    CategoryDto addCategory(CategoryDto dto);
    List<CategoryDto> getAllCategories();
    CategoryDto getCategoryById(Long id);
    void deleteCategory(Long id);
}