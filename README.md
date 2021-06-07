<h1>API para compra de imóveis 🏠</h1>

- Tecnologias :hammer_and_wrench:
    
      Express
      Typeorm
      Postgres
      Jwt
      Bcryptjs
      Arquitetura solid
      uuid v4
      Typescript
      
- Rotas 🚀
    <h5> Autenticação :zap: </h5>
         
         Cadastro de usuário: /register
         
         -> Método POST
         body: { 
                "name": "Exemplo",
                "cpf": "000.000.000-00",
                "email": "exemplo@gmail.com"
                "password": "hardpassword"
         }
         
         Login de usuário: /login
         
         -> Método POST
         body: {
              "email": "exemplo@gmail.com",
              "password": "hardpassword
         }
    
   <h5> Gerenciar imóveis :zap: </h5>
   
        Adicionar um imóvel: 
        -> Método POST
        body: {
            "cep": "00000-00"
            "number": "0000",
            "complement": "00",
            "value": "16000",
            "bedrooms": "3",
            "avaliable": true
        }
        
        Remover um imóvel:
        ⚠️ o id pode ser obetido ao criar um imóvel
        -> Método POST
        body: {
            "id": "_aqui_vai_o_id_do_imóvel"
        }
   
   <h5> Buscar imóveis :zap: </h5>
   -> Lembre-se de utilizar o token recebido após efetuar o login nos headers!
   
   Exemplo: "Authorization": "jwt_token".
   
   
        Buscar por um imóveis próximos: 
        -> http://localhost:8000/properties/search?cep=00000-00
        
        Ver todos os imóveis:
        -> http://localhost:8000/properties

---
- Como iniciar o projeto?
                 
         1- Em seu terminal digite: # -> git clone https://github.com/Al3xsandro/imoveis-api.git
         Logo após verifique se você tem a última versão estável do nodejs em seu dispositivo.
         
         2- Após os procedimentos, entre na pasta do projeto e use seu gerenciado de pacotes, que pode ser tanto yarn ou npm
         # -> Digite: yarn ou npm
         
         3- Depois de efetuar a instalação das dependências contidas no package.json, configura o arquivo env.example que está na raiz do projeto.
         Dica de hospedagem postgres: https://www.elephantsql.com/

         4- Em seu terminal, após configurar o env.example, digite: yarn typeorm migration:run

         5- Após isso você já pode iniciar o projeto, com o comando # -> yarn start ou npm start
