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
   Botão para cadastrar.  
   Separador "ou" e botões de login social.  
   Link para login.  
   Senha e confirmação nunca são exibidas no console.

3. EsqueceuSenha  
   Formulário para recuperação de senha via email.  
   Botão para enviar link de recuperação.  
   Link para voltar ao login.

Validação

- Schemas de validação criados com Zod e organizados na pasta `src/schemas`.
- Regras de senha centralizadas em `src/schemas/regrasSenha.tsx` e usadas tanto no checklist quanto na validação.
- Mensagens de erro padronizadas e exibidas via componente `InputError`.
- E-mails aceitos apenas com final `.com` ou `.com.br`.

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
