import { Product } from "../assets/groceries";
import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";
import { useState } from "react";

interface TableProps {
    products: Product[];
}

export default function FilteredProductTable({ products }: TableProps) {
    const [search, setSearch] = useState('');
    const [checked, setChecked] = useState(false);

    function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
        setSearch(e.target.value)
    }

    return (
        <div className="table">
            <SearchBar />
            <ProductTable products={products} />
        </div>
    )


}