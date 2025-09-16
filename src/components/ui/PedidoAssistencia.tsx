
import { Button } from "./button";
import { Input } from "./input";
import FiltroItens from "./filtroItens";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { chamadoSchema, ChamadoForm, ChamadoResponse } from "@/schemas/ChamadoformSchema";
import { useForm, Controller } from "react-hook-form";
import InputError from "@/components/InputError";

export default function PedidoDeAssistencia({ onClose }: { onClose: () => void }) {
  const [requisicaoAceita, setRequisicaoAceita] = useState(false);
  const [ultimoChamado, setUltimoChamado] = useState<ChamadoResponse | null>({
  nomeProduto: "iPhone",
  identificador: "ataxab123",
  tipoProduto: "Celular",
  descricao: "Tela quebrada",
  idPedido: "PED123456",
  status: "Em andamento",
});
  const { register, handleSubmit, control, formState: { errors, isValid } } = useForm<ChamadoForm>({
    resolver: zodResolver(chamadoSchema),
    mode: "onChange",
  });


 function pedidoAssistencia(){

  }
/*
  async function pedidoAssistencia(data: ChamadoForm) {
    try {
      const response = await fetch("http://localhost:3000/api/assistencia", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Erro ao enviar chamado");

      const result: ChamadoResponse = await response.json();
      console.log("Chamado enviado:", result);

      setUltimoChamado(result);
      setRequisicaoAceita(true);
      onClose();
    } catch (error) {
      console.error("Erro:", error);
      alert("Falha ao abrir o chamado. Tente novamente.");
    }
  }
*/

  return (
    <>
      {/* Formulário */}
      <div className="fixed inset-0 flex justify-center items-center bg-black/50">
        <div className="bg-white w-[90%] sm:w-[60%] md:w-[50vw] h-[80%] sm:h-[75%] md:h-[70vh] rounded shadow-lg">
          <div className="relative w-full flex-row p-3 border">
            <p className="text-2xl">Abrir chamado de assistência</p>
            <Button className="absolute top-1 right-1 text-xl" onClick={onClose}>X</Button>
          </div>

          <form onSubmit={handleSubmit(pedidoAssistencia)} className="relative grid grid-rows-[auto_auto_auto_auto_1fr_auto] w-full h-[90%] gap-2 p-4">
            <p className="text-lg font-semibold">Preencha os dados do produto e descreva o problema</p>

            <div className="w-full">
              <p>Nome do produto</p>
              <Input placeholder="Ex: iPhone" {...register("nomeProduto")} />
              <InputError message={errors.nomeProduto?.message} />
            </div>

            <div className="w-full">
              <p>Tipo de Produto</p>
              {/* Controller conecta o FiltroItens ao RHF */}
              <Controller
                name="tipoProduto"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <FiltroItens value={field.value} onChange={field.onChange} />
                )}
              />
              <InputError message={errors.tipoProduto?.message} />
            </div>

            <div className="w-full">
              <p>Identificador do produto</p>
              <Input placeholder="Ex: ataxafb12cas" {...register("identificador")} />
              <InputError message={errors.identificador?.message} />
            </div>

            <div className="w-full">
              <p>Descrição do problema</p>
              <textarea
                placeholder="Descreva detalhadamente o problema"
                className="text-lg w-full h-[70%] pl-2 pt-2 pr-2 border rounded-lg text-sm resize-none"
                {...register("descricao")}
              />
              <InputError message={errors.descricao?.message} />
            </div>

            <div className="grid grid-cols-[70%_30%] gap-4 pr-5">
              <Button type="submit" className="w-full" disabled={!isValid} onClick={() =>{setRequisicaoAceita(true)}}>Enviar chamado</Button>
              <Button className="w-full" onClick={onClose}>Cancelar</Button>
            </div>
          </form>
        </div>
      </div>

      {/* Modal de sucesso */}
      {requisicaoAceita && (
        <div className="fixed inset-0 flex justify-center items-center bg-black/50">
          <div className="bg-white w-[90%] sm:w-[60%] md:w-[50vw] h-[80%] sm:h-[75%] md:h-[70vh] rounded shadow-lg">
            <div className="relative w-full flex-row p-3 border">
              <p className="text-2xl">Chamado Criado</p>
              <Button className="absolute top-1 right-1 text-xl" onClick={() => setRequisicaoAceita(false)}>X</Button>
            </div>

            <div className="grid grid-rows-[5%_20%_auto_auto] w-full h-[90%] gap-2 p-4">
                <div className="border">
                    <p className="text-1xl">Seu chamado foi criado com sucesso</p>
                </div>
              

              <div className="flex items-center justify-center">
                <div className="border-2 border-black rounded-md pt-3 pb-3 pl-10 pr-10">
                  <p className="text-xl">Anote o número de identificação abaixo</p>
                </div>
              </div>

              <div className="flex items-center flex-col justify-center border-2 border-black bg-gray-100 rounded-md">
                <p className="top-1 text-xl">Número de identificação do pedido:</p>
                <p className="mt-3 text-3xl"><strong>{ultimoChamado?.idPedido} </strong></p>
              </div>

              <div className="flex flex-col items-center justify-center border gap-2">
                <p className="text-xl"><strong>Identificador do produto: </strong> {ultimoChamado?.identificador}</p>
                <p> <strong>Produto: </strong> {ultimoChamado?.nomeProduto}</p>
                <p> <strong>Tipo do Produto: </strong> {ultimoChamado?.tipoProduto}</p>
                <p> <strong>Status: </strong> {ultimoChamado?.status}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
