import { Elysia } from 'elysia'

const app = new Elysia().get('/', () => {
  return 'Teste'
})

app.listen(3333, () => {
  console.log('HTTP server running')
})
