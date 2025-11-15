import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function AuthCallback() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const code = params.get("code");

    if (!code) return;

    fetch(`http://localhost:8080/Techventory/auth/google/callback?code=${code}`)
      .then(res => res.json())
      .then(data => {

        if (data.token) {
          localStorage.setItem("authToken", data.token);
          navigate("/app/inicial");
        } else {
          console.error("Erro no callback:", data);
          navigate("/login");
        }
      });
  }, []);

  return <p>Conectando...</p>;
}
