package com.meuprojeto.Share_Tools.repository;

import com.meuprojeto.Share_Tools.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    // Métodos personalizados podem ser adicionados aqui
}