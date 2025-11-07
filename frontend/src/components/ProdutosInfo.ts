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
    id: 2,
    nome: "Monitor Gamer Mancer Horizon Z2B, 21.5 Pol, VA, FHD, 1ms, 100Hz, HDMI/VGA, MCR-HZ2BN21-BL2",
    preco: 799.9,
    imagem: [
      {
        url: "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/m/c/mcr-hz2bn21-bl2101400541003_1.jpg",
      },
      {
        url: "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/m/c/mcr-hz2bn21-bl2101400541004_1.jpg",
      },
      {
        url: "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/m/c/mcr-hz2bn21-bl2101400541001.jpg",
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
    categoria: "Perifericos",
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
    categoria: "Hardware",

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
    categoria: "Hardware",

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
    categoria: "Desktops",

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
    categoria: "Perifericos",

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
    categoria: "Perifericos",

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
    categoria: "Hardware",

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
    categoria: "Hardware",

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
    categoria: "Hardware",

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
    categoria: "Hardware",

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
    categoria: "Hardware",

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
    categoria: "Perifericos",

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
    categoria: "Perifericos",

    quantidade: 16,
    empresa: "Redragon",
  },

  {
    id: 16,
    nome: "Monitor Gamer Mancer Horizon Z2B, 24 Pol, VA, FHD, 1ms, 100Hz, HDMI/VGA, MCR-HZ2BN24-BL2",
    preco: 899.9,
    imagem: [
      {
        url: "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/m/c/mcr-hz2bn24-bl2101400542003_1.jpg",
      },
      {
        url: "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/m/c/mcr-hz2bn24-bl2101400542004_1.jpg",
      },
      {
        url: "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/m/c/mcr-hz2bn24-bl2101400542001.jpg",
      },
    ],
    tags: [
      { nome: "Monitor" },
      { nome: "Gamer" },
      { nome: "Mancer" },
      { nome: "Horizon" },
      { nome: "Z2B" },
      { nome: "24 Pol" },
      { nome: "VA" },
      { nome: "FHD" },
      { nome: "1ms" },
      { nome: "100Hz" },
      { nome: "HDMI/VGA" },
    ],
    descricao:
      "Monitor Gamer Mancer Horizon Z2B, 24 Pol, VA, FHD, 1ms, 100Hz, HDMI/VGA, MCR-HZ2BN24-BL2",
    categoria: "Perifericos",
    quantidade: 10,
    empresa: "Mancer",
  },
  {
    id: 17,
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
    categoria: "Hardware",

    quantidade: 25,
    empresa: "Intel",
  },
  {
    id: 18,
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
    categoria: "Hardware",

    quantidade: 20,
    empresa: "AMD",
  },
  {
    id: 19,
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
    categoria: "Desktops",

    quantidade: 5,
    empresa: "Mancer",
  },
  {
    id: 20,
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
    categoria: "Perifericos",

    quantidade: 30,
    empresa: "Mancer",
  },
  {
    id: 21,
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
    categoria: "Perifericos",

    quantidade: 50,
    empresa: "Mancer",
  },
  {
    id: 38,
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
    categoria: "Hardware",

    quantidade: 12,
    empresa: "ASUS",
  },
  {
    id: 39,
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
    categoria: "Hardware",

    quantidade: 18,
    empresa: "Corsair",
  },
  {
    id: 40,
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
    categoria: "Hardware",

    quantidade: 22,
    empresa: "Kingston",
  },
  {
    id: 41,
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
    categoria: "Hardware",

    quantidade: 14,
    empresa: "Mancer",
  },
  {
    id: 42,
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
    categoria: "Perifericos",
    quantidade: 16,
    empresa: "Redragon",
  },
  {
    id: 44,
    nome: "Monitor Gamer Mancer Horizon Z2B, 24 Pol, VA, FHD, 1ms, 100Hz, HDMI/VGA, MCR-HZ2BN24-BL2",
    preco: 899.9,
    imagem: [
      {
        url: "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/m/c/mcr-hz2bn24-bl2101400542003_1.jpg",
      },
      {
        url: "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/m/c/mcr-hz2bn24-bl2101400542004_1.jpg",
      },
      {
        url: "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/m/c/mcr-hz2bn24-bl2101400542001.jpg",
      },
    ],
    tags: [
      { nome: "Monitor" },
      { nome: "Gamer" },
      { nome: "Mancer" },
      { nome: "Horizon" },
      { nome: "Z2B" },
      { nome: "24 Pol" },
      { nome: "VA" },
      { nome: "FHD" },
      { nome: "1ms" },
      { nome: "100Hz" },
      { nome: "HDMI/VGA" },
    ],
    descricao:
      "Monitor Gamer Mancer Horizon Z2B, 24 Pol, VA, FHD, 1ms, 100Hz, HDMI/VGA, MCR-HZ2BN24-BL2",
    categoria: "Perifericos",
    quantidade: 10,
    empresa: "Mancer",
  },
  {
    id: 45,
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
    categoria: "Hardware",

    quantidade: 25,
    empresa: "Intel",
  },
  {
    id: 46,
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
    categoria: "Hardware",

    quantidade: 20,
    empresa: "AMD",
  },
  {
    id: 47,
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
    categoria: "Desktops",

    quantidade: 5,
    empresa: "Mancer",
  },
  {
    id: 48,
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
    categoria: "Perifericos",

    quantidade: 30,
    empresa: "Mancer",
  },
  {
    id: 49,
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
    categoria: "Periferico",

    quantidade: 50,
    empresa: "Mancer",
  },
  {
    id: 50,
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
    categoria: "Hardware",

    quantidade: 40,
    empresa: "Corsair",
  },
  {
    id: 51,
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
    categoria: "Hardware",

    quantidade: 8,
    empresa: "ASUS",
  },
  {
    id: 52,
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
    categoria: "Hardware",

    quantidade: 12,
    empresa: "ASUS",
  },
  {
    id: 53,
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
    categoria: "Hardware",

    quantidade: 18,
    empresa: "Corsair",
  },
  {
    id: 54,
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
    categoria: "Hardware",

    quantidade: 22,
    empresa: "Kingston",
  },
  {
    id: 55,
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
    categoria: "Hardware",

    quantidade: 14,
    empresa: "Mancer",
  },
  {
    id: 56,
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
    categoria: "Periferico",

    quantidade: 16,
    empresa: "Redragon",
  },

  {
    id: 57,
    nome: 'Samsung Celular Galaxy A16, 128GB + 4GB RAM, Câmera de até 50MP, Tela 6.7", NFC, IP54, Bateria 5000 mAh (Preto)',
    preco: 1199.9,
    imagem: [
      {
        url: "https://m.media-amazon.com/images/I/51vo8kSh4+L._AC_UF480,480_SR480,480_.jpg",
      },
      {
        url: "https://m.media-amazon.com/images/I/51FFU5zqsDL._AC_SL1000_.jpg",
      },
    ],
    descricao:
      'Samsung Celular Galaxy A16, 128GB + 4GB RAM, Câmera de até 50MP, Tela 6.7", NFC, IP54, Bateria 5000 mAh (Preto)',
    categoria: "Smartphone",

    quantidade: 20,
    empresa: "Samsung",
    tags: [
      { nome: "Smartphone" },
      { nome: "Samsung" },
      { nome: "Galaxy A16" },
      { nome: "128GB" },
      { nome: "4GB RAM" },
      { nome: "Câmera de até 50MP" },
      { nome: 'Tela 6.7"' },
      { nome: "NFC" },
      { nome: "IP54" },
      { nome: "Bateria 5000 mAh" },
      { nome: "Preto" },
    ],
  },
  {
    id: 58,
    nome: "Apple iPhone 13 (128 GB) - Meia-noite",
    preco: 4299.9,
    imagem: [
      { url: "https://m.media-amazon.com/images/I/41rfDU6FGqL._AC_SX342_.jpg" },
      { url: "https://m.media-amazon.com/images/I/41iXfIbQOYL._AC_SX342_.jpg" },
    ],
    descricao: "Apple iPhone 13 (128 GB) - Meia-noite",

    categoria: "Smartphone",

    quantidade: 15,
    empresa: "Apple",
    tags: [
      { nome: "Smartphone" },
      { nome: "Apple" },
      { nome: "iPhone 13" },
      { nome: "128GB" },
      { nome: "Meia-noite" },
    ],
  },
  {
    id: 59,
    nome: "SAMSUNG Tablet Android Galaxy Tab A8 10,5 polegadas 32 GB, tela LCD, Wi-Fi, 3 GB RAM, Prata - SM-X205",
    preco: 1599.9,
    imagem: [
      { url: "https://m.media-amazon.com/images/I/61krikJxTmL._AC_SX450_.jpg" },
      {
        url: "https://m.media-amazon.com/images/I/81hG0MytdYL._AC_UF480,480_SR480,480_.jpg",
      },
    ],
    descricao:
      "SAMSUNG Tablet Android Galaxy Tab A8 10,5 polegadas 32 GB, tela LCD, Wi-Fi, 3 GB RAM, Prata - SM-X205",
    categoria: "Tablet",

    quantidade: 10,
    empresa: "Samsung",
    tags: [
      { nome: "Tablet" },
      { nome: "Samsung" },
      { nome: "Galaxy Tab A8" },
      { nome: "10.5 polegadas" },
      { nome: "32GB" },
      { nome: "tela LCD" },
      { nome: "Wi-Fi" },
      { nome: "3GB RAM" },
      { nome: "Prata" },
      { nome: "SM-X205" },
    ],
  },
  {
    id: 60,
    nome: "Apple 2025 iPad (Wi-Fi, 128 GB) - Azul (A16), 10.2 polegadas",
    preco: 3299.9,
    imagem: [
      {
        url: "https://m.media-amazon.com/images/I/511vXoVIcJL._AC_SX342_SY445_QL70_ML2_.jpg",
      },
    ],
    descricao: "Apple 2025 iPad (Wi-Fi, 128 GB) - Azul (A16), 10.2 polegadas",
    categoria: "Tablet",

    quantidade: 8,
    empresa: "Apple",
    tags: [
      { nome: "Tablet" },
      { nome: "Apple" },
      { nome: "iPad" },
      { nome: "2025" },
      { nome: "Wi-Fi" },
      { nome: "128GB" },
      { nome: "Azul (A16)" },
      { nome: "10.2 polegadas" },
    ],
  },
  {
    id: 61,
    nome: "Notebook Dell Inspiron i15-i3100-A15P 15.6 Full HD Intel Core 3-100U 8GB 512GB SSD Win Home Preto Carbono",
    preco: 3499.9,
    imagem: [
      {
        url: "https://m.media-amazon.com/images/I/51HClhLrQ2L._AC_UF480,480_SR480,480_.jpg",
      },
    ],
    descricao:
      "Notebook Dell Inspiron i15-i3100-A15P 15.6 Full HD Intel Core 3-100U 8GB 512GB SSD Win Home Preto Carbono",
    categoria: "Notebook",

    quantidade: 12,
    empresa: "Dell",
    tags: [
      { nome: "Notebook" },
      { nome: "Dell" },
      { nome: "Inspiron" },
      { nome: "i15-i3100-A15P" },
      { nome: "15.6 Full HD" },
      { nome: "Intel Core 3-100U" },
      { nome: "8GB" },
      { nome: "512GB SSD" },
      { nome: "Win Home" },
      { nome: "Preto Carbono" },
    ],
  },
  {
    id: 62,
    nome: "Notebook Lenovo IdeaPad 1 15IRU7 Intel Core i3-1315U 8GB 256GB SSD Linux 15.6 - 83QJS00000 Cloud Grey",
    preco: 3299.9,
    imagem: [
      { url: "https://m.media-amazon.com/images/I/71uv+p19nTL._AC_SY450_.jpg" },
    ],
    descricao:
      "Notebook Lenovo IdeaPad 1 15IRU7 Intel Core i3-1315U 8GB 256GB SSD Linux 15.6 - 83QJS00000 Cloud Grey",
    categoria: "Notebook",

    quantidade: 10,
    empresa: "Lenovo",
    tags: [
      { nome: "Notebook" },
      { nome: "Lenovo" },
      { nome: "IdeaPad 1" },
      { nome: "15IRU7" },
      { nome: "Intel Core i3-1315U" },
      { nome: "8GB" },
      { nome: "256GB SSD" },
      { nome: "Linux" },
      { nome: "15.6" },
      { nome: "83QJS00000" },
      { nome: "Cloud Grey" },
    ],
  },
  {
    id: 63,
    nome: "Impressora Multifuncional HP Deskjet Ink Advantage 2874 Colorida, Wi-Fi, Scanner, USB (6W7G2A)",
    preco: 399.0,
    imagem: [
      { url: "https://m.media-amazon.com/images/I/61D11enKadL._AC_SX679_.jpg" },
    ],
    descricao:
      "Impressora Multifuncional HP Deskjet Ink Advantage 2874 Colorida, Wi-Fi, Scanner, USB (6W7G2A)",
    categoria: "Perifericos",

    quantidade: 10,
    empresa: "HP",
    tags: [
      { nome: "Impressora" },
      { nome: "HP" },
      { nome: "Deskjet Ink Advantage 2874" },
      { nome: "Wi-Fi" },
      { nome: "Scanner" },
      { nome: "USB" },
      { nome: "Jato de Tinta" },
      { nome: "Colorida" },
      { nome: "6W7G2A" },
    ],
  },

  {
    id: 64,
    nome: "Impressora Multifuncional HP Smart Tank 724 Tanque de Tinta Colorida Wi-Fi Scanner Duplex (2G9Q2A)",
    preco: 1215.01,
    imagem: [
      { url: "https://m.media-amazon.com/images/I/61f+M0ZPXWL._AC_SX679_.jpg" },
    ],
    descricao:
      "Impressora Multifuncional HP Smart Tank 724 Tanque de Tinta Colorida Wi-Fi Scanner Duplex (2G9Q2A)",
    categoria: "Perifericos",

    quantidade: 10,
    empresa: "HP",
    tags: [
      { nome: "Impressora" },
      { nome: "HP" },
      { nome: "Smart Tank 724" },
      { nome: "Tanque de Tinta" },
      { nome: "Wi-Fi" },
      { nome: "Scanner" },
      { nome: "Duplex" },
      { nome: "Colorida" },
      { nome: "2G9Q2A" },
    ],
  },

  {
    id: 65,
    nome: "Water Cooler Kalkan Delta 360mm - Wireless ARGB - KLK00051",
    preco: 450.0,
    imagem: [
      {
        url: "https://m.media-amazon.com/images/I/51P7onEWqfL._AC_SY300_SX300_QL70_ML2_.jpg",
      },
    ],
    descricao: "Water Cooler Kalkan Delta 360mm - Wireless ARGB - KLK00051",
    categoria: "Hardware",

    quantidade: 10,
    empresa: "Kalkan",
    tags: [
      { nome: "Water Cooler" },
      { nome: "Kalkan" },
      { nome: "Delta 360mm" },
      { nome: "ARGB" },
      { nome: "KLK00051" },
      { nome: "Refrigeração" },
    ],
  },

  {
    id: 66,
    nome: "Water Cooler Gamer Kalkan Alpha 360 ARGB com display Preto - KLK00048",
    preco: 399.0,
    imagem: [
      {
        url: "https://m.media-amazon.com/images/I/510T9ho7UwL._AC_SY300_SX300_QL70_ML2_.jpg",
      },
    ],
    descricao:
      "Water Cooler Gamer Kalkan Alpha 360 ARGB com display Preto - KLK00048",
    categoria: "Hardware",

    quantidade: 10,
    empresa: "Kalkan",
    tags: [
      { nome: "Water Cooler" },
      { nome: "Kalkan" },
      { nome: "Alpha 360" },
      { nome: "ARGB" },
      { nome: "Display" },
      { nome: "Gamer" },
      { nome: "KLK00048" },
    ],
  },

  {
    id: 67,
    nome: "Webcam Full HD Logitech Brio 100 com Microfone Integrado e Proteção de Privacidade - Grafite",
    preco: 239.99,
    imagem: [
      { url: "https://m.media-amazon.com/images/I/61nTmIUB0LL._AC_SY355_.jpg" },
    ],
    descricao:
      "Webcam Full HD Logitech Brio 100 com Microfone Integrado e Proteção de Privacidade - Grafite",
    categoria: "Perifericos",

    quantidade: 10,
    empresa: "Logitech",
    tags: [
      { nome: "Webcam" },
      { nome: "Logitech" },
      { nome: "Brio 100" },
      { nome: "Full HD" },
      { nome: "Microfone Integrado" },
      { nome: "Privacidade" },
      { nome: "Grafite" },
    ],
  },

  {
    id: 68,
    nome: "Webcam Full HD Logitech C920s com Microfone Embutido e Proteção de Privacidade - 1080p",
    preco: 421.99,
    imagem: [
      {
        url: "https://m.media-amazon.com/images/I/61SCZyiMSNL._AC_SY300_SX300_QL70_ML2_.jpg",
      },
    ],
    descricao:
      "Webcam Full HD Logitech C920s com Microfone Embutido e Proteção de Privacidade - 1080p",
    categoria: "Perifericos",

    quantidade: 10,
    empresa: "Logitech",
    tags: [
      { nome: "Webcam" },
      { nome: "Logitech" },
      { nome: "C920s" },
      { nome: "Full HD" },
      { nome: "1080p" },
      { nome: "Microfone" },
      { nome: "Privacidade" },
    ],
  },

  {
    id: 69,
    nome: "Scanner de Mesa Brother ADS1350W",
    preco: 1799.9,
    imagem: [
      { url: "https://m.media-amazon.com/images/I/61qPHe0+U7L._AC_SY450_.jpg" },
    ],
    descricao: "Scanner de Mesa Brother ADS1350W",
    categoria: "Perifericos",

    quantidade: 10,
    empresa: "Brother",
    tags: [
      { nome: "Scanner" },
      { nome: "Brother" },
      { nome: "ADS1350W" },
      { nome: "Mesa" },
      { nome: "Profissional" },
    ],
  },

  {
    id: 70,
    nome: "Scanner Canon P-240 - Preto",
    preco: 1881.0,
    imagem: [
      { url: "https://m.media-amazon.com/images/I/51n-tNX71LL._AC_SY355_.jpg" },
    ],
    descricao: "Scanner Canon P-240 - Preto",
    categoria: "Perifericos",

    quantidade: 10,
    empresa: "Canon",
    tags: [
      { nome: "Scanner" },
      { nome: "Canon" },
      { nome: "P-240" },
      { nome: "Preto" },
    ],
  },

  {
    id: 71,
    nome: "Smartphone Samsung Galaxy Z Fold6 512GB 5G, 12GB RAM, Tela 7.60 - Azul",
    preco: 6799.0,
    imagem: [
      { url: "https://m.media-amazon.com/images/I/51As-V8OzrL._AC_SY450_.jpg" },
    ],
    descricao:
      "Smartphone Samsung Galaxy Z Fold6 512GB 5G, 12GB RAM, Tela 7.60 - Azul",
    categoria: "Smartphones",

    quantidade: 10,
    empresa: "Samsung",
    tags: [
      { nome: "Smartphone" },
      { nome: "Samsung" },
      { nome: "Galaxy Z Fold6" },
      { nome: "512GB" },
      { nome: "12GB RAM" },
      { nome: "5G" },
      { nome: "Tela 7.6" },
      { nome: "Azul" },
    ],
  },

  {
    id: 72,
    nome: "Apple iPhone 17 Pro (256 GB) - Azul intenso",
    preco: 10348.99,
    imagem: [
      {
        url: "https://m.media-amazon.com/images/I/41uMcSPiYAL._AC_SX342_SY445_QL70_ML2_.jpg",
      },
    ],
    descricao: "Apple iPhone 17 Pro (256 GB) - Azul intenso",
    categoria: "Smartphones",

    quantidade: 10,
    empresa: "Apple",
    tags: [
      { nome: "Smartphone" },
      { nome: "Apple" },
      { nome: "iPhone 17 Pro" },
      { nome: "256 GB" },
      { nome: "Azul intenso" },
    ],
  },

  {
    id: 73,
    nome: 'Tablet Lenovo Tab M9 Octa-Core 4GB 64GB Wi-Fi, Câmera 8MP, 9" WVA (1340x800) - Prata',
    preco: 702.05,
    imagem: [
      { url: "https://m.media-amazon.com/images/I/61dxj9a7NHL._AC_SX679_.jpg" },
    ],
    descricao:
      'Tablet Lenovo Tab M9 Octa-Core 4GB 64GB Wi-Fi, Câmera 8MP, 9" WVA (1340x800) - Prata',
    categoria: "Tablets",

    quantidade: 10,
    empresa: "Lenovo",
    tags: [
      { nome: "Tablet" },
      { nome: "Lenovo" },
      { nome: "Tab M9" },
      { nome: "4GB" },
      { nome: "64GB" },
      { nome: "Wi-Fi" },
      { nome: "8MP" },
      { nome: '9"' },
      { nome: "Prata" },
    ],
  },

  {
    id: 74,
    nome: 'Apple iPad Pro Wi-Fi 11" (512 GB) - Cinzento sideral',
    preco: 14399.0,
    imagem: [
      {
        url: "https://m.media-amazon.com/images/I/61nshfaBV9L._AC_SX342_SY445_QL70_ML2_.jpg",
      },
    ],
    descricao: 'Apple iPad Pro Wi-Fi 11" (512 GB) - Cinzento sideral',
    categoria: "Tablets",

    quantidade: 10,
    empresa: "Apple",
    tags: [
      { nome: "Tablet" },
      { nome: "Apple" },
      { nome: "iPad Pro" },
      { nome: '11"' },
      { nome: "512 GB" },
      { nome: "Wi-Fi" },
      { nome: "Cinzento sideral" },
    ],
  },

  {
    id: 75,
    nome: 'Mini PC Slim Intel Core i7 3ª Geração | 16GB RAM | SSD 512GB NVMe | Windows 11 Pro | Monitor 19" + Teclado e Mouse sem Fio',
    preco: 1599.9,
    imagem: [
      { url: "https://m.media-amazon.com/images/I/61M2g4WJY6L._AC_SX679_.jpg" },
    ],
    descricao:
      'Mini PC Slim Intel Core i7 3ª Geração | 16GB RAM | SSD 512GB NVMe | Windows 11 Pro | Monitor 19" + Teclado e Mouse sem Fio',
    categoria: "Desktops",

    quantidade: 10,
    empresa: "Generic",
    tags: [
      { nome: "Mini PC" },
      { nome: "Intel Core i7 3ª Geração" },
      { nome: "16GB RAM" },
      { nome: "512GB SSD" },
      { nome: "Windows 11 Pro" },
      { nome: 'Monitor 19"' },
    ],
  },

  {
    id: 76,
    nome: 'Computador Completo Intel Core i5 16GB SSD 512GB Monitor 19" Pc Hdmi Teclado e Mouse - Strong Tech',
    preco: 1281.02,
    imagem: [
      { url: "https://m.media-amazon.com/images/I/61UfMcwoepL._AC_SY450_.jpg" },
    ],
    descricao:
      'Computador Completo Intel Core i5 16GB SSD 512GB Monitor 19" Pc Hdmi Teclado e Mouse - Strong Tech',
    categoria: "Desktops",

    quantidade: 10,
    empresa: "Strong Tech",
    tags: [
      { nome: "Computador" },
      { nome: "Strong Tech" },
      { nome: "Intel Core i5" },
      { nome: "16GB RAM" },
      { nome: "512GB SSD" },
      { nome: 'Monitor 19"' },
    ],
  },

  {
    id: 77,
    nome: "Carregador Turbo Compatível com Samsung Galaxy, Motorola, iPhone 15/16 - Fonte 25W Ultra, Tipo C + USB (acompanha cabo) - Black",
    preco: 59.5,
    imagem: [
      { url: "https://m.media-amazon.com/images/I/51fTkXeAypL._AC_SY450_.jpg" },
    ],
    descricao:
      "Carregador Turbo Compatível com Samsung Galaxy, Motorola, iPhone 15/16 - Fonte 25W Ultra, Tipo C + USB (acompanha cabo) - Black",
    categoria: "Acessórios",

    quantidade: 10,
    empresa: "Generic",
    tags: [
      { nome: "Carregador" },
      { nome: "Turbo" },
      { nome: "25W" },
      { nome: "Tipo C" },
      { nome: "USB" },
      { nome: "Compatível" },
    ],
  },

  {
    id: 78,
    nome: "Carregador Super Turbo 50W Ultra Rápido Tipo C e USB + Cabo Tipo C",
    preco: 39.89,
    imagem: [
      { url: "https://m.media-amazon.com/images/I/51N6UJWbyLL._AC_SY450_.jpg" },
    ],
    descricao:
      "Carregador Super Turbo 50W Ultra Rápido Tipo C e USB + Cabo Tipo C",
    categoria: "Acessórios",

    quantidade: 10,
    empresa: "Generic",
    tags: [
      { nome: "Carregador" },
      { nome: "50W" },
      { nome: "Tipo C" },
      { nome: "USB" },
      { nome: "Cabo incluso" },
      { nome: "Super Turbo" },
    ],
  },

  {
    id: 79,
    nome: "Fone de Ouvido Bluetooth com Microfone e Cancelamento de Ruído Ativo - 4Leader (à Prova D'água) - Preto",
    preco: 139.9,
    imagem: [
      { url: "https://m.media-amazon.com/images/I/61qMLLZH1hL._AC_SY606_.jpg" },
    ],
    descricao:
      "Fone de Ouvido Bluetooth com Microfone e Cancelamento de Ruído Ativo - 4Leader (à Prova D'água) - Preto",
    categoria: "Acessórios",

    quantidade: 10,
    empresa: "4Leader",
    tags: [
      { nome: "Fone de Ouvido" },
      { nome: "Bluetooth" },
      { nome: "4Leader" },
      { nome: "Cancelamento de Ruído" },
      { nome: "À prova d'água" },
      { nome: "Microfone" },
      { nome: "Sem Fio" },
    ],
  },

  {
    id: 80,
    nome: "PHILIPS Fone de Ouvido com Microfone TAUE101BK/00 - Com fio, Intra-auricular, Preto",
    preco: 26.0,
    imagem: [
      { url: "https://m.media-amazon.com/images/I/51+W7A115SL._AC_SY450_.jpg" },
    ],
    descricao:
      "PHILIPS Fone de Ouvido com Microfone TAUE101BK/00 - Com fio, Intra-auricular, Preto",
    categoria: "Acessórios",

    quantidade: 10,
    empresa: "Philips",
    tags: [
      { nome: "Fone de Ouvido" },
      { nome: "Philips" },
      { nome: "TAUE101BK/00" },
      { nome: "Com fio" },
      { nome: "Intra-auricular" },
      { nome: "Preto" },
    ],
  },
];
