package com.meuprojeto.Share_Tools.model;

import com.meuprojeto.Share_Tools.model.Item;
import jakarta.persistence.*;

import java.time.LocalDate;

@Entity
public class Loan {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "item_id")
    private Item item;

    private String clientName;

    private LocalDate loanDate;

    private LocalDate returnDate;

    private boolean returned; // Indica se o item foi devolvido

    // Getters and setters
}
