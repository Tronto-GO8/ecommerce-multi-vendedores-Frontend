# Techventory — Sistema de E-commerce e Gestão Empresarial
Trabalho de Conclusão de Curso da iniciativa +PraTi, desenvolvido por um grupo de 10 alunos.  
O Techventory é uma loja de e-commerce moderna com área administrativa completa, voltada para o gerenciamento de pedidos, usuários e estoque, além de oferecer um chat 
com inteligência artificial para suporte automatizado.

---

## Visão Geral
O projeto Techventory tem como objetivo criar uma solução web que una a experiência de compra online com a gestão empresarial eficiente, permitindo que funcionários, técnicos 
e gerentes administrem produtos, estoques, pedidos e usuários dentro de uma interface moderna e intuitiva.

O sistema foi projetado para oferecer:

- Loja virtual completa com carrinho e pagamento simulado  
- Chat de assistência com IA para suporte ao cliente (em desenvolvimento)  
- Controle de estoque e pedidos em tempo real  
- Gestão de usuários e permissões (funcionários, técnicos e gerentes)  
- Painel administrativo responsivo e de fácil utilização  

---

## Arquitetura do Projeto
O Techventory segue a arquitetura cliente-servidor, dividida em três camadas principais: **Frontend**, **Backend** e **Banco de Dados**.  
Essa separação garante maior organização, facilidade de manutenção e escalabilidade do sistema.

---

## 📂 Estrutura de Pastas

/techventory/
├── frontend/                  # Aplicação React (interface do usuário)
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── README.md
│
├── backend/                   # API REST desenvolvida em Spring Boot
│   ├── src/
│   │   ├── main/java/com/techventory/backend/
│   │   │   ├── controller/
│   │   │   ├── model/
│   │   │   ├── repository/
│   │   │   └── service/
│   │   └── resources/
│   │       └── application.properties
│   ├── pom.xml
│   └── README.md
│
├── docs/                      # Documentação técnica e diagramas
│   ├── arquitetura.md
│   ├── banco_de_dados.md
│   ├── api_endpoints.md
│   └── wireframes.png
│
├── .gitignore
└── README.md                  # Este arquivo

---

## ⚙️ Tecnologias Utilizadas

### Frontend
- React + TypeScript  
- TailwindCSS para estilização  
- Axios para comunicação com o backend  

### Backend
- Java 21  
- Spring Boot 3.x  
- Spring Web (API REST)  
- Spring Data JPA  
- PostgreSQL Driver  

### Banco de Dados
- PostgreSQL 16  
- Modelagem relacional com chaves primárias e estrangeiras  

---

## 🚀 Como Executar o Projeto

### Pré-requisitos
- Java 21 ou superior instalado  
- Node.js 18+  
- PostgreSQL em execução na porta padrão (5432)  

### Rodando o Backend
cd backend
./mvnw spring-boot:run

### Rodando o Frontend
cd frontend
npm install
npm run dev

---

## 👥 Equipe de Desenvolvimento
Gustavo Jeziel Silveira Fogaça |	Líder de Projeto, Frontend e Backend Developer
Yasmim Prado Pinto | Frontend Developer
Kevin Barbosa Braga | Frontend Developer 

│
├── .gitignore
└── README.md # (este arquivo)
