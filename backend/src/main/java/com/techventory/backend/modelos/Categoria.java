package com.techventory.backend.modelos;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
public class Categoria {

    @Id
    @GeneratedValue
    private Long idCategoria;

    private String nome;

    @ManyToMany(mappedBy = "categorias")
    @JsonBackReference // 👈 evita loop reverso
    private Set<Produto> produtos = new HashSet<>();

    // Getters e Setters
    public Long getIdCategoria() { return idCategoria; }
    public void setIdCategoria(Long  idCategoria) { this.idCategoria = idCategoria; }

    public String getNome() { return nome; }
    public void setNome(String nome) { this.nome = nome; }

    public Set<Produto> getProdutos() { return produtos; }
    public void setProdutos(Set<Produto> produtos) { this.produtos = produtos; }
}
