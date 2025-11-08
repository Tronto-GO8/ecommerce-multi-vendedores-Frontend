import { Chamado } from "../types/Chamado";

const API_URL = "https://api.exemplo.com/chamados";

export async function getChamados(token: string): Promise<Chamado[]> {
  const response = await fetch(`${API_URL}/chamados`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error(`Erro ao buscar chamados: ${response.statusText}`);
  }

  return response.json();
}

export async function getChamadoById(id: number, token: string): Promise<Chamado> {
  const response = await fetch(`${API_URL}/chamados/${id}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error(`Erro ao buscar chamado ${id}: ${response.statusText}`);
  }

  return response.json();
}
