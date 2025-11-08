import { Order } from "../types/Order";

const API_URL = "https://api.exemplo.com/pedidos";

export async function getOrders(token: string): Promise<Order[]> {
  const response = await fetch(API_URL, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Erro ao buscar pedidos");
  }

  return response.json();
}