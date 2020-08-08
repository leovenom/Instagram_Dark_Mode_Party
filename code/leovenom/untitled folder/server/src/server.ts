import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(process.env.PORT || 3333)

// GET: buscar ou listar informação
// POST: criar alguma nova informação
// PUT: Atualizar uma info existente
// DELETE: deletetar info existente

// Corpo (Request Body): Dados para criação ou atualização do  registro
// Route Params: Identificar qual recurso para atualizar ou deletar
// Query Params: Paginação, filtros e ordenação


// localhost:3333
// localhost:3333/users rota de usuarios / recurso users
// localhost:3333/contacts rota de contatos / recurso contacts

// SELESCT * FROM users
// knex('users).select('*') - knex js