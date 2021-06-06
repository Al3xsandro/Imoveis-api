import dotenv from 'dotenv';

dotenv.config()

export default {
    "type": "postgres",
    "host": process.env.DB_HOST,
    "port": 5432 || process.env.PORT,
    "username": process.env.DB_USER,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_DABASE,
    "migrations": ["./src/database/migrations/**.ts"],
    "entities": ["./src/entities/**.ts"],
    "cli": {
        "entitiesDir": "./src/entities/**.ts",
        "migrationsDir": "./src/database/migrations"
    }
}