package com.codespace.docexpiry.services.Impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.codespace.docexpiry.dtos.CategoryDto;
import com.codespace.docexpiry.entity.Category;
import com.codespace.docexpiry.mapper.CategoryMapper;
import com.codespace.docexpiry.repository.CategoryRepository;
import com.codespace.docexpiry.services.CategoryService;

@Service
public class CategoryServiceImpl implements CategoryService {

    @Autowired
    private CategoryRepository categoryRepository;

    @Override
    public CategoryDto addCategory(CategoryDto dto) {

        Category category = CategoryMapper.toEntity(dto);
        Category saved = categoryRepository.save(category);

        return CategoryMapper.toDto(saved);
    }

    @Override
    public List<CategoryDto> getAllCategories() {

        return categoryRepository.findAll()
                .stream()
                .map(CategoryMapper::toDto)
                .toList();
    }

    @Override
    public CategoryDto getCategoryById(Long id) {

        Category category = categoryRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Category not found"));

        return CategoryMapper.toDto(category);
    }

    @Override
    public void deleteCategory(Long id) {
        categoryRepository.deleteById(id);
    }
}