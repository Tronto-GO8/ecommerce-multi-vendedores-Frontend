package com.techventory.backend.modelos;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "Mensagens")
public class Mensagens {

    @Id
    @GeneratedValue
    @Column(name = "id_mensagem")
    private Long  idMensagem;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "id_chat", nullable = false)
    private ChatIA chat;

    @Column(nullable = false)
    private String conteudo;

    @Column(name = "data_hora", nullable = false)
    private LocalDateTime dataHora;

    @Column(nullable = false)
    private String remetente; // "cliente" ou "ia"

    // 🔧 Construtores
    public Mensagens() {}

    public Mensagens(ChatIA chat, String conteudo, String remetente) {
        this.chat = chat;
        this.conteudo = conteudo;
        this.remetente = remetente;
        this.dataHora = LocalDateTime.now();
    }

    // ⚙️ Getters e Setters
    public Long  getIdMensagem() { return idMensagem; }

    public ChatIA getChat() { return chat; }
    public void setChat(ChatIA chat) { this.chat = chat; }

    public String getConteudo() { return conteudo; }
    public void setConteudo(String conteudo) { this.conteudo = conteudo; }

    public LocalDateTime getDataHora() { return dataHora; }
    public void setDataHora(LocalDateTime dataHora) { this.dataHora = dataHora; }

    public String getRemetente() { return remetente; }
    public void setRemetente(String remetente) { this.remetente = remetente; }
}
