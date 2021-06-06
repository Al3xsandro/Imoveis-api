import { createConnection } from 'typeorm';

// Initializing connection with ormconfig.ts
createConnection()
    .then(() => {
        console.log('+ Database connected with success!')
    })
    .catch((err) => {
        console.log('An error was occurred! error on connect to database.')
    })