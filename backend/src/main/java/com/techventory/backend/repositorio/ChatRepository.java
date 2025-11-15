package com.techventory.backend.repositorio;

import com.techventory.backend.modelos.ChatIA;
import com.techventory.backend.modelos.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ChatRepository extends JpaRepository<ChatIA, Long > {
    List<ChatIA> findByUsuario(Usuario usuario);
}
