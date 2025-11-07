import { Button } from "./button";
import { Input } from "./input";
import FiltroItens from "./filtroItens";
import { useState, useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { chamadoSchema, ChamadoForm, ChamadoResponse } from "@/schemas/ChamadoformSchema";
import { useForm, Controller } from "react-hook-form";
import InputError from "@/components/InputError";
import NomeProdutoInput from "../NomeProdutoInput";

export default function PedidoDeAssistencia({ onClose }: { onClose: () => void }) {
  const [requisicaoAceita, setRequisicaoAceita] = useState(false);
  const [ultimoChamado, setUltimoChamado] = useState<ChamadoResponse>({
    nomeProduto: "iPhone",
    identificador: "ataxab123",
    tipoProduto: "Celular",
    descricao: "Tela quebrada",
    idPedido: "PED123456",
    status: "Em andamento",
    imagens: undefined,
  });

  const { register, handleSubmit, control, watch, setValue, formState: { errors, isValid } } = useForm<ChamadoForm>({
    resolver: zodResolver(chamadoSchema),
    mode: "onChange",
  });

  const imagens = watch("imagens");

  useEffect(() => {
    if (!imagens) return;
    const urls = Array.from(imagens).map((file) => URL.createObjectURL(file));
    return () => {
      urls.forEach((url) => URL.revokeObjectURL(url));
    };
  }, [imagens]);

  function pedidoAssistencia(data: ChamadoForm) {
    console.log("Dados do chamado:", data);
    setUltimoChamado({
      ...data,
      idPedido: "PED" + Math.floor(Math.random() * 1000000),
      status: "Aberto",
    });
    setRequisicaoAceita(true);

  }

  /*async function pedidoAssistencia(data: ChamadoForm) {
  try {
    const formData = new FormData();

    // Campos de texto
    formData.append("nomeProduto", data.nomeProduto);
    formData.append("identificador", data.identificador);
    formData.append("descricao", data.descricao);
    formData.append("tipoProduto", data.tipoProduto);

    // Imagens (se existirem)
    if (data.imagens && data.imagens.length > 0) {
      data.imagens.forEach((file, index) => {
        formData.append("imagens", file); 
        // alguns backends esperam "imagens[]" → se for o caso: formData.append("imagens[]", file);
      });
    }

    const response = await fetch("http://localhost:3000/api/assistencia", {
      method: "POST",
      body: formData, // não precisa de Content-Type, o browser já seta com boundary
    });

    if (!response.ok) throw new Error("Erro ao enviar chamado");

    const result: ChamadoResponse = await response.json();
    console.log("Chamado enviado:", result);

    setUltimoChamado(result); // vai atualizar com o retorno do backend
    setRequisicaoAceita(true); // abre o modal de sucesso
    onClose();
  } catch (error) {
    console.error("Erro:", error);
    alert("Falha ao abrir o chamado. Tente novamente.");
  }
}*/

  return (
    <>
      {/* Modal do formulário */}
      <div className="fixed inset-0 flex justify-center items-center bg-black/50 z-30">
        <div className="bg-white w-[90vw] md:w-[60vw] h-[90vh] md:h-[90vh] rounded shadow-lg">
          <div className="grid grid-rows-[5%_95%] h-full">
            {/* Cabeçalho */}
            <div className="relative w-full flex-row p-3">
              <p className="text-2xl">Abrir chamado de assistência</p>
              <Button className="absolute top-1 right-1 text-xl" onClick={onClose}>X</Button>
            </div>

            {/* Formulário */}
            <form onSubmit={handleSubmit(pedidoAssistencia)} className="grid grid-rows-[auto_auto_auto_auto_auto_1fr_auto] w-full gap-2 p-4 overflow-y-auto">
              <p className="text-lg font-semibold">Preencha os dados do produto e descreva o problema</p>

              {/* Tipo de Produto */}
              <div className="w-full">
                <p>Tipo de Produto</p>
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

              {/* Nome */}
              <div className="w-full">
                <NomeProdutoInput register={register} errors={errors} setValue={setValue} />
              </div>

              {/* Upload de imagens */}
              <div className="w-full">
                <p>Imagens (máx. 5)</p>
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  className="border rounded p-2 w-full"
                  onChange={(e) => {
                    const files = e.target.files;
                    if (!files) return;

                    // pega o que já está no formulário
                    const current = watch("imagens") || [];

                    // junta os novos arquivos com os antigos
                    const updated = [...current, ...Array.from(files)];

                    // limita a 5
                    if (updated.length > 5) {
                      alert("Você pode enviar no máximo 5 imagens");
                      return;
                    }

                    setValue("imagens", updated, { shouldValidate: true });
                  }}
                />
                <InputError message={errors.imagens?.message as string} />

                {/* Preview */}
                <div className="flex gap-2 flex-wrap mt-2">
                  {imagens?.map((file, index) => (
                    <img
                      key={index}
                      src={URL.createObjectURL(file)}
                      alt={`preview-${index}`}
                      className="w-20 h-20 object-cover rounded"
                    />
                  ))}
                </div>
              </div>

              {/* Identificador */}
              <div className="w-full">
                <p>Identificador do produto</p>
                <Input placeholder="Ex: ataxafb12cas" {...register("identificador")} />
                <InputError message={errors.identificador?.message} />
              </div>

              {/* Descrição */}
              <div className="w-full">
                <p>Descrição do problema</p>
                <textarea
                  placeholder="Descreva detalhadamente o problema"
                  className="text-lg w-full h-[70%] pl-2 pt-2 pr-2 border rounded-lg text-sm resize-none"
                  {...register("descricao")}
                />
                <InputError message={errors.descricao?.message} />
              </div>

              {/* Botões */}
              <div className="grid grid-cols-[70%_30%] gap-4 pr-5">
                <Button type="submit" className="w-full" disabled={!isValid}>Enviar chamado</Button>
                <Button className="w-full" onClick={onClose}>Cancelar</Button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Modal de sucesso */}
      {requisicaoAceita && (
        <div className="fixed inset-0 flex justify-center items-center bg-black/50 z-40">
          <div className="bg-white w-[90vw] md:w-[60vw] h-[90vh] md:h-[90vh] rounded shadow-lg">
            <div className="relative w-full flex-row p-3 border">
              <p className="text-2xl">Chamado Criado</p>
              <Button className="absolute top-1 right-1 text-xl" onClick={() => setRequisicaoAceita(false)}>X</Button>
            </div>

            <div className="grid grid-rows-[5%_20%_auto_auto] w-full h-[90%] gap-2 p-4">
              <p className="text-1xl">Seu chamado foi criado com sucesso</p>

              <div className="flex items-center justify-center">
                <div className="border-2 border-black rounded-md pt-3 pb-3 pl-10 pr-10">
                  <p className="text-xl">Anote o número de identificação abaixo</p>
                </div>
              </div>

              <div className="flex items-center flex-col justify-center border-2 border-black bg-gray-100 rounded-md">
                <p className="top-1 text-xl">Número de identificação do pedido:</p>
                <p className="mt-3 text-3xl"><strong>{ultimoChamado?.idPedido}</strong></p>
              </div>

              <div className="flex flex-col items-center justify-center border gap-2">
                <p className="text-xl"><strong>Identificador do produto: </strong> {ultimoChamado?.identificador}</p>
                <p><strong>Produto: </strong> {ultimoChamado?.nomeProduto}</p>
                <p><strong>Tipo do Produto: </strong> {ultimoChamado?.tipoProduto}</p>
                <p><strong>Status: </strong> {ultimoChamado?.status}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
