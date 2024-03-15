const productsRouter = require('./routes/products.router')
const express = require('express') 

const app = new express() // creamos una nueva instancia

app.use(express.static(`${__dirname}/../public`))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/api/products', productsRouter)



app.post('/api/products', (req, res) => {
    const product = req.body
    console.log(product)

    product.id = Number.parseInt(Math.random() * 1000)

    product.push(pet)

    res.status(201).json(pet)
})

module.exports = router

app.listen(8080, () => {
    console.log('Servidor listo!')
})