package com.meuprojeto.Share_Tools.model;
import jakarta.persistence.*;
import org.antlr.v4.runtime.misc.NotNull;
import java.util.List;
import lombok.Data;

@Data
@Entity
public class Item {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    private String name;

    private String description;

    private String category;

    private boolean available;  // Indica se o item está disponível para empréstimo

    @OneToMany(mappedBy = "item", cascade = CascadeType.ALL)
    private List<Loan> loans;

    // Getters and setters

}
