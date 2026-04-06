package com.codespace.docexpiry.entity;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "documents" )
public class Document {
    @Id
    @GeneratedValue(strategy =GenerationType.IDENTITY )
    private Long id;

    @Column(name="name" , nullable= false)
    private String name;

    @ManyToOne
    @JoinColumn(name= "category_id")
    private Category category;

    @Column(name="created_at" , nullable= false)
    private LocalDate createdAt;

    @Column(name="expiry_date" , nullable= false)
    private LocalDate expiryDate;

    @ManyToOne
    @JoinColumn(name="user_id")
    private User user;

}
