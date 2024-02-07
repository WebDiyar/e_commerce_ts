import { FC } from "react";
import Data from "../productsJSON";

type TSelectedCategory = "Men's Sneaker" | "Men's Pants" | "Men's Boot" | 'Bag' | 'Cap' | 'Earphones' | 'Bottle' | "All";
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
interface ShopCategoryProps<TCategory> {
    filterItems: (currentCategory: TCategory) => void;
    setItem: React.Dispatch<React.SetStateAction<IProduct[]>>;
    menuItems: TCategory[];
    setProducts: React.Dispatch<React.SetStateAction<IProduct[]>>;
    selectedCategory: TCategory;
}

const ShopCategory: FC<ShopCategoryProps<TSelectedCategory>> = ({ filterItems, menuItems, setProducts, selectedCategory }) => {
    return (
        <>
            <div className="widget-header">
                <h5 className="ms-2">All Categories</h5>
            </div>
            <div className="">
                <button className={`m-2 ${selectedCategory === 'All' ? 'bg-warning' : ''}`}
                    onClick={() => setProducts(Data)}>
                    All
                </button>

                {menuItems.map((val, id) => {
                    return (
                        <button className={`m-2 ${selectedCategory === val ? 'bg-warning' : ''}`}
                            onClick={() => filterItems(val)}
                            key={id}>
                            {val}
                        </button>
                    );
                })}
            </div>
        </>
    )
}   

export default ShopCategory
