const { response } = require('express')
const express = require('express')

const app = express()

app.get('/order', (request, response) => {
  response.send([
    {
      id: 1,
      date: '01-01',
      total: 300,
      products: [
        { id: 1, title: 'product 1', price: 100, quantities: 1 },
        { id: 2, title: 'product 2', price: 200, quantities: 1 },
      ],
    },
  ])
})

app.listen(4000, '0.0.0.0', () => {
  console.log('server started on port 4000')
})