import nc from 'next-connect'
import connectDB from '../../../config/db';

import { newProduct, updateProduct, deleteProduct } from '../../../controllers/productController'

const handler = nc();

connectDB();

handler.post(newProduct)
handler.put(updateProduct)
handler.delete(deleteProduct)

export default handler