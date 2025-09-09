export interface Produtos {
  id: number;
  nome: string;
  preco: number;
  imagem?: { url: string }[];
  descricao?: string;
  categoria?: string;
  quantidade?: number;
  empresa?: string;
  tags?: { nome: string }[];
}

export const ProdutoInfo: Produtos[] = [
  {
    id: 1,
    nome: "Cadeira Gamer TGT Heron, Preta e Vermelha, TGT-HR-BRD01",
    preco: 899.9,
    imagem: [
      {
        url: "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/t/g/tgt-hr-brd0141545100007.jpg",
      },
    ],
    descricao: "Cadeira Gamer TGT Heron, Preta e Vermelha, TGT-HR-BRD01",
    categoria: "Cadeira Gamer",
    quantidade: 10,
    empresa: "TGT",
    tags: [
      { nome: "Cadeira" },
      { nome: "Gamer" },
      { nome: "TGT" },
      { nome: "Heron" },
      { nome: "Preta" },
      { nome: "Vermelha" },
    ],
  },
  {
    id: 2,
    nome: "Monitor Gamer Mancer Horizon Z2B, 21.5 Pol, VA, FHD, 1ms, 100Hz, HDMI/VGA, MCR-HZ2BN21-BL2",
    preco: 799.9,
    imagem: [
      {
        url: "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/m/c/mcr-hz2bn21-bl2101400541003_1.jpg",
      },
    ],
    tags: [
      { nome: "Monitor" },
      { nome: "Gamer" },
      { nome: "Mancer" },
      { nome: "Horizon" },
      { nome: "Z2B" },
      { nome: "21.5 Pol" },
      { nome: "VA" },
      { nome: "FHD" },
      { nome: "1ms" },
      { nome: "100Hz" },
      { nome: "HDMI/VGA" },
    ],
    descricao:
      "Monitor Gamer Mancer Horizon Z2B, 21.5 Pol, VA, FHD, 1ms, 100Hz, HDMI/VGA, MCR-HZ2BN21-BL2",
    categoria: "Monitor Gamer",
    quantidade: 15,
    empresa: "Mancer",
  },
  {
    id: 3,
    nome: "Processador Intel Core i5-12400F, 6-Core, 12-Threads, 2.5GHz (4.4GHz Turbo), Cache 18MB, LGA1700, BX8071512400F",
    preco: 699.9,
    imagem: [
      {
        url: "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/b/x/bx8071512400f2.jpg",
      },
    ],
    tags: [
      { nome: "Processador" },
      { nome: "Intel" },
      { nome: "Core i5" },
      { nome: "12400F" },
      { nome: "6-Core" },
      { nome: "12-Threads" },
      { nome: "2.5GHz" },
      { nome: "4.4GHz Turbo" },
      { nome: "Cache 18MB" },
      { nome: "LGA1700" },
    ],
    descricao:
      "Processador Intel Core i5-12400F, 6-Core, 12-Threads, 2.5GHz (4.4GHz Turbo), Cache 18MB, LGA1700, BX8071512400F",
    categoria: "Processador",
    quantidade: 25,
    empresa: "Intel",
  },
  {
    id: 4,
    nome: "Processador AMD Ryzen 5 5500, 6-Core, 12-Threads, 3.6GHz (4.2GHz Turbo), Cache 19MB, AM4, 100-100000457BOX",
    preco: 549.9,
    imagem: [
      {
        url: "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/1/0/100-100000457box_1.jpg",
      },
    ],
    tags: [
      { nome: "Processador" },
      { nome: "AMD" },
      { nome: "Ryzen 5" },
      { nome: "5500" },
      { nome: "6-Core" },
      { nome: "12-Threads" },
      { nome: "3.6GHz" },
      { nome: "4.2GHz Turbo" },
      { nome: "Cache 19MB" },
      { nome: "AM4" },
    ],
    descricao:
      "Processador AMD Ryzen 5 5500, 6-Core, 12-Threads, 3.6GHz (4.2GHz Turbo), Cache 19MB, AM4, 100-100000457BOX",
    categoria: "Processador",
    quantidade: 20,
    empresa: "AMD",
  },
  {
    id: 5,
    nome: "PC Gamer Mancer Afrodite, Ryzen 5 5600GT, 16GB DDR4, SSD 480GB",
    preco: 3999.9,
    imagem: [
      {
        url: "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/g/a/gabinete-gamer-mancer-hexer-sgpu-001_10.jpg",
      },
    ],
    tags: [
      { nome: "PC Gamer" },
      { nome: "Mancer" },
      { nome: "Afrodite" },
      { nome: "Ryzen 5 5600GT" },
      { nome: "16GB DDR4" },
      { nome: "SSD 480GB" },
    ],
    descricao: "PC Gamer Mancer Afrodite, Ryzen 5 5600GT, 16GB DDR4, SSD 480GB",
    categoria: "PC Gamer",
    quantidade: 5,
    empresa: "Mancer",
  },
  {
    id: 6,
    nome: "Teclado Mecanico Mancer Tharix, Rainbow, ABNT2, Switch Vermelho, Preto, MCR-THX-RBW01",
    preco: 159.99,
    imagem: [
      {
        url: "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/m/c/mcr-thx-rbw01445553.jpg",
      },
    ],
    tags: [
      { nome: "Teclado" },
      { nome: "Mancer" },
      { nome: "Tharix" },
      { nome: "Rainbow" },
      { nome: "ABNT2" },
      { nome: "Switch Vermelho" },
      { nome: "Preto" },
      { nome: "MCR-THX-RBW01" },
    ],
    descricao:
      "Teclado Mecanico Mancer Tharix, Rainbow, ABNT2, Switch Vermelho, Preto, MCR-THX-RBW01R",
    categoria: "Teclado Gamer",
    quantidade: 30,
    empresa: "Mancer",
  },
  {
    id: 7,
    nome: "Mouse Gamer Mancer Draxor, RGB, 7200DPI, 6 Botoes, Preto, MCR-DXR-RGB01",
    preco: 89.9,
    imagem: [
      {
        url: "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/m/c/mcr-dxr-rgb01121145241001450.jpg",
      },
    ],
    tags: [
      { nome: "Mouse" },
      { nome: "Gamer" },
      { nome: "Mancer" },
      { nome: "Draxor" },
      { nome: "RGB" },
      { nome: "7200DPI" },
      { nome: "6 Botoes" },
      { nome: "Preto" },
      { nome: "MCR-DXR-RGB01" },
    ],
    descricao:
      "Mouse Gamer Mancer Draxor, RGB, 7200DPI, 6 Botoes, Preto, MCR-DXR-RGB01",
    categoria: "Mouse Gamer",
    quantidade: 50,
    empresa: "Mancer",
  },
  {
    id: 8,
    nome: "Fonte Corsair CX650, 650W, 80 Plus Bronze, Preto, CP-9020278-BR",
    preco: 249.9,
    imagem: [
      {
        url: "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/c/p/cp-9020278-br3.jpg",
      },
    ],
    tags: [
      { nome: "Fonte" },
      { nome: "Corsair" },
      { nome: "CX650" },
      { nome: "650W" },
      { nome: "80 Plus Bronze" },
      { nome: "Preto" },
    ],
    descricao:
      "FFonte Corsair CX650, 650W, 80 Plus Bronze, Preto, CP-9020278-BR",
    categoria: "Fonte",
    quantidade: 40,
    empresa: "Corsair",
  },
  {
    id: 9,
    nome: "Placa de Vídeo ASUS GeForce GTX 1650 Phoenix, 4GB GDDR6, DLSS, Ray Tracing, DUAL-GTX1650-O4G",
    preco: 1299.9,
    imagem: [
      {
        url: "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/d/u/dual-gtx1650-o4g_1.jpg",
      },
    ],
    tags: [
      { nome: "Placa de Vídeo" },
      { nome: "ASUS" },
      { nome: "GeForce GTX 1650" },
      { nome: "Phoenix" },
      { nome: "4GB GDDR6" },
      { nome: "DLSS" },
      { nome: "Ray Tracing" },
    ],
    descricao:
      "Placa de Vídeo ASUS GeForce GTX 1650 Phoenix, 4GB GDDR6, DLSS, Ray Tracing, DUAL-GTX1650-O4G",
    categoria: "Placa de Vídeo",
    quantidade: 8,
    empresa: "ASUS",
  },
  {
    id: 10,
    nome: "Placa Mae Asus Prime B760M-A D4, DDR4, Socket LGA1700, M-ATX, Chipset Intel B760, PRIME-B760M-A-D4",
    preco: 899.9,
    imagem: [
      {
        url: "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/p/r/prime-b760m-a-d4.jpg",
      },
    ],
    tags: [
      { nome: "Placa-Mãe" },
      { nome: "ASUS" },
      { nome: "PRIME B760M-A D4" },
      { nome: "DDR4" },
      { nome: "Socket LGA1700" },
      { nome: "M-ATX" },
      { nome: "Chipset Intel B760" },
      { nome: "PRIME-B760M-A-D4" },
    ],
    descricao:
      "Placa Mae Asus Prime B760M-A D4, DDR4, Socket LGA1700, M-ATX, Chipset Intel B760, PRIME-B760M-A-D4",
    categoria: "Placa-Mãe",
    quantidade: 12,
    empresa: "ASUS",
  },
  {
    id: 11,
    nome: "Memoria Corsair Vengeance DDR5, 32GB (2x16GB), 5200MHz, C40, Branca, CMK32GX5M2B5200C40W",
    preco: 299.9,
    imagem: [
      {
        url: "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/c/m/cmk32gx5m2b5200c40w02510.jpg",
      },
    ],
    tags: [
      { nome: "Memória RAM" },
      { nome: "Corsair" },
      { nome: "Vengeance DDR5" },
      { nome: "32GB (2x16GB)" },
      { nome: "5200MHz" },
      { nome: "C40" },
      { nome: "Branca" },
    ],
    descricao:
      "Memoria Corsair Vengeance DDR5, 32GB (2x16GB), 5200MHz, C40, Branca, CMK32GX5M2B5200C40W",
    categoria: "Memória RAM",
    quantidade: 18,
    empresa: "Corsair",
  },
  {
    id: 12,
    nome: "SSD Kingston A400, 240GB, 2.5, Sata III 6GB/s, Leitura 500MB/s, Gravacao 350MB/s, SA400S37-240G",
    preco: 149.9,
    imagem: [
      {
        url: "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/s/a/sa400s37240g4123.jpg",
      },
    ],
    tags: [
      { nome: "SSD" },
      { nome: "Kingston" },
      { nome: "A400" },
      { nome: "240GB" },
      { nome: "SATA III 6GB/S" },
      { nome: "Leitura 500MB/S" },
      { nome: "Gravacao 350MB/S" },
    ],
    descricao:
      "SSD Kingston A400, 240GB, 2.5, Sata III 6GB/s, Leitura 500MB/s, Gravacao 350MB/s, SA400S37-240G",
    categoria: "SSD",
    quantidade: 22,
    empresa: "Kingston",
  },
  {
    id: 13,
    nome: "Gabinete Gamer Mancer Hexer, Mid Tower, Vidro Temperado, ARGB, Preto, SGPU-001",
    preco: 299.9,
    imagem: [
      {
        url: "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/g/a/gabinete-gamer-mancer-hexer-sgpu-001_10.jpg",
      },
    ],
    tags: [
      { nome: "Gabinete" },
      { nome: "Gamer" },
      { nome: "Mancer" },
      { nome: "Hexer" },
      { nome: "Mid Tower" },
      { nome: "Vidro Temperado" },
      { nome: "ARGB" },
      { nome: "Preto" },
    ],
    descricao:
      "Gabinete Gamer Mancer Hexer, Mid Tower, Vidro Temperado, ARGB, Preto, SGPU-001",
    categoria: "Gabinete Gamer",
    quantidade: 14,
    empresa: "Mancer",
  },
  {
    id: 14,
    nome: "Headset Gamer Redragon Ares, 7.1, RGB, Microfone, Preto/Vermelho, H120",
    preco: 199.9,
    imagem: [
      {
        url: "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/h/1/h120_1.jpg",
      },
    ],
    tags: [
      { nome: "Headset" },
      { nome: "Gamer" },
      { nome: "Redragon" },
      { nome: "Ares" },
      { nome: "7.1" },
      { nome: "RGB" },
      { nome: "Microfone" },
      { nome: "Preto/Vermelho" },
    ],
    descricao:
      "Headset Gamer Redragon Ares, 7.1, RGB, Microfone, Preto/Vermelho, H120",
    categoria: "Headset Gamer",
    quantidade: 16,
    empresa: "Redragon",
  },
];
