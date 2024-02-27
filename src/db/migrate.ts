import postgres from 'postgres'
import { drizzle } from 'drizzle-orm/postgres-js'
import { migrate } from 'drizzle-orm/postgres-js/migrator'

const connectionString = 'postgresql://docker:docker@localhost:5432/pizzashop'

const connection = postgres(connectionString, { max: 1 })
const db = drizzle(connection);

await migrate(db, { migrationsFolder: 'drizzle' });

await connection.end();

process.exit()
