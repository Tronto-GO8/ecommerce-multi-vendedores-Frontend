import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function AuthCallback() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const code = params.get("code");

    if (code) {
      fetch("http://localhost:4000/auth/google/callback?code=" + code) //manda os dados para o backend dentro do code
        .then(res => res.json())
        .then(data => {
          localStorage.setItem("user", JSON.stringify(data.user)); // salva o nome do usuario localStorage
          localStorage.setItem("token", data.token); // salva o token no localStorage
          navigate("/"); // redireciona para a tela principal
        }).catch(err => {
          console.error("Erro ao processar login:", err);
          alert("Não foi possível completar o login. Tente novamente.");
          navigate("/login"); // redireciona para login em caso de erro
        });
    }
  }, [location, navigate]);

  return <p>Conectando...</p>; // não é tela final, só de transição
}