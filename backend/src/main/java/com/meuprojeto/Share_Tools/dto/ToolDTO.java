package com.meuprojeto.Share_Tools.dto;// src/main/java/com/meuprojeto/Share_Tools/dto/ToolDTO.java

import lombok.Data;

@Data
public class ToolDTO {
    private Long id;
    private String name;
    private String owner;
    private boolean available;
    private String returnDate;
    private String contact;
}
