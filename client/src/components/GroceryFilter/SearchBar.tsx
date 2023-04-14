
interface SearchProps {
    handleCheck: () => void
    handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void
    search: string
    checked: boolean
}

export default function SearchBar({ handleCheck, handleSearch, search, checked }: SearchProps) {
    return (
        <div className="search">
            <input type='text' placeholder="search..." value={search} onChange={handleSearch}></input>
            <div className="row">
                <input type='checkbox' name='instock' checked={checked} onChange={handleCheck}></input>
                <label htmlFor="instock">Only show products in stock</label>
            </div>
        </div>
    )
}