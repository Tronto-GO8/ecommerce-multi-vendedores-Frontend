package com.techventory.backend.repositorio;

import com.techventory.backend.modelos.Mensagens;
import com.techventory.backend.modelos.ChatIA;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MensagemRepository extends JpaRepository<Mensagens, Long > {
    List<Mensagens> findByChat(ChatIA chat);
}
