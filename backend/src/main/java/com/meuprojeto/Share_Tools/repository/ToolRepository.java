package com.meuprojeto.Share_Tools.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.meuprojeto.Share_Tools.model.Tool;

@Repository
public interface ToolRepository extends JpaRepository<Tool, Long> {
    // Métodos personalizados podem ser adicionados aqui
}


