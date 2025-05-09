package com.meuprojeto.Share_Tools.repository;

import com.meuprojeto.Share_Tools.model.Item;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ItemRepository extends JpaRepository<Item, Long> {
    // Podemos adicionar métodos personalizados para consultas específicas
}
