import { AnimatePresence, motion } from "framer-motion";
import { Card } from "../../ui/card";
import { useState } from "react";

type ImagemProdutoProps = {
  imageUrl: string;
  nome: string;
};

export default function ImagemProduto({ imageUrl, nome }: ImagemProdutoProps) {
  const [imagemCarregada, setImagemCarregada] = useState(false);
  return (
    <Card className="relative w-[240px] md:w-[240px] h-[260px]  border-none">
      <AnimatePresence mode="wait">
        <motion.img
          key={imageUrl} // força animação ao trocar imagem
          src={imageUrl}
          alt={nome}
          onLoad={() => setImagemCarregada(true)}
          className="w-full h-full object-contain"
          initial={{ opacity: 0, scale: 1.1 }} // começa levemente ampliada e invisível
          animate={{ opacity: 1, scale: 1 }} // termina visível e no tamanho normal
          exit={{ opacity: 0, scale: 0.9 }} // ao sair, encolhe e some
          transition={{ duration: 0.5, ease: "easeInOut" }}
          draggable={false}
        />
      </AnimatePresence>

      <div className="absolute inset-0 bg-black/5 pointer-events-none" />
    </Card>
  );
}
