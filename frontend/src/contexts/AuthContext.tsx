import { createContext, useContext, useEffect, useState } from "react";
import { api } from "@/services/api";

export type User = {
  id?: number;
  nome?: string;
  email: string;
  isVendedor?: boolean;
  dadosVendedor?: {
    nomeDaLoja: string;
    cnpj: string;
  };
};

type RawUser = {
  nome?: string;
  email: string;
  senha: string;
};

type AuthContextType = {
  usuarioAtual: User | null;
  estaAutenticado: boolean;
  loading: boolean;

  register: (payload: RawUser) => Promise<{ ok: boolean; message?: string }>;
  login: (email: string, senha: string) => Promise<{ ok: boolean; message?: string }>;
  loginGoogle: (googleToken: string) => Promise<void>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AUTH_USER_KEY = "authUser";
const TOKEN_KEY = "authToken";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [usuarioAtual, setUsuarioAtual] = useState<User | null>(null);
  const [estaAutenticado, setEstaAutenticado] = useState(
    Boolean(localStorage.getItem(TOKEN_KEY))
  );
  const [loading, setLoading] = useState(false);

  // carregar usuário salvo
  useEffect(() => {
    const savedUser = localStorage.getItem(AUTH_USER_KEY);
    if (savedUser) setUsuarioAtual(JSON.parse(savedUser));
  }, []);

  // REGISTRO
  const register = async (payload: RawUser) => {
    setLoading(true);
    try {
      const res = await api.post("/auth/register", payload);
      return { ok: true };
    } catch (err: any) {
      return { ok: false, message: err?.response?.data?.message ?? "Erro ao registrar" };
    } finally {
      setLoading(false);
    }
  };

  // LOGIN LOCAL
  const login = async (email: string, senha: string) => {
    setLoading(true);
    try {
      const res = await api.post("/auth/login", { email, senha });

      const { token, user } = res.data;

      if (!token || !user)
        return { ok: false, message: "Resposta inválida do servidor." };

      // salvar nos storages
      localStorage.setItem(TOKEN_KEY, token);
      localStorage.setItem(AUTH_USER_KEY, JSON.stringify(user));

      setUsuarioAtual(user);
      setEstaAutenticado(true);

      return { ok: true };
    } catch (err: any) {
      return { ok: false, message: err?.response?.data?.message ?? "Erro ao logar" };
    } finally {
      setLoading(false);
    }
  };

  // LOGIN GOOGLE
  const loginGoogle = async (googleToken: string) => {
    setLoading(true);
    try {
      const res = await api.post("/auth/google", { token: googleToken });

      const { token, user } = res.data;

      localStorage.setItem(TOKEN_KEY, token);
      localStorage.setItem(AUTH_USER_KEY, JSON.stringify(user));

      setUsuarioAtual(user);
      setEstaAutenticado(true);
    } catch (e) {
      console.error("Erro no login Google:", e);
    } finally {
      setLoading(false);
    }
  };

  // LOGOUT
  const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(AUTH_USER_KEY);
    setUsuarioAtual(null);
    setEstaAutenticado(false);
  };

  return (
    <AuthContext.Provider
      value={{
        usuarioAtual,
        estaAutenticado,
        loading,
        register,
        login,
        loginGoogle,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth deve ser usado dentro de <AuthProvider>");
  return ctx;
};
