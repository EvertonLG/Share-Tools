package com.meuprojeto.Share_Tools.repository;

import com.meuprojeto.Share_Tools.model.Loan;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LoanRepository extends JpaRepository<Loan, Long> {
    // Podemos adicionar métodos personalizados para consultas específicas
}
