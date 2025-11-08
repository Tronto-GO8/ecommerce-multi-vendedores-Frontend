package com.techventory.backend.repositorio;

import com.techventory.backend.modelos.ChatIA;
import com.techventory.backend.modelos.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.UUID;

public interface ChatRepository extends JpaRepository<ChatIA, UUID> {
    List<ChatIA> findByUsuario(Usuario usuario);
}
