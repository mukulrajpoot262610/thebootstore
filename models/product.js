import mongoose from 'mongoose'

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter product name.'],
        trim: true,
    },
    price: {
        type: Number,
        required: [true, 'Please enter product price.'],
        default: 0
    },
    salePrice: {
        type: Number,
        required: [true, 'Please enter product saleprice.'],
        default: 0
    },
    description: {
        type: String,
        required: [true, 'Please enter product description.'],
    },
    ratings: {
        type: String,
        required: [true, 'Please enter product description.'],
    },
    images: [
        {
            public_id: { type: String, required: true },
            url: { type: String, required: true },
        }
    ],
    category: {
        type: String,
        required: [true, 'Please select category for this product.'],
        enum: {
            values: [
                'Running',
                'Sneakers',
                'Sports'
            ],
            message: 'Please select correct category for product'
        }
    },
    seller: {
        type: String,
        required: [true, 'Please enter product seller.'],
    },
    stock: {
        type: Number,
        required: [true, 'Please enter product stock.'],
        default: 0
    },
    numOfReviews: {
        type: Number,
        default: 0
    },
    reviews: [
        {
            name: { type: String },
            rating: { type: Number },
            comment: { type: String },
        }
    ]
},
    { timestamps: true }
)

export default mongoose.models.Product || mongoose.model('Product', ProductSchema)