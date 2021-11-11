import Product from '../models/product'

// @route  POST api/admin/product
// @desc   Add product
// @access Admin
export const newProduct = async (req, res) => {

    try {
        const product = await Product.create(req.body)

        res.status(201).json({ success: true, product })

    } catch (err) {
        console.log(err.message)
        res.send(err.message)
    }
}

// @route  GET api/products
// @desc   get all products
// @access Public
export const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();

        res.status(200).json({
            success: true,
            count: products.length,
            products
        })

    } catch (error) {
        console.log(error.message)
        res.send({ err: error.message })
    }
}

// @route  GET api/product
// @desc   get Single product
// @access Public
export const getSingleProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.headers.id);

        if (!product) {
            return res.status(404).json({
                success: false,
                message: 'Product Not Found'
            })
        }

        res.status(200).json({
            success: true,
            count: product.length,
            product
        })

    } catch (error) {
        console.log(error.message)
        res.send({ err: error.message })
    }
}

// @route  PUT api/admin/product
// @desc   update Single product
// @access Admin
export const updateProduct = async (req, res) => {
    try {
        let product = await Product.findById(req.headers.id);

        if (!product) {
            return res.status(404).json({
                success: false,
                message: 'Product Not Found'
            })
        }

        product = await Product.findByIdAndUpdate(req.headers.id, req.body, {
            new: true,
        })

        console.log(product)

        res.status(200).json({
            success: true,
            count: product.length,
            product
        })

    } catch (error) {
        console.log(error.message)
        res.send({ err: error.message })
    }
}

// @route  DELETE api/admin/product
// @desc   update Single product
// @access Admin
export const deleteProduct = async (req, res) => {

    try {
        const product = await Product.findById(req.headers.id);

        if (!product) {
            return res.status(404).json({
                success: false,
                message: 'Product Not Found'
            })
        }

        await product.remove();

        res.status(200).json({
            success: true,
            message: 'Product is deleted'
        })

    } catch (error) {
        console.log(error.message)
        res.send({ err: error.message })
    }
}