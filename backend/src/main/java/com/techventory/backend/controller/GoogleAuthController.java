package com.techventory.backend.controller;

import com.google.api.client.googleapis.auth.oauth2.GoogleTokenResponse;
import com.techventory.backend.servicos.GoogleAuthService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/auth/google")
@CrossOrigin(origins = "*")
public class GoogleAuthController {

    private final GoogleAuthService googleAuthService;

    public GoogleAuthController(GoogleAuthService googleAuthService) {
        this.googleAuthService = googleAuthService;
    }

    // 1) FRONT PEDIR A URL DO GOOGLE
    @GetMapping("/url")
    public Map<String, String> getGoogleUrl() {
        return Map.of("url", googleAuthService.gerarUrlDeLogin());
    }

    // 2) GOOGLE REDIRECIONA PARA AQUI COM O CODE
    @GetMapping("/callback")
    public ResponseEntity<?> callback(@RequestParam("code") String code) {
        try {
            GoogleTokenResponse tokenResponse = googleAuthService.trocarCodePorToken(code);
            String jwt = googleAuthService.processarLogin(tokenResponse);

            // FRONT-END busca aqui
            return ResponseEntity.ok(Map.of(
                    "message", "Login Google OK",
                    "token", jwt
            ));

        } catch (Exception e) {
            return ResponseEntity.status(400).body(Map.of("error", e.getMessage()));
        }
    }
}
