const { Router } = require('express')

const router = Router()

const products = [
    { id: 100, name: 'bicicleta', descripcion: 'carbono' , price: '10000' },
    { id: 200, name: 'casco',     descripcion: 'white'   , price: '1000' },
    { id: 300, name: 'tricota',   descripcion: 'amarilla', price: '100' }
]

router.get('/', (req, res) => {
    res.status(200).json(products)
})

router.post('/', (req, res) => {
    const product = req.body
    product.id = Number.parseInt(Math.random() * 1000)

    users.push(product)

    res.status(201).json(product)
})

module.exports = router