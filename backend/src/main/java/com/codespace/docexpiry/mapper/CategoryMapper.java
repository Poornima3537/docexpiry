package com.codespace.docexpiry.mapper;

import com.codespace.docexpiry.dtos.CategoryDto;
import com.codespace.docexpiry.entity.Category;

public class CategoryMapper {

    public static CategoryDto toDto(Category category) {
        return new CategoryDto(
                category.getId(),
                category.getCategoryName()
        );
    }

    public static Category toEntity(CategoryDto dto) {
        Category category = new Category();
        category.setCategoryName(dto.getCategoryName());
        return category;
    }
}