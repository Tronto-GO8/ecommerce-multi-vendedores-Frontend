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
    exporta a interface Produtos com objetos de produto (id, nome, preco, imagem[], descricao, categoria, quantidade, empresa, tags).

12. ImagemProduto
    Componente responsável por renderizar a imagem do produto
    Placeholder quando não há imagem
    lazy loading
    overlay sutil.

13. ConteudoProduto
    Renderiza nome, empresa, preço e tags do produto dentro do card.
    Limita o número de tags exibidas (constante MAX_VISIVEL)
    Mostra "+N" quando houver mais tags.

14. CardProduto
    Componente que combina ImagemProduto, ConteudoProduto e BtnCarrinho. Faz controle de loading (skeleton) e hover para exibir botão de adicionar ao carrinho.

Comportamento:
Mostra um skeleton (componente Skeleton) enquanto loading === true.
Ao passar o mouse exibe BtnCarrinho no canto superior direito.
Chama adicionarAoCarrinho(produto) quando botão é clicado (função temporária pode ser substituída por dispatch/rota de contexto).

15. BtnCarrinho
    Botão circular com ícone ShoppingCart (lucide-react). Props:
    adicionarAoCarrinho?: () => void
    visivel?: boolean
    children?: ReactNode
    className?: string

16 Pagination e Skeleton
Pagination e utilitários (PaginationContent, PaginationLink, etc.) para paginação reutilizável.
Skeleton simples para placeholders pulsantes.

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
