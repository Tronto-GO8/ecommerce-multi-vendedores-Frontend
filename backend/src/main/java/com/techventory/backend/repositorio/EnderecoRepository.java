package com.techventory.backend.repositorio;

import com.techventory.backend.modelos.Endereco;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EnderecoRepository extends JpaRepository<Endereco, Long> {
}