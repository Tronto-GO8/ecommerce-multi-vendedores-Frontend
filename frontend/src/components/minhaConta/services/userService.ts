import { User } from "../types/User";

const API_URL = "https://api.exemplo.com";

export interface UserSettings {
  notifications: {
    email: boolean;
    sms: boolean;
  };
}

export async function getUser(token: string): Promise<User> {
  const res = await fetch(`${API_URL}/usuario`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok) throw new Error("Erro ao buscar usuário");
  return res.json();
}

export async function updateUser(user: User, token: string): Promise<User> {
  const res = await fetch(`${API_URL}/usuario`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(user),
  });
  if (!res.ok) throw new Error("Erro ao atualizar usuário");
  return res.json();
}

export async function changePassword(
  senhaAtual: string,
  novaSenha: string,
  token: string
): Promise<void> {
  const res = await fetch(`${API_URL}/usuario/senha`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ senhaAtual, novaSenha }),
  });
  if (!res.ok) throw new Error("Erro ao alterar senha");
}

export async function getUserSettings(token: string): Promise<UserSettings> {
  const res = await fetch(`${API_URL}/usuario/configuracoes`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  if (!res.ok) throw new Error("Erro ao buscar configurações do usuário");
  return res.json();
}

export async function updateUserSettings(
  settings: UserSettings,
  token: string
): Promise<void> {
  const res = await fetch(`${API_URL}/usuario/configuracoes`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(settings),
  });
  if (!res.ok) throw new Error("Erro ao atualizar configurações do usuário");
}

export async function deleteUserAccount(token: string): Promise<void> {
  const res = await fetch(`${API_URL}/usuario`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  if (!res.ok) throw new Error("Erro ao excluir conta");
}