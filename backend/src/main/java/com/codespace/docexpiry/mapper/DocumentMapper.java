package com.codespace.docexpiry.mapper;

import java.time.LocalDate;

import com.codespace.docexpiry.dtos.DocumentResponseDto;
import com.codespace.docexpiry.entity.Document;

public class DocumentMapper {

    public static DocumentResponseDto toDto(Document doc) {

        String status;
        LocalDate today = LocalDate.now();

        if (doc.getExpiryDate().isBefore(today)) {
            status = "EXPIRED";
        } else if (doc.getExpiryDate().isBefore(today.plusDays(7))) {
            status = "EXPIRING_SOON";
        } else {
            status = "SAFE";
        }

        return new DocumentResponseDto(
                doc.getId(),
                doc.getName(),
                doc.getCategory().getCategoryName(),
                doc.getExpiryDate(),
                status
        );
    }
}