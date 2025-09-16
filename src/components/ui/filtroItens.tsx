type FiltroItensProps = {
  value?: string;
  onChange?: (value: string) => void;
};

export default function FiltroItens({ value, onChange }: FiltroItensProps) {
  return (
    <div>
      <select
        className="w-full border rounded-md px-1 py-2"
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
      >
        <option value="" disabled>
          Selecione uma categoria...
        </option>
        <option value="celulares">Celulares</option>
        <option value="notebooks">Notebooks</option>
        <option value="tablets">Tablets</option>
        <option value="acessorios">Acessórios</option>
      </select>
    </div>
  );
}
