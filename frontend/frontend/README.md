# ShareTools

ShareTools é uma plataforma de compartilhamento de ferramentas entre vizinhos, permitindo que usuários possam registrar, emprestar e encontrar ferramentas de forma simples e eficiente. O projeto é desenvolvido com uma arquitetura Full Stack utilizando Java, Spring Boot, SQL Server no backend e React com Tailwind CSS no frontend.

## 📋 Funcionalidades

* Cadastro de usuários com autenticação JWT.
* Login seguro e gerenciamento de sessões.
* Cadastro, listagem e gerenciamento de ferramentas.
* Histórico e status de empréstimos.
* Integração com SQL Server para armazenamento de dados.
* Design responsivo para melhor experiência em dispositivos móveis.

## 🚀 Tecnologias Utilizadas

### Backend:

* Java
* Spring Boot
* Spring Data JPA
* SQL Server
* JSON Web Tokens (JWT)
* REST APIs

### Frontend:

* React
* TypeScript
* Tailwind CSS
* React Router
* Axios

## 📁 Estrutura do Projeto

```
ShareTools/
├── backend/
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/
│   │   │   │   └── com/
│   │   │   │       └── sharetools/
│   │   │   │           ├── controller/
│   │   │   │           ├── model/
│   │   │   │           ├── repository/
│   │   │   │           └── service/
│   │   │   └── resources/
│   │   │       └── application.properties
│   │   └── test/
│   └── pom.xml
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.tsx
│   │   ├── index.tsx
│   │   └── api/
│   └── package.json
│
└── README.md
```

## 🛠️ Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas:

* Node.js
* Java 17+
* SQL Server
* IDE (IntelliJ para backend, VS Code para frontend)

## 🔧 Configuração do Backend

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/ShareTools.git
   cd ShareTools/backend
   ```

2. Configure o arquivo `application.properties` com as credenciais do seu banco de dados SQL Server:

   ```properties
   spring.datasource.url=jdbc:sqlserver://localhost:1433;databaseName=sharetools
   spring.datasource.username=seu-usuario
   spring.datasource.password=sua-senha
   spring.jpa.hibernate.ddl-auto=update
   spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.SQLServerDialect
   server.port=8080
   ```

3. Compile e inicie o servidor:

   ```bash
   mvn clean install
   mvn spring-boot:run
   ```

## 💻 Configuração do Frontend

1. Acesse a pasta do frontend:

   ```bash
   cd ../frontend
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Inicie o servidor do frontend:

   ```bash
   npm run dev
   ```

## 📝 Uso

* Acesse a aplicação no navegador em `http://localhost:3000` para usar o frontend.
* O backend estará disponível em `http://localhost:8080`.

## 📈 Melhorias Futuras

* Notificações para usuários sobre devoluções pendentes.
* Sistema de avaliação e feedback de ferramentas.
* Integração com sistemas de pagamento para aluguel.
* Melhorias na experiência do usuário com animações e microinterações.

## 🤝 Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para enviar issues e pull requests.

## 📄 Licença

Este projeto está licenciado sob a MIT License - veja o arquivo LICENSE para mais detalhes.
