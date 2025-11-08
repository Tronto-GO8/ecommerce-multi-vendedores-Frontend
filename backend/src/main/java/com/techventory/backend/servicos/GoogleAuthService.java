package com.techventory.backend.servicos;

import com.techventory.backend.modelos.Usuario;
import com.techventory.backend.repositorio.UsuarioRepository;
import com.google.api.client.googleapis.auth.oauth2.GoogleIdToken;
import com.google.api.client.googleapis.auth.oauth2.GoogleIdTokenVerifier;
import com.google.api.client.googleapis.javanet.GoogleNetHttpTransport;
import com.google.api.client.json.jackson2.JacksonFactory;
import org.springframework.stereotype.Service;
import javautil.Collections;

@Service
public class GoogleAuthService {

    private final UsuarioRepository usuarioRepository;
    private final JwtService jwtService;

    private static final String CLIENT_ID = "SEU_CLIENT_ID_DO_GOOGLE_AQUI.apps.googleusercontent.com";

    public GoogleAuthService(UsuarioRepository usuarioRepository, JwtService jwtService) {
        this.usuarioRepository = usuarioRepository;
        this.jwtService = jwtService;
    }

    public String autenticarComGoogle(String idTokenString) {
        try {
            var verifier = new GoogleIdTokenVerifier.Builder(
                    GoogleNetHttpTransport.newTrustedTransport(),
                    JacksonFactory.getDefaultInstance()
            )
                    .setAudience(Collections.singletonList(CLIENT_ID))
                    .build();

            GoogleIdToken idToken = verifier.verify(idTokenString);
            if (idToken == null) {
                throw new IllegalArgumentException("Token do Google inválido");
            }

            GoogleIdToken.Payload payload = idToken.getPayload();
            String email = payload.getEmail();
            String nome = (String) payload.get("name");
            String imagem = (String) payload.get("picture");

            // Se o usuário ainda não existe, cria um novo
            Usuario usuario = usuarioRepository.findByEmail(email)
                    .orElseGet(() -> {
                        Usuario novo = new Usuario();
                        novo.setEmail(email);
                        novo.setNome(nome);
                        novo.setImagemUsuario(imagem);
                        novo.setTipoLogin("GOOGLE");
                        return usuarioRepository.save(novo);
                    });

            // Gera o JWT interno
            return jwtService.gerarToken(usuario.getEmail());

        } catch (Exception e) {
            throw new RuntimeException("Erro ao autenticar com Google: " + e.getMessage());
        }
    }
}
