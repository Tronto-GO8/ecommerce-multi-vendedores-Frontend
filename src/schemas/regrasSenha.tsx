export const regrasSenha = [
  {
    label: "Pelo menos 8 caracteres",
    teste: (senha: string) => senha.length >= 8,
    regex: /.{8,}/,
  },
  {
    label: "Pelo menos 1 letra minúscula",
    teste: (senha: string) => /[a-z]/.test(senha),
    regex: /[a-z]/,
  },
  {
    label: "Pelo menos 1 letra maiúscula",
    teste: (senha: string) => /[A-Z]/.test(senha),
    regex: /[A-Z]/,
  },
  {
    label: "Pelo menos 1 número",
    teste: (senha: string) => /[0-9]/.test(senha),
    regex: /[0-9]/,
  },
  {
    label: "Pelo menos 1 caractere especial",
    teste: (senha: string) => /[^A-Za-z0-9]/.test(senha),
    regex: /[^A-Za-z0-9]/,
  },
];
