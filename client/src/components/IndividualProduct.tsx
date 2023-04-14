import { Product } from "../assets/groceries"

interface IndividualProductProp {
    product: Product
}

export default function IndividualProduct({ product }: IndividualProductProp) {
    return <h1>{product.name} {product.price}</h1>
}