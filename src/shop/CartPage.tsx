import { useEffect, useState } from "react"
import { IProductDisplaying } from './ProductDisplay'
import PageHeader from "../components/PageHeader";
import { Link } from "react-router-dom";
import CheckOutPage from "./CheckOutPage";

const CartPage = () => {
    const [cartItems, setCartItems] = useState<IProductDisplaying[]>([]);

    useEffect(() => {
        const storedItems = JSON.parse(localStorage.getItem("cart") || "[]") as IProductDisplaying[];
        
        setCartItems(storedItems);
    }, []);


    // item - это объект в массиве
    const calculateTotalPrice = (item: IProductDisplaying): number => {
        return item.price * item.quantity;
    }

    const handleIncrease = (item: IProductDisplaying) => {
        item.quantity += 1;
        setCartItems([...cartItems]);

        localStorage.setItem("cart", JSON.stringify(cartItems));
    }

    const handleDecrease = (item: IProductDisplaying) => {
        if (item.quantity > 1) {
            item.quantity -= 1;
            setCartItems([...cartItems]);
        }

        localStorage.setItem("cart", JSON.stringify(cartItems));
    }

    const handleRemoveItem = (item: IProductDisplaying) => {
        const updatedItems = cartItems.filter(cartItem => cartItem.id !== item.id);
        setCartItems(updatedItems);

        localStorage.setItem("cart", JSON.stringify(updatedItems));
    }

    const cartSubtotal = cartItems.reduce((total, item) => {
        return total + calculateTotalPrice(item);
    }, 0)

    const orderTotal = cartSubtotal;

    return (
        <div>
            <PageHeader title={"Shop Cart"} currPage={"Cart Page"} />
            <div className="shop-cart padding-tb">
                <div className="container">
                    <div className="section-wrapper">
                        
                        <div className="cart-top">
                            <table>

                                <thead>
                                    <tr>
                                        <th className="cat-product">Product</th>
                                        <th className="cat-price">Price</th>
                                        <th className="cat-quantity">Quantity</th>
                                        <th className="cat-toprice">Total</th>
                                        <th className="cat-edit">Edit</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {cartItems.map((item, index) => (
                                        <tr key={index}>
                                            <td className="product-item cat-product">
                                                <div className="p-thumb">
                                                    <Link to="/shop-single">
                                                        <img src={`${item.img}`} alt="" />
                                                    </Link>
                                                </div>
                                                <div className="p-content">
                                                    <Link to="/shop-single">{item.name}</Link>
                                                </div>
                                            </td>
                                            <td className="cat-price">${item.price}</td>
                                            <td className="cat-quantity">
                                                <div className="cart-plus-minus">
                                                    <div
                                                        className="dec qtybutton"
                                                        onClick={() => handleDecrease(item)}
                                                    >
                                                        -
                                                    </div>
                                                    <input
                                                        className="cart-plus-minus-box"
                                                        type="text"
                                                        name="qtybutton"
                                                        value={item.quantity}
                                                    />
                                                    <div
                                                        className="inc qtybutton"
                                                        onClick={() => handleIncrease(item)}
                                                    >
                                                        +
                                                    </div>
                                                </div>
                                            </td>

                                            <td className="cat-toprice">
                                                ${calculateTotalPrice(item)}
                                            </td>

                                            <td className="cat-edit">
                                                <button onClick={() => handleRemoveItem(item)}>Remove</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <div className="cart-bottom">
                            <div className="cart-checkout-box">
                                <form className="coupon" action="/">
                                    <input
                                        type="text"
                                        name="coupon"
                                        placeholder="Coupon Code..."
                                        className="cart-page-input-text"
                                    />
                                    <input type="submit" value="Apply Coupon" />
                                </form>
                                <form className="cart-checkout" action="/">
                                    <input type="submit" value="Update Cart" />
                                    {/* <Link to="/check-out"><input type="submit" value="Proceed to Checkout" /></Link> */}
                                    <div>
                                        <CheckOutPage/>
                                    </div>
                                </form>
                            </div>

                            {/* shopping box */}
                            <div className="shiping-box">
                                <div className="row">
                                    <div className="col-md-6 col-12">
                                        <div className="calculate-shiping">
                                            <h3>Calculate Shipping</h3>
                                            <div className="outline-select">
                                                <select>
                                                    <option value="volvo">United Kingdom (UK)</option>
                                                    <option value="saab">Bangladesh</option>
                                                    <option value="saab">Pakisthan</option>
                                                    <option value="saab">India</option>
                                                    <option value="saab">Nepal</option>
                                                </select>
                                                <span className="select-icon">
                                                    <i className="icofont-rounded-down"></i>
                                                </span>
                                            </div>
                                            <div className="outline-select shipping-select">
                                                <select>
                                                    <option value="volvo">State/Country</option>
                                                    <option value="saab">Dhaka</option>
                                                    <option value="saab">Benkok</option>
                                                    <option value="saab">Kolkata</option>
                                                    <option value="saab">Kapasia</option>
                                                </select>
                                                <span className="select-icon">
                                                    <i className="icofont-rounded-down"></i>
                                                </span>
                                            </div>
                                            <input
                                                type="text"
                                                name="coupon"
                                                placeholder="Postcode/ZIP"
                                                className="cart-page-input-text"
                                            />
                                            <button type="submit">Update Total</button>
                                        </div>
                                    </div>

                                    {/* cart total */}
                                    <div className="col-md-6 col-12">
                                        <div className="cart-overview">
                                            <h3>Cart Totals</h3>
                                            <ul className="lab-ul">
                                                <li>
                                                    <span className="pull-left">Cart Subtotal</span>
                                                    <p className="pull-right">$ {cartSubtotal}</p>
                                                </li>
                                                <li>
                                                    <span className="pull-left">
                                                        Shipping and Handling
                                                    </span>
                                                    <p className="pull-right">Free Shipping</p>
                                                </li>
                                                <li>
                                                    <span className="pull-left">Order Total</span>
                                                    <p className="pull-right">
                                                        $ {orderTotal.toFixed(2)}
                                                    </p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartPage
