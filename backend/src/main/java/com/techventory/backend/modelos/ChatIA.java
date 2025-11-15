package com.techventory.backend.modelos;

import jakarta.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "chat")
public class ChatIA {

    @Id
    @GeneratedValue
    @Column(name = "id_chat")
    private Long idChat;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "id_usuario", nullable = false)
    private Usuario usuario;

    @Column(name = "data_inicio", nullable = false)
    private LocalDateTime dataInicio;

    @Column(nullable = false)
    private String status; // "ativo" ou "inativo"

    @OneToMany(mappedBy = "chat", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Mensagens> mensagens = new ArrayList<>();

    // 🔧 Construtores
    public ChatIA() {}

    public ChatIA(Usuario usuario, String status) {
        this.usuario = usuario;
        this.status = status;
        this.dataInicio = LocalDateTime.now();
    }

    // ⚙️ Getters e Setters
    public Long getIdChat() { return idChat; }

    public Usuario getUsuario() { return usuario; }
    public void setUsuario(Usuario usuario) { this.usuario = usuario; }

    public LocalDateTime getDataInicio() { return dataInicio; }
    public void setDataInicio(LocalDateTime dataInicio) { this.dataInicio = dataInicio; }

    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }

    public List<Mensagens> getMensagens() { return mensagens; }
    public void setMensagens(List<Mensagens> mensagens) { this.mensagens = mensagens; }
}
