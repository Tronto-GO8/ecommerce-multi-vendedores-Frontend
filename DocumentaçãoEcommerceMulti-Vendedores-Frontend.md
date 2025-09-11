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

11. ProdutosInfo (tipo + lista)
    Exporta a interface Produtos (id, nome, preco, imagem[], descricao, categoria, quantidade, empresa, tags) e a lista ProdutoInfo.
    Local: src/components/ProdutosInfo.ts.

12. ImagemProduto
    Componente responsável por renderizar a imagem do produto.
    Placeholder quando não há imagem.
    loading="lazy".
    Overlay sutil (bg-black/5).
    Implementado com Framer Motion para fade + leve zoom na troca de imagens.
    Recebe imageUrl: string e nome: string.
    Notas: usa key={imageUrl} + AnimatePresence para animar entrada/saída.
    Local: src/components/e-commerce/ImagemProduto.tsx.

13. ConteudoProduto
    Renderiza nome, empresa, preço e tags do produto dentro do card.
    Limita o número de tags exibidas pela constante MAX_VISIVEL.
    Mostra +N quando houver mais tags.
    Recebe props: nome, empresa, preco, tags.
    Local: src/components/e-commerce/ConteudoProduto.tsx.

14. CardProduto
    Componente que combina ImagemProduto, ConteudoProduto e BtnCarrinho.
    Faz controle de hover para exibir BtnCarrinho.
    Usa useTrocaDeImagens para troca automática de imagens ao hover (com preload).
    Exibe skeleton enquanto loading === true (componente Skeleton).
    Props: produtos: Produtos.
    Local: src/components/e-commerce/CardProduto.tsx.

Comportamento principal
Mostra um Skeleton enquanto loading === true.
Ao passar o mouse (ou focus por teclado), inicia temporizador (DELAY_INICIO) e, se houver várias imagens, começa a trocar imagens a cada INTERVALO_TROCA.
Ao sair do card volta para a primeira imagem.
Chama adicionarAoCarrinho(produto) quando botão é clicado (essa função pode ser substituída por dispatch/rota de contexto).

15. BtnCarrinho
    Botão circular com ícone ShoppingCart (lucide-react). Props:
    adicionarAoCarrinho?: () => void
    visivel?: boolean
    children?: ReactNode
    className?: string

16. useTrocaDeImagens (hook)
    Hook responsável pela lógica de troca de imagens no hover.
    API: useTrocaDeImagens(imagens: string[]) → retorna { indiceAtual, mouseNoCard, aoEntrar, aoSair }.
    Implementa preload(urls: string[]) que cria new Image() para cada URL (evita piscadas ao trocar).
    Constantes: DELAY_INICIO e INTERVALO_TROCA.
    Local: src/hooks/useTrocaDeImagens.ts.

Nota sobre preload: garante que as imagens estejam no cache do navegador antes de serem exibidas, resultando em troca instantânea e sem flicker.

17. useHandleMudarPagina (hook)
    Hook para controle de mudança de página com scrollTo.
    Assinatura: useHandleMudarPagina(setPaginaAtual, totalPaginas) → retorna handleMudarPagina(novaPagina).
    Faz validação de limites e rolagem suave ao topo.
    Local: src/hooks/useHandleMudarPagina.ts.

18. PaginacaoProdutos
    Componente de paginação reutilizável.
    Props: paginaAtual, totalPaginas, onMudarPagina.
    Usa componentes Pagination, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious (UI primitives).
    Lógica para exibir elipses quando necessário.
    Local: src/components/e-commerce/PaginacaoProdutos.tsx.

19. Pagination e Skeleton (utilitários)
    Pagination* (componentes e estilos) para paginação.
    Skeleton simples para placeholders pulsantes.
    Local: src/components/ui/Pagination/* e src/components/ui/Skeleton.tsx.

20. SearchFilterContainer
    Container com input de busca e botão de filtro.
    Input com ícone Search e botão com Filter (lucide-react).
    Local: src/components/e-commerce/SearchFilterContainer.tsx.

Páginas (comportamento)

1. Login
   Campos: email, senha.
   Validação: Zod via schemas.
   Links: esqueceu senha, cadastro.
   Social login e separador ou.
   Segurança: senhas NUNCA são logadas no console.

2. Cadastro
   Campos: nome, email, senha, confirmar senha.
   Validação: regras de senha centralizadas (regrasSenha.tsx), confirmação deve bater com senha.
   Checklist visual (CheckListSenha).
   Inputs invalidos recebem borda vermelha.
   EsqueceuSenha
   Formulário: enviar e‑mail para recuperação.
   Botão para enviar link de recuperação.
   Link de voltar para login.

3. RedefinirSenha
   Campos: nova senha, confirmar nova senha.
   Validação: redefinirSenhaSchema (garante equivalência entre campos).
   Checklist exibido abaixo de "Nova senha".
   Botão com estado de carregamento.
   Senhas NUNCA logadas no console.

4. Inicial (nova página)
   Página principal do e‑commerce (atualmente usada como wildcard \* no App.tsx para facilitar desenvolvimento).
   Cabeçalho simples (logo, botões de usuário e suporte).
   Barra de busca e botão de filtro.
   Card contendo a listagem de ProdutoInfo.map(...) que renderiza CardProduto.
   Botão fixo de carrinho (ex.: BtnCarrinho com texto e contagem futuro).

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
   Cabeçalho simples (HeaderInicial), barra de busca (SearchFilterContainer) e listagem de produtos.
   Grid que renderiza CardProduto via ProdutoInfo.map(...).
   Paginação via PaginacaoProdutos.
   Botão fixo de carrinho (BtnCarrinho) com texto e contagem futura.
   Local: src/pages/Inicial.tsx.

Exemplo de comportamento (arquivo atual)
PRODUTOS_POR_PAGINA = 10.
useHandleMudarPagina controla mudança de página e scroll suave.
Paginação calculada: totalPaginas = Math.ceil(ProdutoInfo.length / PRODUTOS_POR_PAGINA).

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
