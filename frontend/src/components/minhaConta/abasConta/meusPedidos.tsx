import React, { useState, useEffect } from "react";
import { getOrders } from "../services/orderService";
import { Order } from "../types/Order";

export default function MeusPedidos() {
  const [pedidos, setPedidos] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const token = "TOKEN_DO_USUARIO_AQUI";


  useEffect(() => {
    async function carregarPedidos() {
      try {
        const dados = await getOrders(token);
        setPedidos(dados);
      } catch (error) {
        console.error("Erro ao carregar pedidos:", error);
      } finally {
        setLoading(false);
      }
    }

    carregarPedidos();
  }, [token]);

  if (loading) return <p>Carregando...</p>;


  return (
    <main className="dark:bg-gray-900 dark:text-gray-100">
      <section className="border border-gray-400 dark:border-gray-700 bg-white dark:bg-gray-900 rounded-lg shadow-sm p-6 max-w-4xl mx-auto">
        <div className="border-b border-gray-300 dark:border-gray-700 pb-3 mb-6">
          <h2 className="text-xl font-semibold">Histórico de compras</h2>
          <h3 className="text-l text-gray-800 dark:text-gray-300">
            Visualize seus pedidos anteriores
          </h3>
        </div>

        {pedidos.length === 0 ? (
          <p className="text-gray-600 dark:text-gray-400">Nenhum pedido encontrado.</p>
        ) : (
          pedidos.map((pedido) => (
            <div
              key={pedido.id}
              className="border border-gray-400 dark:border-gray-700 rounded-lg p-4 mb-2 bg-white dark:bg-gray-800"
            >
              <div className="flex justify-between items-start">
             
                <div>
                  <h3 className="text-lg text-gray-800 dark:text-gray-200">
                    Pedido #{pedido.id}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {new Date(pedido.data).toLocaleDateString("pt-BR")}
                  </p>
                  {pedido.itens.map((item, index) => (
                    <p
                      key={index}
                      className="text-l text-gray-800 dark:text-gray-300"
                    >
                      {item.quantidade}x {item.nome}
                    </p>
                  ))}
                </div>

          
                <div className="text-right">
                  <p className="text-l text-gray-800 dark:text-gray-300">
                    R$ {pedido.valorTotal.toFixed(2)}
                  </p>
                  <p className="border-2 border-gray-800 dark:border-gray-500 text-l text-gray-800 dark:text-gray-200 rounded-lg inline-block px-2">
                    {pedido.status}
                  </p>
                </div>
              </div>
            </div>
          ))
        )}
      </section>
    </main>
  );
}