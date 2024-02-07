import { useState } from "react";
import { Link } from "react-router-dom";
interface IProduct {
    id: string;
    category: string;
    name: string;
    seller: string;
    price: number;
    stock: number;
    ratings: number;
    ratingsCount: number;
    img: string;
    shipping: number;
    quantity: number;
}

const Search = ({ products }: { products: IProduct[] }) => {
    const [searchTerm, setSearchTerm] = useState<string>("");

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="widget widget-search">
            <form className="search-wrapper mb-3">
                <input
                    type="text"
                    name="searcg"
                    placeholder="Search..."
                    defaultValue={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button type="submit">
                    <i className="icofont-search-2"></i>
                </button>
            </form>

            <div>
                {searchTerm && filteredProducts.map(product => (
                    <div className="d-flex gap-3 p-2" key={product.id}>
                        <div>
                            <div className="pro-thumb h-25">
                                <img src={`${product.img}`} alt={`${product.name}`} width={70} className="flex-{grow|shrink}-0" />
                            </div>
                        </div>
                        <div className="product-content">
                            <p>
                                <Link to={`/shop/${product.id}`}>{product.name}</Link>
                            </p>
                            <h6>${product.price}</h6>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Search
