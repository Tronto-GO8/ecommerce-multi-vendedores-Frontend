export interface Produtos {
  id: string;
  nome: string;
  empresa: string;
  preco: number;
  tags: string[];
  imagem?: { url: string }[];
}

export interface CartItem extends Produtos {
  quantity: number;
}

export interface Address {
  cep: string;
  rua: string;
  numero: string;
  complemento?: string;
  bairro: string;
  cidade: string;
  estado: string;
  nome?: string;
}

export interface ShippingOption {
  id: string;
  name: string;
  price: number;
  estimatedDays: number;
}

export type PaymentMethod = "credit" | "debit" | "pix" | "boleto";
