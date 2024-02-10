import fastify from 'fastify'
import { knex } from './databse'

const app = fastify()

app.get('/hello', async () => {
  const tables = await knex('sqlite_schema').select('*')
  console.log('teste')
  return tables
})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('Server running!')
  })
