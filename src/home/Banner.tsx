import React, { FC, useState } from "react"
import productsData from '../products.json';
import { Link } from "react-router-dom";
import SelectedCategory from "../components/SelectedCategory";
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

const Banner: FC = () => {
    const [searchInput, setSearchInput] = useState<string>('');
    const [filteringProducts, setFilteringProducts] = useState<IProduct[]>(productsData);

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const searchItem = e.target.value;
        setSearchInput(searchItem);

        const filtered = productsData.filter(product => product.name.toLowerCase().includes(searchItem.toLowerCase()));
        setFilteringProducts(filtered);
    }

    return (
        <div className="banner-section style-4">
            <div className="container">
                <div className="banner-content">
                    <h2>Search Your One From <span>Thousand</span> of Products</h2>
                    <form>
                        <SelectedCategory select="all" />
                        <input type="text" name="search" id="search" placeholder="Search your product" value={searchInput}
                        onChange={handleSearch}/> 
                        <button type="submit"><i className="icofont-search"></i></button>        
                    </form>
                    <p>We have the largest collection of products</p>
                    <ul className="lab-ul">
                        {
                            searchInput && filteringProducts.map((product, index) => (
                                <li key={index}><Link to={`/shop/${product.id}`}>{product.name}</Link></li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )  
}

export default Banner
