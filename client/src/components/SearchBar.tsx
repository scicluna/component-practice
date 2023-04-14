


export default function SearchBar() {
    return (
        <div className="search">
            <input type='text' placeholder="search..."></input>
            <div className="row">
                <input type='checkbox' name='instock'></input>
                <label htmlFor="instock">Only show products in stock</label>
            </div>
        </div>
    )
}