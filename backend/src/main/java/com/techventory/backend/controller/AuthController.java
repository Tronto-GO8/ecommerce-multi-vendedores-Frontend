package com.techventory.backend.controller;

import com.techventory.backend.modelos.Usuario;
import com.techventory.backend.servicos.JwtService;
import com.techventory.backend.servicos.UsuarioService;
import org.springframework.web.bind.annotation.*;
import com.techventory.backend.servicos.GoogleAuthService;

import java.util.Map;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "*")
public class AuthController {

    private final UsuarioService usuarioService;
    private final JwtService jwtService;
    private final GoogleAuthService googleAuthService;

    public AuthController(UsuarioService usuarioService, JwtService jwtService, GoogleAuthService googleAuthService) {
        this.usuarioService = usuarioService;
        this.jwtService = jwtService;
        this.googleAuthService = googleAuthService;
    }

    @PostMapping("/register")
    public Map<String, Object> register(@RequestBody Usuario usuario) {
        Usuario novoUsuario = usuarioService.registrar(usuario);
        String token = jwtService.gerarToken(novoUsuario.getEmail());

        return Map.of(
                "message", "Usuário cadastrado com sucesso!",
                "token", token,
                "user", Map.of(
                        "id", novoUsuario.getIdUsuario(),
                        "nome", novoUsuario.getNome(),
                        "email", novoUsuario.getEmail()
                )
        );
    }

    @PostMapping("/google")
    public Map<String, Object> loginGoogle(@RequestBody Map<String, String> body) {
        String tokenGoogle = body.get("token");
        String tokenJwt = googleAuthService.autenticarComGoogle(tokenGoogle);

        return Map.of(
                "message", "Login com Google realizado com sucesso!",
                "token", tokenJwt
        );
    }
}
