import { Product } from "../../assets/GroceryFilter/groceries";
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

    function handleCheck() {
        setChecked(checked ? false : true)
    }

    const filteredProducts = products.filter(product => product.name.toUpperCase().includes(search.toUpperCase()))

    return (
        <div className="table">
            <SearchBar handleSearch={handleSearch} handleCheck={handleCheck} search={search} checked={checked} />
            <ProductTable products={filteredProducts} />
        </div>
    )


}