Componentes Reutilizáveis
1. InputEmail
Campo de email com ícone.
Usa variável de estilo iconeComInput para evitar repetição de classes Tailwind.
2. InputSenha
Campo de senha com ícone de cadeado e botão para mostrar/ocultar senha.
Usa variável de estilo iconeComInput para ícone.
Recebe o texto do label como children.
3. LoginSocial
Botões para login com Google e Facebook.
Ícones SVG personalizados.
4. OuSeparador
Componente para separar seções com uma linha e o texto "ou".
Usado tanto no Login quanto no Cadastro.
5. TextoLinkAlternativo
Componente para exibir texto alternativo com link (ex: "Já tem uma conta? Entrar").
Evita duplicação de código nos formulários.

Páginas
1. Login
Formulário de login com email e senha.
Link para recuperação de senha.
Botão de login.
Separador "ou" e botões de login social.
Link para cadastro.
2. Cadastro
Formulário para criar conta: nome, email, senha, confirmar senha.
Botão para cadastrar.
Separador "ou" e botões de login social.
Link para login.
3. EsqueceuSenha
Formulário para recuperação de senha via email.
Botão para enviar link de recuperação.
Link para voltar ao login.

Estilização
Utilização de Tailwind CSS para estilização rápida e responsiva.
Variáveis de classe Tailwind centralizadas em src/styles/variaveisTailwind/Reutilizaveis.ts para evitar repetição.
Cards centralizados na tela, com bordas arredondadas e sombra.
Fundo escuro (bg-[#303030] ou bg-black) e textos claros.
Ícones alinhados com campos de input usando classes reutilizáveis.

Rotas
Definidas em App.tsx usando HashRouter do react-router-dom.
Rotas principais:
/login — Página de login
/cadastro — Página de cadastro
/esqueceusenha — Página de recuperação de senha
/ — Redireciona para login
* — Redireciona para login
