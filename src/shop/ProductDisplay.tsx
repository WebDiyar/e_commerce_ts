import { FC, useState } from "react"
import { IProduct } from "../productsJSON"
import { Link } from "react-router-dom"

interface IPropsProductDisplay {
    item: IProduct,
    key?: string
}

interface IProductDisplaying {
    id: string;
    img: string;
    name: string;
    price: number;
    quantity: number;
    size: string;
    color: string;
    coupon: string;
}

const ProductDisplay: FC<IPropsProductDisplay> = ({ item }) => {
    const { img, id, price, name, quantity, seller } = item;
    const [preQuantity, setPreQuantity] = useState(quantity);
    const [coupon, setCoupon] = useState<string>("");
    const [size, setSize] = useState<string>("Select Size");
    const [color, setColor] = useState<string>("Select Color");

    const handleSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSize(e.target.value)
    }
    
    const handleColorChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setColor(e.target.value)
    }

    const handleDecrease = () => {
        if (preQuantity > 1) {
            setPreQuantity(preQuantity => preQuantity - 1);
        }
    }

    const handleIncrease = () => {
        setPreQuantity(preQuantity => preQuantity + 1);
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const product = {
            id: id,
            img: img,
            name: name,
            price: price,
            quantity: preQuantity,
            size: size,
            color: color,
            coupon: coupon,
        };

        const existingCart = JSON.parse(localStorage.getItem("cart") || "[]") as IProductDisplaying[];
        const existingProductIndex = existingCart.findIndex(item => item.id === id);

        if (existingProductIndex !== -1) {
            existingCart[existingProductIndex].quantity += preQuantity
        } else {
            existingCart.push(product);
        }

        localStorage.setItem("cart", JSON.stringify(existingCart));

        //reset
        setPreQuantity(1);
        setSize("Select Size");
        setColor("Select Color");
        setCoupon("");

    }

    return (
        <div>
            <div>
                <h4>{name}</h4>
                <p className="rating">
                    <i className="icofont-star"></i>
                    <i className="icofont-star"></i>
                    <i className="icofont-star"></i>
                    <i className="icofont-star"></i>
                    <i className="icofont-star"></i>
                    (3 review)
                </p>
                <h4>${price}</h4>
                <h6>{seller}</h6>
                <p>Energistia an deliver atactica metrcs after avsionary Apropria trnsition enterpris an sources applications emerging psd template.</p>
            </div>

            <div>
                <form onSubmit={handleSubmit}>

                    <div className="select-product size">
                        <select value={size} onChange={handleSizeChange}>
                            <option>Select Size</option>
                            <option>SM</option>
                            <option>MD</option>
                            <option>LG</option>
                            <option>XL</option>
                            <option>XXL</option>
                        </select>
                        <i className="icofont-rounded-down"></i>
                    </div>

                    <div className="select-product color">
                        <select value={color} onChange={handleColorChange}>
                            <option>Select Color</option>
                            <option>Pink</option>
                            <option>Ash</option>
                            <option>Red</option>
                            <option>White</option>
                            <option>Blue</option>
                        </select>
                        <i className="icofont-rounded-down"></i>
                    </div>

                    <div className="cart-plus-minus">

                        <div className="dec qtybutton" onClick={handleDecrease}>
                            -
                        </div>

                        <input
                            className="cart-plus-minus-box"
                            type="number"
                            name="qtybutton"
                            value={preQuantity}
                            onChange={(e) => setPreQuantity(parseInt(e.target.value, 10))}
                        />

                        <div className="inc qtybutton" onClick={handleIncrease}>
                            +
                        </div>

                    </div>

                    <div className="discount-code mb-2">
                        <input
                            type="text"
                            placeholder="Enter Discount Code"
                            value={coupon}
                            onChange={(e) => setCoupon(e.target.value)
                            }
                        />
                    </div>

                    <button type="submit" className="lab-btn">
                        <span>Add To Cart</span>
                    </button>

                    <Link to="/cart-page" className="lab-btn bg-primary">
                        <span>Check Out</span>
                    </Link>

                </form>
           </div>
        </div>
    )
}

export default ProductDisplay
