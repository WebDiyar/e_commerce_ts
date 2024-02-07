import { Link } from "react-router-dom";
import Ratting from '../components/Ratting';
import IProduct from '../shop/Shop'
import Data from "../productsJSON";
export { Data };
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

const ProductCards = ({ products, GridList }: { GridList: boolean, products: IProduct[]}) => {
  return (
      <div
          className={`shop-product-wrap row justify-content-center ${GridList ? "grid" : "list"
              }`}
        >
          {products.map((product, i) => (
              <div className="col-lg-4 col-md-6 col-12" key={i}>
                  
                  {/* products-grid */}
                  <div className="product-item">
                      <div className="product-thumb">
                          <div className="pro-thumb">
                              <img src={`${product.img}`} alt={`${product.img}`} />
                          </div>
                          <div className="product-action-link">
                              <Link to={`/shop/${product.id}`}>
                                  <i className="icofont-eye"></i>
                              </Link>
                              <Link to="/">
                                  <i className="icofont-heart"></i>
                              </Link>
                              <Link to="/cart-page">
                                  <i className="icofont-cart-alt"></i>
                              </Link>
                          </div>
                      </div>

                      <div className="product-content">
                          <h5>
                              <Link to={`/shop/${product.id}`}>{product.name}</Link>
                          </h5>
                          <p className="productRating">
                              <Ratting />
                          </p>
                          <h6>${product.price}</h6>
                      </div>

                  </div>


                  {/* product-list */}
                  <div className="product-list-item">
                      <div className="product-thumb">
                          <div className="pro-thumb">
                              <img src={`${product.img}`} alt={`${product.seller}`} />
                          </div>
                          <div className="product-action-link">
                              <a href="#">
                                  <i className="icofont-eye"></i>
                              </a>
                              <a href="#">
                                  <i className="icofont-heart"></i>
                              </a>
                              <a href="#">
                                  <i className="icofont-cart-alt"></i>
                              </a>
                          </div>
                      </div>

                      <div className="product-content">
                          <Link to={`/shop/${product.id}`}>{product.name}</Link>
                          <p className="productRating">
                              <Ratting />
                          </p>
                          <h6>${product.price}</h6>
                      </div>
                  </div>
                  
              </div>
          ))}
      </div>
  )
}

export default ProductCards
