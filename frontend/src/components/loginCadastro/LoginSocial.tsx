import { useState } from "react";
import Facebook from "@/assets/icones_svg/Facebook";
import Google from "@/assets/icones_svg/Google";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function LoginSocial() {
  const [loadingGoogle, setLoadingGoogle] = useState(false);
  const [loadingFacebook, setLoadingFacebook] = useState(false);

  // LOGIN COM GOOGLE (FUNCIONANDO)
  const handleGoogleLogin = async () => {
  setLoadingGoogle(true);

  try {
    const res = await fetch("http://localhost:8080/Techventory/auth/google/url");
    const data = await res.json();

    window.location.href = data.url;  // abre o Google OAuth
  } catch (err) {
    console.error("Erro Google OAuth:", err);
  }
};


  // LOGIN COM FACEBOOK (AINDA NÃO IMPLEMENTADO)
  const handleFacebookLogin = () => {
    alert("Login com Facebook ainda não está implementado no backend.");
  };

  return (
    <div className="flex items-center justify-center align-middle">
      <Button
        type="button"
        variant="outline"
        className="w-full hover:text-gray-600"
        onClick={handleGoogleLogin}
      >
        {loadingGoogle ? (
          <>
            <Loader2 className="animate-spin h-5 w-5" />
            Conectando...
          </>
        ) : (
          <>
            <Google/>
            Continuar com Google
          </>
        )}
      </Button>

      <Button
        type="button"
        variant="outline"
        className="w-full hover:text-gray-600"
        onClick={handleFacebookLogin}
      >
        {loadingFacebook ? (
          <>
            <Loader2 className="animate-spin h-5 w-5" />
            Conectando...
          </>
        ) : (
          <>
            <Facebook />
            Continuar com Facebook
          </>
        )}
      </Button>
    </div>

  )
}
