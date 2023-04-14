import { Product } from "../../assets/GroceryFilter/groceries"

interface ProductTableCategoryProps {
    category: string
}

export default function ProductTableCategory({ category }: ProductTableCategoryProps) {


    return (
        <>
            <div className="row">
                <h2>{category}</h2>
            </div>
        </>
    )
}