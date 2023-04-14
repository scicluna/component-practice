import { Product } from "../assets/groceries"

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