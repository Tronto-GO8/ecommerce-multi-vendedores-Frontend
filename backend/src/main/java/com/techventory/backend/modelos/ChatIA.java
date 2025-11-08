package com.techventory.backend.modelos;

import jakarta.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Entity
@Table(name = "chat")
public class ChatIA {

    @Id
    @GeneratedValue
    @Column(name = "id_chat", columnDefinition = "UUID")
    private UUID idChat;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "id_usuario", nullable = false)
    private Usuario usuario;

    @Column(name = "data_inicio", nullable = false)
    private LocalDateTime dataInicio;

    @Column(nullable = false)
    private String status; // "ativo" ou "inativo"

    @OneToMany(mappedBy = "chat", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Mensagem> mensagens = new ArrayList<>();

    // 🔧 Construtores
    public Chat() {}

    public Chat(Usuario usuario, String status) {
        this.usuario = usuario;
        this.status = status;
        this.dataInicio = LocalDateTime.now();
    }

    // ⚙️ Getters e Setters
    public UUID getIdChat() { return idChat; }

    public Usuario getUsuario() { return usuario; }
    public void setUsuario(Usuario usuario) { this.usuario = usuario; }

    public LocalDateTime getDataInicio() { return dataInicio; }
    public void setDataInicio(LocalDateTime dataInicio) { this.dataInicio = dataInicio; }

    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }

    public List<Mensagem> getMensagens() { return mensagens; }
    public void setMensagens(List<Mensagem> mensagens) { this.mensagens = mensagens; }
}
