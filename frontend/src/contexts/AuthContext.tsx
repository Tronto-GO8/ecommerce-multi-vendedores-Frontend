import { createContext, useContext, useEffect, useState } from "react";

type User = {
  nome?: string;
  email: string;
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
  login: (
    email: string,
    senha: string
  ) => Promise<{ ok: boolean; message?: string }>;
  logout: () => void;
  register: (payload: RawUser) => Promise<{ ok: boolean; message?: string }>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const USERS_KEY = "app_users_v1";
const TOKEN_KEY = "authToken";
const AUTH_USER_KEY = "authUser";

function getUsers(): RawUser[] {
  const raw = localStorage.getItem(USERS_KEY);
  return raw ? JSON.parse(raw) : [];
}
function setUsers(users: RawUser[]) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [usuarioAtual, setUsuarioAtual] = useState<User | null>(() => {
    const raw = localStorage.getItem(AUTH_USER_KEY);
    return raw ? JSON.parse(raw) : null;
  });
  const [loading, setLoading] = useState(false);

  const estaAutenticado = Boolean(localStorage.getItem(TOKEN_KEY));

  useEffect(() => {
    // sincroniza usuarioAtual do localStorage se mudar entre abas
    const handler = () => {
      const raw = localStorage.getItem(AUTH_USER_KEY);
      setUsuarioAtual(raw ? JSON.parse(raw) : null);
    };
    window.addEventListener("storage", handler);
    return () => window.removeEventListener("storage", handler);
  }, []);

  const login = async (email: string, senha: string) => {
    setLoading(true);
    try {
      // Simula chamada assincrona (faça fetch para sua API aqui)
      await new Promise((r) => setTimeout(r, 500));
      const users = getUsers();
      const found = users.find(
        (u) => u.email.toLowerCase() === email.toLowerCase()
      );
      if (!found) return { ok: false, message: "Usuário não encontrado." };
      if (found.senha !== senha)
        return { ok: false, message: "Senha incorreta." };

      const token = btoa(`${email}:${Date.now()}`);
      localStorage.setItem(TOKEN_KEY, token);
      const authUser = { nome: found.nome, email: found.email };
      localStorage.setItem(AUTH_USER_KEY, JSON.stringify(authUser));
      setUsuarioAtual(authUser);
      return { ok: true };
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(AUTH_USER_KEY);
    setUsuarioAtual(null);
  };

  const register = async (payload: RawUser) => {
    setLoading(true);
    try {
      await new Promise((r) => setTimeout(r, 400));
      const users = getUsers();
      const exists = users.some(
        (u) => u.email.toLowerCase() === payload.email.toLowerCase()
      );
      if (exists)
        return { ok: false, message: "Já existe uma conta com esse e-mail." };

      users.push(payload);
      setUsers(users);
      return { ok: true };
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        usuarioAtual,
        estaAutenticado,
        loading,
        login,
        logout,
        register,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
