type FiltroItensProps = {
  value?: string;
  onChange?: (value: string) => void;
};

export default function FiltroItens({ value, onChange }: FiltroItensProps) {
  return (
    <div>
      <select
        className="w-full max-h-[300px] border rounded-md px-1 py-2"
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
      >
        <option value="" disabled>
          Categorias...
        </option>
         {/* 📱 Dispositivos móveis */}
  <option value="celulares">Celulares</option>
  <option value="smartwatches">Smartwatches</option>
  <option value="tablets">Tablets</option>
  <option value="fones-de-ouvido">Fones de Ouvido</option>
  <option value="carregadores">Carregadores e Cabos</option>
  <option value="capas-peliculas">Capas e Películas</option>

  {/* 💻 Computadores e periféricos */}
  <option value="notebooks">Notebooks</option>
  <option value="desktops">Computadores de Mesa</option>
  <option value="monitores">Monitores</option>
  <option value="teclados">Teclados</option>
  <option value="mouses">Mouses</option>
  <option value="webcams">Webcams</option>
  <option value="headsets">Headsets</option>
  <option value="impressoras">Impressoras</option>

  {/* ⚙️ Componentes internos */}
  <option value="placas-mae">Placas-mãe</option>
  <option value="processadores">Processadores</option>
  <option value="placas-de-video">Placas de Vídeo</option>
  <option value="memorias-ram">Memórias RAM</option>
  <option value="armazenamento">HDs e SSDs</option>
  <option value="fontes">Fontes de Alimentação</option>
  <option value="gabinetes">Gabinetes</option>
  <option value="coolers">Coolers e Ventoinhas</option>

  {/* 🖥️ Redes e conectividade */}
  <option value="roteadores">Roteadores e Modems</option>
  <option value="adaptadores">Adaptadores e Hubs USB</option>
  <option value="cabos">Cabos e Conectores</option>

  {/* 🔌 Acessórios diversos */}
  <option value="perifericos">Periféricos Diversos</option>
  <option value="suportes">Suportes e Suportes de Monitor</option>
  <option value="limpeza">Kits de Limpeza e Manutenção</option>
  <option value="energia">Filtros de Linha e Nobreaks</option>

  {/* 🎮 Entretenimento */}
  <option value="consoles">Consoles e Games</option>
  <option value="controles">Controles e Acessórios Gamer</option>
  <option value="cadeiras-gamer">Cadeiras Gamer</option>
      </select>
    </div>
  );
}
