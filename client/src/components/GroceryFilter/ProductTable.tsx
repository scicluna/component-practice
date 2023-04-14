import { Product } from "../../assets/GroceryFilter/groceries"
import ProductTableCategory from "./ProductTableCategory";
import IndividualProduct from "./IndividualProduct";

interface ProductTableProps {
    products: Product[];
}

export default function ProductTable({ products }: ProductTableProps) {

    const categories = Array.from(new Set(products.map(product => product.category)))
    return (
        <>
            <div className="row headers">
                <h1>Name</h1>
                <h1>Price</h1>
            </div>
            {categories.map(category => (
                <>
                    <ProductTableCategory key={category} category={category} />
                    {
                        products.filter(product => product.category === category).map(product =>
                            <IndividualProduct key={product.name} product={product} />
                        )
                    }
                </>
            ))}
        </>
    )
}