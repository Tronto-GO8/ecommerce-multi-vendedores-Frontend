Componentes Reutilizáveis

1. InputEmail  
   Campo de email com ícone.  
   Usa variável de estilo `iconeComInput` para evitar repetição de classes Tailwind.  
   Aceita props do React Hook Form para integração com validação.

2. InputSenha  
   Campo de senha com ícone de cadeado e botão para mostrar/ocultar senha.  
   Usa variável de estilo `iconeComInput` para ícone.  
   Recebe o texto do label como prop.  
   Integra checklist visual de requisitos de senha via componente `CheckListSenha`.

3. InputNome  
   Campo de nome com ícone.  
   Padronizado para uso com React Hook Form e validação.

4. InputError  
   Componente para exibir mensagens de erro de validação abaixo dos inputs.  
   Padroniza a estilização dos erros em todos os formulários.

5. LoginSocial  
   Botões para login com Google e Facebook.  
   Ícones SVG personalizados.

6. OuSeparador  
   Componente para separar seções com uma linha ou juntamente com o texto "ou".  
   Usado tanto no Login quanto no Cadastro.

7. TextoLinkAlternativo  
   Componente para exibir texto alternativo com link (ex: "Já tem uma conta? Entrar").  
   Evita duplicação de código nos formulários.

8. CheckListSenha  
   Checklist visual dos requisitos de senha.  
   Cada item fica verde conforme o usuário atende ao requisito.

9. InputReutilizavel
   Base genérica para inputs.
   Aceita ícone à esquerda e rightElement (ex.: botão de mostrar senha).
   Responsável pela padronização dos estilos (iconeComInput).
   Usado internamente em `InputEmail`, `InputSenha`, `InputNome`.

10. FormCardHeader
    Cabeçalho reutilizável para páginas de autenticação.
    Recebe título (titulo), descrição opcional (descricao) e link de voltar (linkDeVoltar).
    Permite centralizar o texto quando não há link (textoCentralizado).
    Padroniza os headers de páginas como Login, Cadastro, Esqueceu Senha e Redefinir Senha.
    Páginas

Header Inicial

1. HeaderInicial
   Cabeçalho simples da aplicação (logo + botões de usuário e suporte).
   Usa ícone Headset.
   Local: src/components/e-commerce/HeaderInicial.tsx.

2. Menu de Perfil (Dropdown)
   Dropdown com opções da conta (Informações, Pedidos, Chamados, Configurações) usando primitives do DropdownMenu.
   Usa a variável `iconeComParagrafo` para alinhar ícones e texto.
   Local: src/components/ui/ProfileDropdown.tsx (ou similar).
   Observação: considerar internacionalização/rotulagem aria para acessibilidade.

E-commerce: produtos, cards e imagem

1. ProdutosInfo (tipo + lista)
   Exporta a interface Produtos (id, nome, preco, imagem[], descricao, categoria, quantidade, empresa, tags) e a lista ProdutoInfo.
   Local: src/components/ProdutosInfo.ts.

2. ImagemProduto
   Implementado com framer-motion (AnimatePresence + motion.img) para animação fade + scale.
   Props: imageUrl: string, nome: string.
   Comportamento:
   key={imageUrl} forçando re-mount e animação na troca.
   onLoad seta estado imagemCarregada (pode ser usado para skeletons/placeholder).
   Local: src/components/e-commerce/produto/ImagemProduto.tsx.

3. ConteudoProduto
   Renderiza nome, empresa, preço e tags do produto dentro do card.
   Limita o número de tags exibidas pela constante MAX_VISIVEL.
   Usa formatarPrecoBRL (import formatarPrecoBRL de src/utils/FormatarPrecoBRL).
   Usa tagsStyle de src/styles/variaveisTailwind/produto/Reutilizaveis.
   Mostra +N quando houver mais tags.
   Recebe props: nome, empresa, preco, tags.
   Local: src/components/e-commerce/produto/ConteudoProduto.tsx.

4. CardProduto
   Componente que combina ImagemProduto, ConteudoProduto e BtnCarrinho.
   Faz controle de hover para exibir BtnCarrinho.
   Usa useTrocaDeImagens para troca automática de imagens ao hover (com preload).
   Usa useCarrinho para adicionar ao carrinho via adicionarNoCarrinho(produto, 1)
   Exibe skeleton enquanto loading === true (componente Skeleton).
   Props: produtos: Produtos.
   Local: src/components/e-commerce/produto/CardProduto.tsx.

5. ContainerProduto
   Componente que recebe produtos: Produtos[] e mapeia para LazyCardProduto.
   Exibe mensagem de "Nenhum produto encontrado" se não houver itens.
   Local: src/components/e-commerce/produto/ContainerProduto.tsx.

6. LazyCardProduto
   Componente que combina:
   useComponenteVisivel() (IntersectionObserver ref, jaCarregado)
   useLoading(skeletonDelay, jaCarregado) (flag estaCarregando)
   Exibe SkeletonProduto até o card ficar visível e após o delay exibe CardProduto.
   Props:
   produto: Produtos
   skeletonTagCount?: number
   skeletonDelay?: number
   Local: src/components/e-commerce/produto/LazyCardProduto.tsx.
   Observação: melhora performance e experiência ao fazer lazy-loading e skeletons.

7. SkeletonProduto
   Skeleton visual do card (placeholder pulsante) usado enquanto o componente real carrega.
   Props: tagCount?: number.
   Local: src/components/e-commerce/produto/SkeletonProduto.tsx.
   Observação: estilizado com Card e Skeleton primitives; manter contraste e tamanhos compatíveis com o card real.

Comportamento principal
Mostra um Skeleton enquanto loading === true.
Ao passar o mouse (ou focus por teclado), inicia temporizador (DELAY_INICIO) e, se houver várias imagens, começa a trocar imagens a cada INTERVALO_TROCA.
Ao sair do card volta para a primeira imagem.
Chama adicionarAoCarrinho(produto) quando botão é clicado (essa função pode ser substituída por dispatch/rota de contexto).

5. BtnCarrinho
   Botão circular com ícone ShoppingCart (lucide-react). Props:
   Props:
   adicionarAoCarrinho?: () => void
   visivel?: boolean
   children?: ReactNode
   className?: string
   mostrarTotal?: boolean
   Usa useCarrinho() (contexto) para ler totalAdicionado.
   Local: src/components/e-commerce/BtnCarrinho.tsx.
   Observação: botão é acessível (type="button"), e mostra badge com totalAdicionado quando mostrarTotal é true.

6. PrecoMinMax
   Componente que encapsula um Slider para selecionar faixa de preço.
   Props:
   faixaDePreco: number[], mudarPreco: (newValues: number[]) => void, min?, max?, pulandoPrecoEm?
   UI:
   Usa Slider (component UI).
   Mostra valores Min/Max formatados (atenção a typo).
   Local: src/components/e-commerce/filtragem/preco/PrecoMinMax.tsx.

Observação crítica: o código usa toLocaleString("pt-Bt") — isso parece um typo. O locale correto é pt-BR. Corrigir para evitar comportamento inesperado de formatação.

7. FiltrarPreco
   Componente com Popover que exibe PrecoMinMax e botões Aplicar / Limpar.
   Props:
   preco: { min?: number; max?: number }
   aplicarFiltroDePreco?: (faixa: { min: number; max: number }) => void
   Estado interno para faixaDePreco (array) e controle do dropdown (isPriceDropdownOpen).
   Comportamento:
   applyPriceFilter chama aplicarFiltroDePreco com {min, max}.
   clearPriceFilter reseta para valores iniciais e chama aplicarFiltroDePreco.
   Local: src/components/e-commerce/filtragem/FiltrarPreco.tsx.

Hooks

1. useTrocaDeImagens (hook)
   Hook responsável pela lógica de troca de imagens no hover.
   API: useTrocaDeImagens(imagens: string[]) → retorna { indiceAtual, mouseNoCard, aoEntrar, aoSair }.
   Implementa preload(urls: string[]) que cria new Image() para cada URL (evita piscadas ao trocar).
   Constantes: DELAY_INICIO e INTERVALO_TROCA.
   Local: src/hooks/useTrocaDeImagem.ts.

Nota sobre preload: garante que as imagens estejam no cache do navegador antes de serem exibidas, resultando em troca instantânea e sem flicker.

2. useHandleMudarPagina (hook)
   Hook para controle de mudança de página com scrollTo.
   Assinatura: useHandleMudarPagina(setPaginaAtual, totalPaginas) → retorna handleMudarPagina(novaPagina).
   Faz validação de limites e rolagem suave ao topo.
   Local: src/hooks/useHandleMudarPagina.ts.

3. useLogicaSearchESugestoes (hook)
   Gera valorPesquisado, debouncedLocal (usa useDebouncedValue), sugestoes, aoAbrirSugestaoContinuarFocadoNoInput, confirmarPesquisa, onKeyDown (usa useApertarEnterOuEsc).
   Parâmetros configuráveis: pesquisaInicial, numeroDeSugestoesDePesquisa, minCaracteres.
   Local: src/hooks/useLogicaSearchESugestoes.ts.
   Observação: confirmarPesquisa retorna null se menos que minCaracteres.

4. useFiltrarProdutos (hook)
   Filtra produtos por texto, categoria e subcategoria.
   Normaliza strings (remove acentos, lowercase) e realiza comparações Comparação de categoria usa mesmaCategoria que tenta tratar plurais e includes.
   Ordem de filtro: categoria → subcategoria → termo.
   Observação: usa JSON.stringify(subcategoriasAplicada) no array de dependências do useMemo para estabilidade.

5. useDebouncedValue
   Hook para debouncing de um valor (genérico).
   Assinatura: useDebouncedValue<T>(value: T, delay = 300) : T.
   Uso: ideal para inputs de busca antes de disparar filtros/requests.
   Local: src/hooks/useDebouncedValue.ts.
   Observação: limpa o timeout no cleanup do useEffect.

6. useCarousel
   Hook que mede itens dentro de uma “trilha” e determina quantos itens cabem na viewport, offsets e controles.

"API" retornada:
refViewport, refTrilha, refPrimeiroItem — refs para elementos DOM.
indiceInicio — índice do primeiro item visível.
passoPx — offset em pixels para aplicar ao transformar a trilha.
indiceMaxInicio — índice máximo possível para start.
irAnterior, irProximo — funções para navegar.
mostrarControles — booleano se totalItens > qtdVisiveis.
Comportamento:
Usa useLayoutEffect para medir larguras e gap, calcula offsets cumulativos.
Observa resize via ResizeObserver e window resize.
Garante que ao menos 1 item seja considerado visível mesmo se maior que viewport.
Local: src/hooks/useCarousel.ts.
Observação: ideal para carrosséis que precisam de cálculo preciso de offsets (suporta gaps, margens).

7. useApertarEnterOuEsc (ApertarEnterOuEsc)
   Utility hook / factory que retorna handler de teclado (teclas Enter / Escape).
   Assinatura/Props:
   confirmarPesquisa: () => void
   fecharDropDown: (abrir: boolean) => void
   preventDefault?: boolean (default true)
   Uso: passado como onKeyDown em inputs para capturar Enter/Escape e controlar dropdowns de sugestão.
   Local: src/hooks/useApertarEnterOuEsc.ts.

8. useModoMobile
   Detecta tela <= breakpoint.
   Implementação segura para SSR.
   Local: src/hooks/useModoMobile.ts.

Utilitários

1. formatarPrecoBRL
   Função utilitária para formatar valores em BRL.
   Local: src/utils/formatarPreco.ts.

2. compararArraysIguais
   Compara se dois arrays contêm os mesmos elementos (ignorando ordem).
   Local: src/utils/compararArraysIguais.ts.

3. alternarItemNoArray
   Toggle de item em array (adiciona se não existe, remove se existe).
   Local: src/utils/alternarItemNoArray.ts.

4. Variáveis de classe reutilizáveis
   iconeComInput:
   tagsStyle:
   Local: src/styles/variaveisTailwind/Reutilizaveis.ts

Context

1. Carrinho (Contexto)
   Contexto CarrinhoProvider que expõe:
   carrinho: Record<number, number> (produtoId → quantidade)
   totalAdicionado: number (soma das quantidades)
   adicionarNoCarrinho(produto: Produtos, quantidade?: number)
   definirQuantidade(produtoId: number, quantidade: number)
   removerDoCarrinho(produtoId: number)
   limparCarrinho()
   Persistência: grava / lê localStorage (STORAGE_KEY = 'carrinho_v1').
   Hook useCarrinho() para consumir o contexto.
   Local: src/contexts/ProdutoCarrinhoContext.tsx.

Componentes auxiliares

1. PaginacaoProdutos
   Componente de paginação reutilizável.
   Props: paginaAtual, totalPaginas, onMudarPagina.
   Usa componentes Pagination, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious (UI primitives).
   Lógica para exibir elipses quando necessário.
   Local: src/components/e-commerce/PaginacaoProdutos.tsx.

2. Pagination e Skeleton (utilitários)
   Pagination* (componentes e estilos) para paginação.
   Skeleton simples para placeholders pulsantes.
   Local: src/components/ui/Pagination/* e src/components/ui/Skeleton.tsx.

3. SearchFilterContainer
   Componente que agrega:
   SearchESugestoes (campo de busca + sugestões)
   BtnCategoria (abre CarouselCategorias)
   FiltrarPreco (popover de faixa de preço)
   Botões Aplicar / Cancelar quando há filtros alterados
   Props:
   pesquisar: string
   setPesquisar: (valor: string) => void
   aoAplicar?: (filtrosAplicados: Filtros) => void
   faixaDePreco: { min?: number; max?: number }
   Estado interno:
   mostrarCarousel, filtros, aplicado (flag para saber se filtro atual foi aplicado)
   Comportamento:
   aoAtualizarFiltros compara subcategorias com compararArraysIguais e marca aplicado como false se algo mudou.
   aplicar() fecha o carousel e chama aoAplicar(filtros).
   cancelar() reseta filtros e chama aoAplicar com vazio.
   precoAplicado(range) aplica faixa de preço imediatamente (passado para aoAplicar).
   Local: src/components/e-commerce/filtragem/SearchFilterContainer.tsx.

4. SearchESugestoes
   Componente que integra lógica de busca (hook useLogicaSearchESugestoes) com UI (ComponenteSearch + ContainerDeSugestoes dentro de Popover).
   Props:
   pesquisar, setPesquisar, numeroDeSugestoesDePesquisa?, minCaracteres?
   Fluxo:
   O hook expõe valorPesquisado, setValorPesquisado, debouncedLocal, sugestoes, abrirContainerDeSugestoes, etc.
   confirmar() valida via confirmarPesquisa e chama setPesquisar(term) e fecha o dropdown.
   onSugestaoSelecionada define valorPesquisado, confirma e foca o input.
   Local: src/components/e-commerce/filtragem/SearchESugestoes.tsx.

5. ContainerDeSugestoes
   Componente visual que renderiza o dropdown de sugestões (lista de produtos).
   Props:
   debouncedLocal: string
   totalResultados: number
   sugestoes: Produtos[]
   numeroDeSugestoesDePesquisa?: number
   onSelecionarSugestao: (produto) => void
   onConfirmarPesquisa: (valor?: string) => void
   Comportamento:
   Mostra PesquisaPorResultado no topo com o termo e contagem (botão que confirma a pesquisa).
   Se debouncedLocal.trim().length <= 3 e sugestoes.length === 0 exibe "Nenhum resultado".
   Caso contrário, renderiza `SugestoesDeResultados` com a lista de produtos.
   Local: src/components/e-commerce/filtragem/pesquisa/ContainerDeSugestoes.tsx.

6. ComponenteSearch
   Input de busca com ícone Search, forwardRef para foco externo e atributos ARIA.
   Props:
   valorPesquisado, onChange, onKeyDown?, abrirContainerDeSugestoes: boolean
   Local: src/components/e-commerce/filtragem/pesquisa/ComponenteSearch.tsx.

7. CarouselBtn
   Botão simples para navegação do carrossel (esquerda/direita).
   Props:
   direcao: "esquerda" | "direita"
   onClick: () => void
   esconder?: boolean
   Local: src/components/e-commerce/filtragem/categoria/CarouselBtn.tsx.

8. AplicarOuCancelar
   Componente de ações (botões) reutilizável.
   Props (opcionais):
   cancelar, aplicar, aplicarLabel?, cancelarLabel?, btnAplicarClassName?, btnCancelarClassName?, tamanho?, cancelarVariante?, className?
   Local: src/components/e-commerce/filtragem/AplicarOuCancelar.tsx.

9. PesquisaPorResultado
   Cabeçalho do popover que exibe o termo pesquisado e um botão que confirma a pesquisa (aciona a navegação ou o filtro principal).
   Props (PesquisaPorResultadoProps):
   onConfirmarPesquisa: () => void — função disparada ao clicar no header.
   debouncedLocal: string — termo exibido.
   totalResultados: number — contagem exibida.
   Comportamento / UI:
   Botão ocupando toda a largura com aria-label descritivo (Pesquisar por ${debouncedLocal}).
   Mostra texto auxiliar “Pesquisar por resultado (resultado: X)” e o termo destacado.
   Local sugerido: src/components/e-commerce/filtragem/pesquisa/PesquisaPorResultado.tsx.

10. SearchESugestoes
    Componente que integra UI + lógica (hook useLogicaSearchESugestoes) e orquestra o Popover com ComponenteSearch + ContainerDeSugestoes. Fornece UX padrão para campo de busca com sugestões.
    Props (SearchESugestoesProps):
    pesquisar: string — estado externo do termo pesquisado (passado do pai).
    setPesquisar: (valor: string) => void — setter para atualizar termo no pai.
    numeroDeSugestoesDePesquisa?: number — quantas sugestões mostrar.
    minCaracteres?: number — número mínimo de caracteres para abrir sugestões (default 3).
    Comportamento / Integração:
    Usa useLogicaSearchESugestoes que expõe:
    valorPesquisado, setValorPesquisado, debouncedLocal, refDeInputParaFocar,
    totalResultados, sugestoes, abrirContainerDeSugestoes, aoAbrirSugestaoContinuarFocadoNoInput,
    confirmarPesquisa, onKeyDown, setAbrirContainerDeSugestoes.
    PopoverTrigger usa ComponenteSearch (forwardRef), que recebe onKeyDown que combina useApertarEnterOuEsc e confirmação de Enter.
    ContainerDeSugestoes recebe os dados (debouncedLocal, sugestoes, etc.) e callbacks.
    Ao selecionar sugestão: onSugestaoSelecionada define o valor e confirma (chama setPesquisar(term)).
    Local sugerido: src/components/e-commerce/filtragem/pesquisa/SearchESugestoes.tsx.

Filtros, Carrossel de Categorias e Busca por Sugestões

33. SubCategoriaCarousel
    Componente visual simples que renderiza botões para subcategorias.
    Props:
    subcategorias: string[]
    selecionadas: string[]
    toggle: (sub: string) => void
    Comportamento:
    Cada subcategoria vira um Button; se selecionadas.includes(sub) o botão recebe variante default (ativo).
    Chama toggle(sub) ao clicar.
    Local sugerido: src/components/e-commerce/filtragem/categoria/SubCategoriaCarousel.tsx.

34. CarouselCategorias (Container do carrossel de categorias/subcategorias)
    Componente que mostra um carrossel horizontal de categorias ou subcategorias, com controles de navegação.
    Props:
    filters: { categoria: string | null; subcategorias: string[] }
    voltarCategoria: () => void
    atualizarFiltros: (filters) => void
    Comportamento:
    Se filters.categoria estiver preenchida, entra no modo subcategorias (items = SUBCATEGORIAS_MAP[filters.categoria]), caso contrário mostra categoriasProdutos.
    Usa useCarousel(itens.length) para cálculo de offsets e visibilidade.
    Seleção de categoria principal (apenas 1) via aoSelecionarCategoria.
    Alternância de subcategorias (múltiplas) via aoAlterarSubcategoria (usa alternarItemNoArray).
    Renderiza botões em uma trilha com transform: translateX(-passoPx) para o deslocamento.
    Local: src/components/e-commerce/filtragem/categoria/CarouselCategorias.tsx.

35. BtnCategoria
    Botão que abre o carousel de categorias e exibe um badge com a quantidade selecionada.
    Props:
    mostrarCarousel: () => void
    quantidadeSelecionada?: number
    Local: src/components/e-commerce/filtragem/categoria/BtnCategoria.tsx.
    Observações: badge só aparece se quantidadeSelecionada > 0.

Paginação e navegação (componentes)

36. PaginasNumeradas
    Componente responsável por decidir se exibir um número de página ou uma elipse (...).
    Props:
    numeroPagina: number
    paginaAtual: number
    totalPaginas: number
    onMudarPagina: (novaPagina: number) => void
    Lógica:
    Sempre mostra: primeira, última, atual e adjacentes (ex.: 1 ... 4 5 [6] 7 8 ... 20).
    Mostra elipses quando o número está a duas posições da atual.
    Local: src/components/e-commerce/paginacao/PaginasNumeradas.tsx.

37. PaginacaoProdutos
    Componente de paginação para a listagem de produtos.
    Props:
    paginaAtual: number
    totalPaginas: number
    onMudarPagina: (novaPagina: number) => void
    Composição:
    Usa MudarPagina (botões prev/next) e PaginasNumeradas.
    Retorna null se totalPaginas <= 1.
    Local: src/components/e-commerce/paginacao/PaginacaoProdutos.tsx.

38. MudarPagina
    Wrapper para PaginationPrevious / PaginationNext com lógica de desativação e classes comuns.
    Props:
    desativarSe: boolean
    onMudarPagina: () => void
    tipoDeBotao: "previous" | "next"
    Local: src/components/e-commerce/paginacao/MudarPagina.tsx.

Categorias e Subcategorias

40. SUBCATEGORIAS_MAP
    Mapeamento de categoria principal → lista de subcategorias.
    Estrutura: Record<string, string[]>.
    Exemplos de categorias: Hardware, Periféricos, Smartphones, Notebooks, etc.
    Local: src/components/SubCategoriasProdutos.ts (ou similar).

41. categoriasProdutos
    Lista principal de categorias, começando por "Todos" seguida das categorias eletrônicas.
    Local: src/components/CategoriasProdutos.ts.

Carrinho

1. SumarioCard aceita prop mobile?: boolean e items?: Produtos[].
   Mobile behavior:
   Quando mobile === true, começa compacto (componente CompactoMobileHeader), mostra total + botão continuar e botão expandir.
   Ao expandir, exibe subtotal/frete/total e botões (Continuar / Limpar — onClear chama limparCarrinho()).

2. CompactoMobileHeader:
   Local: src/components/carrinho/CompactoMobileHeader.tsx.
   Props: total: number, onCheckout?: () => void, expandido?: () => void.

3. ProdutosCarrinho
   Exibe imagem, nome, empresa, controle de quantidade (±) e ação de remover. Exibe também o preço total do item (preço × quantidade).
   Arquivo: src/components/carrinho/ProdutosCarrinho.tsx
   Props
   produtoTeste: Produtos & { quantidade?: number } — objeto do catálogo com campo quantidade (opcional, default 1).
   onIncrease?: () => void — handler chamado ao clicar em +.
   onDecrease?: () => void — handler chamado ao clicar em -.
   onRemove?: () => void — handler chamado ao clicar em remover (lixeira).
   Comportamento / UI
   Imagem principal: pega produtoTeste.imagem[0].url quando disponível; fallback para https://via.placeholder.com/600x400?text=No+Image.
   onError do <img> troca para o fallback se a URL falhar.
   A área principal mostra:
   Título (truncado se longo)
   Empresa (se existir)
   Preço unitário formatado via formatarPrecoBRL
   Na barra inferior:
   Botões - e + (component Button do design system) que chamam onDecrease / onIncrease.
   Exibição da quantidade (valor padrão 1).
   Preço total do item = preco \* quantidade (formatado).
   Botão remover (ícone Trash2) chama onRemove.
   Acessibilidade / Observações
   Botões devem ter aria-label quando necessário (opcional, pode ser adicionado).
   Use handlers do contexto (adicionarNoCarrinho, definirQuantidade, removerDoCarrinho) ao usar o componente na página de carrinho.
   Local de import sugerido: import ProdutosCarrinho from "@/components/carrinho/ProdutosCarrinho";

4. CarrinhoVazio
   Propósito: tela / placeholder mostrado quando o carrinho não possui itens.
   Arquivo: src/components/carrinho/CarrinhoVazio.tsx
   Comportamento / UI
   Ícone grande ShoppingBag (lucide-react).
   Mensagens:
   Título: “Seu carrinho está vazio”
   Texto auxiliar: “Adicione produtos para começar suas compras”
   Botão Continuar comprando que leva o usuário para a listagem de produtos (/app/inicial) via Link do react-router-dom.
   Estilização: centralizado verticalmente, fundo escuro, texto claro — mantém consistência com o layout do carrinho.
   Acessibilidade / Observações
   Botão usa Button do design system; ícone decorativo com contraste reduzido.
   Ideal para ser retornado quando items.length === 0 em pages/Carrinho.tsx.
   Local de import sugerido: import CarrinhoVazio from "@/components/carrinho/CarrinhoVazio";
   Páginas

5. Login  
   Formulário de login com email e senha.  
   Validação com Zod e React Hook Form.  
   Link para recuperação de senha.  
   Botão de login.  
   Separador "ou" e botões de login social.  
   Link para cadastro.  
   Senha nunca é exibida no console.

6. Cadastro  
   Formulário para criar conta: nome, email, senha, confirmar senha.  
   Validação avançada de senha (tamanho, maiúscula, minúscula, número, especial).  
   Checklist visual dos requisitos de senha.
   Borda dos inputs ficam vermelha se o usuário colocar um valor inválido  
   Botão para cadastrar.  
   Separador "ou" e botões de login social.  
   Link para login.  
   Senha e confirmação nunca são exibidas no console.

7. EsqueceuSenha  
   Formulário para recuperação de senha via email.  
   Botão para enviar link de recuperação.  
   Link para voltar ao login.

8. RedefinirSenha
   Página para redefinir senha após o link de recuperação.
   Campos: nova senha e confirmar nova senha.
   Validação com redefinirSenhaSchema.
   Checklist de senha exibido abaixo do campo "Nova senha".
   Botão para confirmar redefinição (com estado de carregando).
   Link para voltar ao login.
   Senha nunca é exibida no console.

9. Inicial (nova página) — página principal do e-commerce (/ ou \* na dev)
   Cabeçalho(HeaderInicial), barra de busca (SearchFilterContainer) e listagem de produtos.
   Lógica atual:
   PRODUTOS_POR_PAGINA = 10.
   Usa useFiltrarProdutos para filtrar por termo, categoria e subcategoria.
   Aplica faixa de preço (recebida do SearchFilterContainer) sobre os produtos filtrados.
   Usa useFiltradosPorPreco para cálculo de precoMin e precoTotal (min/max do conjunto filtrado).
   useHandleMudarPagina controla navegação e scroll.
   Renderiza CardProduto para produtosPaginaAtual (array slice).
   Local: src/pages/Inicial.tsx.

10. Carrinho
    /app/carrinho
    Usa useCarrinho() para montar items (mapeia carrinho id→produto via ProdutoInfo).
    Layout:
    Lista de produtos com scrollbar (overflow-y-auto + custom-scrollbar + max-h-[70vh]).
    SumarioCard sticky lateral no desktop.
    SumarioCard fixo bottom (compact/expandível) no mobile; CompactoMobileHeader em src/components/carrinho/CompactoMobileHeader.tsx.
    Local: src/pages/Carrinho.tsx.

Validação

- Schemas de validação criados com Zod e organizados na pasta `src/schemas`.
- Regras de senha centralizadas em `src/schemas/regrasSenha.tsx` e usadas tanto no checklist quanto na validação.
- Mensagens de erro padronizadas e exibidas via componente `InputError`.
- E-mails aceitos apenas com final `.com` ou `.com.br`.
- `redefinirSenhaSchema` garante que novaSenha e confirmarSenha sejam iguais.

Estilização

- Utilização de Tailwind CSS para estilização rápida e responsiva.
- Variáveis de classe Tailwind centralizadas em `src/styles/variaveisTailwind/Reutilizaveis.ts` para evitar repetição.
- Cards centralizados na tela, com bordas arredondadas e sombra.
- Fundo escuro (`bg-[#303030]` ou `bg-black`) e textos claros.
- Ícones alinhados com campos de input usando classes reutilizáveis.

Rotas
Definidas em `App.tsx` usando `HashRouter` do `react-router-dom`.
Rotas principais:

- `/login` — Página de login
- `/cadastro` — Página de cadastro
- `/esqueceusenha` — Página de recuperação de senha
- `/` — Redireciona para login
- `*` — Redireciona para login
