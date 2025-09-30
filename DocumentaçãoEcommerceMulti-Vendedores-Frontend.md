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
   Componente para separar seções com uma linha e o texto "ou".  
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

E-commerce: produtos, cards e imagem

11. ProdutosInfo (tipo + lista)
    Exporta a interface Produtos (id, nome, preco, imagem[], descricao, categoria, quantidade, empresa, tags) e a lista ProdutoInfo.
    Local: src/components/ProdutosInfo.ts.

12. ImagemProduto
    Implementado com framer-motion (AnimatePresence + motion.img) para animação fade + scale.
    Props: imageUrl: string, nome: string.
    Comportamento:
    key={imageUrl} forçando re-mount e animação na troca.
    onLoad seta estado imagemCarregada (pode ser usado para skeletons/placeholder).
    Local: src/components/e-commerce/produto/ImagemProduto.tsx.

13. ConteudoProduto
    Renderiza nome, empresa, preço e tags do produto dentro do card.
    Limita o número de tags exibidas pela constante MAX_VISIVEL.
    Usa formatarPrecoBRL (import formatarPrecoBRL de src/utils/FormatarPrecoBRL).
    Usa tagsStyle de src/styles/variaveisTailwind/produto/Reutilizaveis.
    Mostra +N quando houver mais tags.
    Recebe props: nome, empresa, preco, tags.
    Local: src/components/e-commerce/ConteudoProduto.tsx.

14. CardProduto
    Componente que combina ImagemProduto, ConteudoProduto e BtnCarrinho.
    Faz controle de hover para exibir BtnCarrinho.
    Usa useTrocaDeImagens para troca automática de imagens ao hover (com preload).
    Exibe skeleton enquanto loading === true (componente Skeleton).
    Props: produtos: Produtos.
    Local: src/components/e-commerce/produto/CardProduto.tsx.

Comportamento principal
Mostra um Skeleton enquanto loading === true.
Ao passar o mouse (ou focus por teclado), inicia temporizador (DELAY_INICIO) e, se houver várias imagens, começa a trocar imagens a cada INTERVALO_TROCA.
Ao sair do card volta para a primeira imagem.
Chama adicionarAoCarrinho(produto) quando botão é clicado (essa função pode ser substituída por dispatch/rota de contexto).

15. BtnCarrinho
    Botão circular com ícone ShoppingCart (lucide-react). Props:
    Props:
    adicionarAoCarrinho?: () => void
    visivel?: boolean
    children?: ReactNode
    className?: string
    Local: src/components/e-commerce/BtnCarrinho.tsx.

16. PrecoMinMax
    Componente que encapsula um Slider para selecionar faixa de preço.
    Props:
    faixaDePreco: number[], mudarPreco: (newValues: number[]) => void, min?, max?, pulandoPrecoEm?
    UI:
    Usa Slider (component UI).
    Mostra valores Min/Max formatados (atenção a typo).
    Local: src/components/e-commerce/filtragem/preco/PrecoMinMax.tsx.

Observação crítica: o código usa toLocaleString("pt-Bt") — isso parece um typo. O locale correto é pt-BR. Corrigir para evitar comportamento inesperado de formatação.

17. FiltrarPreco
    Componente com Popover que exibe PrecoMinMax e botões Aplicar / Limpar.
    Props:
    preco: { min?: number; max?: number }
    aplicarFiltroDePreco?: (faixa: { min: number; max: number }) => void
    Estado interno para faixaDePreco (array) e controle do dropdown (isPriceDropdownOpen).
    Comportamento:
    applyPriceFilter chama aplicarFiltroDePreco com {min, max}.
    clearPriceFilter reseta para valores iniciais e chama aplicarFiltroDePreco.
    Local: src/components/e-commerce/filtragem/FiltrarPreco.tsx.

Hooks e utilitários

18. useTrocaDeImagens (hook)
    Hook responsável pela lógica de troca de imagens no hover.
    API: useTrocaDeImagens(imagens: string[]) → retorna { indiceAtual, mouseNoCard, aoEntrar, aoSair }.
    Implementa preload(urls: string[]) que cria new Image() para cada URL (evita piscadas ao trocar).
    Constantes: DELAY_INICIO e INTERVALO_TROCA.
    Local: src/hooks/useTrocaDeImagem.ts.

Nota sobre preload: garante que as imagens estejam no cache do navegador antes de serem exibidas, resultando em troca instantânea e sem flicker.

19. useHandleMudarPagina (hook)
    Hook para controle de mudança de página com scrollTo.
    Assinatura: useHandleMudarPagina(setPaginaAtual, totalPaginas) → retorna handleMudarPagina(novaPagina).
    Faz validação de limites e rolagem suave ao topo.
    Local: src/hooks/useHandleMudarPagina.ts.

20. useLogicaSearchESugestoes (hook)
    Gera valorPesquisado, debouncedLocal (usa useDebouncedValue), sugestoes, abrirContainerDeSugestoes, confirmarPesquisa, onKeyDown (usa useApertarEnterOuEsc).
    Parâmetros configuráveis: pesquisaInicial, numeroDeSugestoesDePesquisa, minCaracteres.
    Local: src/hooks/useLogicaSearchESugestoes.ts.
    Observação: confirmarPesquisa retorna null se menos que minCaracteres.

21. useFiltrarProdutos (hook)
    Filtra produtos por texto, categoria e subcategoria.
    Normaliza strings (remove acentos, lowercase) e realiza comparações Comparação de categoria usa mesmaCategoria que tenta tratar plurais e includes.
    Ordem de filtro: categoria → subcategoria → termo.
    Observação: usa JSON.stringify(subcategoriasAplicada) no array de dependências do useMemo para estabilidade.

22. useDebouncedValue
    Hook para debouncing de um valor (genérico).
    Assinatura: useDebouncedValue<T>(value: T, delay = 300) : T.
    Uso: ideal para inputs de busca antes de disparar filtros/requests.
    Local: src/hooks/useDebouncedValue.ts.
    Observação: limpa o timeout no cleanup do useEffect.

23. useCarousel
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

24. useApertarEnterOuEsc (ApertarEnterOuEsc)
    Utility hook / factory que retorna handler de teclado (teclas Enter / Escape).
    Assinatura/Props:
    confirmarPesquisa: () => void
    fecharDropDown: (abrir: boolean) => void
    preventDefault?: boolean (default true)
    Uso: passado como onKeyDown em inputs para capturar Enter/Escape e controlar dropdowns de sugestão.
    Local: src/hooks/useApertarEnterOuEsc.ts.

Utilitários

25 formatarPrecoBRL
Função utilitária para formatar valores em BRL.
Local: src/utils/formatarPreco.ts.

26. compararArraysIguais
    Compara se dois arrays contêm os mesmos elementos (ignorando ordem).
    Local: src/utils/compararArraysIguais.ts.

27. alternarItemNoArray
    Toggle de item em array (adiciona se não existe, remove se existe).
    Local: src/utils/alternarItemNoArray.ts.

28. Variáveis de classe reutilizáveis
    iconeComInput:
    tagsStyle:
    Local: src/styles/variaveisTailwind/Reutilizaveis.ts

Componentes auxiliares

29. PaginacaoProdutos
    Componente de paginação reutilizável.
    Props: paginaAtual, totalPaginas, onMudarPagina.
    Usa componentes Pagination, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious (UI primitives).
    Lógica para exibir elipses quando necessário.
    Local: src/components/e-commerce/PaginacaoProdutos.tsx.

30. Pagination e Skeleton (utilitários)
    Pagination* (componentes e estilos) para paginação.
    Skeleton simples para placeholders pulsantes.
    Local: src/components/ui/Pagination/* e src/components/ui/Skeleton.tsx.

31. SearchFilterContainer
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

32. SearchESugestoes
    Componente que integra lógica de busca (hook useLogicaSearchESugestoes) com UI (ComponenteSearch + ContainerDeSugestoes dentro de Popover).
    Props:
    pesquisar, setPesquisar, numeroDeSugestoesDePesquisa?, minCaracteres?
    Fluxo:
    O hook expõe valorPesquisado, setValorPesquisado, debouncedLocal, sugestoes, abrirContainerDeSugestoes, etc.
    confirmar() valida via confirmarPesquisa e chama setPesquisar(term) e fecha o dropdown.
    onSugestaoSelecionada define valorPesquisado, confirma e foca o input.
    Local: src/components/e-commerce/filtragem/SearchESugestoes.tsx.

33. ContainerDeSugestoes
    Componente visual que renderiza o dropdown de sugestões (lista de produtos).
    Props:
    debouncedLocal: string
    totalResultados: number
    sugestoes: Produtos[]
    numeroDeSugestoesDePesquisa?: number
    onSelecionarSugestao: (produto) => void
    onConfirmarPesquisa: (valor?: string) => void
    Comportamento:
    Se debouncedLocal.trim().length <= 3 e sugestoes.length === 0 exibe "Nenhum resultado".
    Caso contrário mostra até numeroDeSugestoesDePesquisa resultados com nome, categoria e preço (R$ formatted).
    Usa selectedIndex para hover highlight.
    Local: src/components/e-commerce/filtragem/ContainerDeSugestoes.tsx.

34. ComponenteSearch
    Input de busca com ícone Search, forwardRef para foco externo e atributos ARIA.
    Props:
    valorPesquisado, onChange, onKeyDown?, abrirContainerDeSugestoes: boolean
    Local: src/components/e-commerce/filtragem/ComponenteSearch.tsx.

35. CarouselBtn
    Botão simples para navegação do carrossel (esquerda/direita).
    Props:
    direcao: "esquerda" | "direita"
    onClick: () => void
    esconder?: boolean
    Local: src/components/e-commerce/filtragem/categoria/CarouselBtn.tsx.

36. AplicarOuCancelar
    Componente de ações (botões) reutilizável.
    Props (opcionais):
    cancelar, aplicar, aplicarLabel?, cancelarLabel?, btnAplicarClassName?, btnCancelarClassName?, tamanho?, cancelarVariante?, className?
    Local: src/components/e-commerce/filtragem/AplicarOuCancelar.tsx.

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

39. HeaderInicial
    Cabeçalho simples da aplicação (logo + botões de usuário e suporte).
    Usa ícones User e Headset.
    Local: src/components/e-commerce/HeaderInicial.tsx.

Categorias e Subcategorias

40. SUBCATEGORIAS_MAP
    Mapeamento de categoria principal → lista de subcategorias.
    Estrutura: Record<string, string[]>.
    Exemplos de categorias: Hardware, Periféricos, Smartphones, Notebooks, etc.
    Local: src/components/SubCategoriasProdutos.ts (ou similar).

41. categoriasProdutos
    Lista principal de categorias, começando por "Todos" seguida das categorias eletrônicas.
    Local: src/components/CategoriasProdutos.ts.

Páginas

1. Login  
   Formulário de login com email e senha.  
   Validação com Zod e React Hook Form.  
   Link para recuperação de senha.  
   Botão de login.  
   Separador "ou" e botões de login social.  
   Link para cadastro.  
   Senha nunca é exibida no console.

2. Cadastro  
   Formulário para criar conta: nome, email, senha, confirmar senha.  
   Validação avançada de senha (tamanho, maiúscula, minúscula, número, especial).  
   Checklist visual dos requisitos de senha.
   Borda dos inputs ficam vermelha se o usuário colocar um valor inválido  
   Botão para cadastrar.  
   Separador "ou" e botões de login social.  
   Link para login.  
   Senha e confirmação nunca são exibidas no console.

3. EsqueceuSenha  
   Formulário para recuperação de senha via email.  
   Botão para enviar link de recuperação.  
   Link para voltar ao login.

4. RedefinirSenha
   Página para redefinir senha após o link de recuperação.
   Campos: nova senha e confirmar nova senha.
   Validação com redefinirSenhaSchema.
   Checklist de senha exibido abaixo do campo "Nova senha".
   Botão para confirmar redefinição (com estado de carregando).
   Link para voltar ao login.
   Senha nunca é exibida no console.

5. Inicial (nova página) — página principal do e-commerce (/ ou \* na dev)
   Cabeçalho(HeaderInicial), barra de busca (SearchFilterContainer) e listagem de produtos.
   Lógica atual:
   PRODUTOS_POR_PAGINA = 10.
   Usa useFiltrarProdutos para filtrar por termo, categoria e subcategoria.
   Aplica faixa de preço (recebida do SearchFilterContainer) sobre os produtos filtrados.
   Cálculo de precoMin e precoTotal (min/max do conjunto filtrado).
   useHandleMudarPagina controla navegação e scroll.
   Renderiza CardProduto para produtosPaginaAtual (array slice).
   Local: src/pages/Inicial.tsx.

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
