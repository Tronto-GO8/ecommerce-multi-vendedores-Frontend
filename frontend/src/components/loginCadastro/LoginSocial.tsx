import { useState } from "react";
import Facebook from "@/assets/icones_svg/Facebook"
import Google from "@/assets/icones_svg/Google"
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button"

export default function LoginSocial() {
  const [loadingGoogle, setLoadingGoogle] = useState(false)
  const [loadingFacebook, setLoadingFacebook] = useState(false)


  //temporário
  async function handleGoogleLogin() {
    setLoadingGoogle(true)
    const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID; //dados que vão vir do backend
    const redirectUri = import.meta.env.VITE_GOOGLE_REDIRECT_URI;//dados que vão vir do backend
    const scope = "openid email profile";//dados que vão vir do backend
    const responseType = "code";//dados que vão vir do backend
    const googleAuthUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=${responseType}&scope=${encodeURIComponent(scope)}&access_type=offline`; //dados que vão vir do backend

    setTimeout(() => {
      window.location.href = googleAuthUrl;
    }, 5000);// abre a página do Google
   
  };

  async function handleFacebookLogin() {
    setLoadingFacebook(true);

    const clientId = import.meta.env.VITE_FACEBOOK_CLIENT_ID; // ID do app
    const redirectUri = import.meta.env.VITE_FACEBOOK_REDIRECT_URI; // precisa ser o mesmo configurado no painel do Facebook
    const scope = "email,public_profile"; // permissões
    const responseType = "code";

    const fbAuthUrl = 
      `https://www.facebook.com/v20.0/dialog/oauth?client_id=${clientId}` +
      `&redirect_uri=${redirectUri}` +
      `&response_type=${responseType}` +
      `&scope=${encodeURIComponent(scope)}`;

    // Redireciona o usuário para o Facebook
    window.location.href = fbAuthUrl;
  }

  //fim temporário

  /* versão valendo
  const handleGoogleLogin = async () => {
    try {
      setLoadingGoogle(true) //faz a animação de espera começar
      const res = await fetch("http://localhost:4000/auth/google/url"); // backend
      const data = await res.json(); //valor que vai chagar
      window.location.href = data.url; // redireciona para o Google
    } catch (err) {
      console.error("Erro ao iniciar login com Google", err);
    } finally {
      setLoadingGoogle(false) // faz parar o carregamente, mas como a página muda..kk
  }; 
  async function handleFacebookLogin() {
    try {
      setLoading(true);

      // Pede ao backend a URL de autenticação do Facebook
      const res = await fetch("http://localhost:4000/auth/facebook/url");
      const data = await res.json();

      // backend responde algo como: { url: "https://www.facebook.com/..." }
      window.location.href = data.url;
    } catch (err) {
      console.error("Erro ao iniciar login com Facebook:", err);
    } finally {
      setLoading(false); // só funciona se der erro, pq se redirecionar a página muda
    }
  }
  
  
  */

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
