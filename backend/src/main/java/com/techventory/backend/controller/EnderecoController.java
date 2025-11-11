package com.techventory.backend.controller;

import com.techventory.backend.modelos.Endereco;
import com.techventory.backend.repositorio.EnderecoRepository;
import com.techventory.backend.repositorio.UsuarioRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/Techventory/PainelDeControle/Enderecos")
public class EnderecoController {

    private final EnderecoRepository enderecoRepository;
    private final UsuarioRepository usuarioRepository;

    public EnderecoController(EnderecoRepository enderecoRepository, UsuarioRepository usuarioRepository) {
        this.enderecoRepository = enderecoRepository;
        this.usuarioRepository = usuarioRepository;
    }

    // Cadastrar ou atualizar endereço do usuário
    @PostMapping("/{idUsuario}")
    public ResponseEntity<?> cadastrarOuAtualizar(@PathVariable Long idUsuario, @RequestBody Endereco endereco) {
        return usuarioRepository.findById(idUsuario)
                .map(usuario -> {
                    endereco.setUsuario(usuario);
                    usuario.setEndereco(endereco);
                    enderecoRepository.save(endereco);
                    return ResponseEntity.ok("Endereço cadastrado/atualizado com sucesso!");
                })
                .orElse(ResponseEntity.badRequest().body("Usuário não encontrado!"));
    }

    // Buscar endereço de um usuário
    @GetMapping("/{idUsuario}")
    public ResponseEntity<?> buscarEndereco(@PathVariable Long idUsuario) {
        Optional<Endereco> endereco = enderecoRepository.findAll()
                .stream()
                .filter(e -> e.getUsuario().getIdUsuario().equals(idUsuario))
                .findFirst();

        return endereco.map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }
}
