<h1 align="center">Imóveis API 🏠</h1>

## Tecnologias :hammer_and_wrench:
    
   - Express
   - Typeorm
   - Postgres
   - Jwt
   - Bcryptjs
   - uuid v4
   - Typescript
      
## Rotas 🚀
          
   - Lembre-se de utilizar o token recebido após efetuar o login nos headers!
   
       - Exemplo: "Authorization": "jwt_token".
    
            <h5> Autenticação :zap: </h5>

                 Cadastro de usuário: /register

                 -> Método POST
                 body: { 
                        "name": "Exemplo",
                        "cpf": "000.000.000-00",
                        "email": "exemplo@gmail.com"
                        "password": "senha"
                 }

                 Login de usuário: /login

                 -> Método POST
                 body: {
                      "email": "exemplo@gmail.com",
                      "password": "senha"
                 }
    
           <h5> Gerenciar imóveis :zap: </h5>

                Adicionar um imóvel:
                rota: /properties/create

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
                Rota: /properties/remove

                ⚠️ o id pode ser obtido ao criar um imóvel

                -> Método POST

                body: {
                    "id": "_aqui_vai_o_id_do_imóvel"
                }

           <h5>Atualizar um imóvel :hammer_and_wrench:</h5>

                -> rota: /properties/update 

                  -> Método POST
                  -> ⚠️ Você pode enviar a requisição somente com o id e valor que quer alterar!

                Exemplo:

                  body {
                       "id": "id_do_imóvel",
                       "avaliable": true
                  }

                Valores permitidos: 

                  body {
                       id -> id do imóvel
                       cep -> cep do imóvel
                       number -> número do imóvel
                       complement -> complemento do imóvel
                       value -> valor do imóvel
                       bedrooms -> quantidade de quartos
                       avaliable -> true/false | se o imóvel está disponível ou não
                  }

           <h5> Buscar imóveis :zap: </h5>

                Buscar por um imóveis próximos: 
                -> http://localhost:8000/properties/search?cep=00000-00

                Ver todos os imóveis:
                -> http://localhost:8000/properties

---
- Como iniciar o projeto?
                 
     - 1- Em seu terminal digite: # -> git clone https://github.com/Al3xsandro/imoveis-api.git
       - Logo após verifique se você tem a última versão estável do nodejs em seu dispositivo.
         
     - 2- Após os procedimentos, entre na pasta do projeto e use seu gerenciador de pacotes, que pode ser tanto yarn ou npm
          $ `yarn` ou `npm`
         
     - 3- Depois de efetuar a instalação das dependências contidas no package.json, configure o arquivo env.example que está na raiz do projeto.
         - Dica de hospedagem postgres: https://www.elephantsql.com/

     - 4- Em seu terminal, após configurar o env.example: 
        `$ yarn typeorm migration:run`

     - 5- Após isso você já pode iniciar o projeto com o comando 
        `$ yarn start ou npm start`
