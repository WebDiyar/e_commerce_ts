import { useState } from 'react'
import ProductData from '../jsons/ProductData';
import { Link } from 'react-router-dom';
import Ratting from '../components/Ratting';
interface IProductData {
    imgUrl: string;
    cate: string;
    title: string;
    author: string;
    brand: string;
    price: string;
    id: number;
}

type TCatgoryItem = "Shoes" | "Bags" | "Phones" | "Beauty";

const CategoryShowCase = () => {
    const [items, setItems] = useState<IProductData[]>(ProductData);

    const filterItem = (categoryItem: TCatgoryItem) => {
        const updateItems = ProductData.filter(product => {
            return product.cate === categoryItem
        })

        setItems(updateItems)
    }

    return (
        <div className='course-section style-3 padding-tb'>

            <div className='course-shape one'>
                <img src="/src/assets/images/shape-img/icon/01.png" alt="01" />
            </div>

            <div className='course-shape two'>
                <img src="/src/assets/images/shape-img/icon/02.png" alt="02" />
            </div>

            {/* main sdection */}
            <div className="container">
                <div className="section-header">
                    <h2 className="title">Our Products</h2>
                    <div className='course-filter-group'>
                        <ul className='lab-ul'>
                            <li onClick={() => setItems(ProductData)}>All</li>
                            <li onClick={() => filterItem("Shoes")}>Shoes</li>
                            <li onClick={() => filterItem("Bags")}>Bags</li>
                            <li onClick={() => filterItem("Phones")}>Phones</li>
                            <li onClick={() => filterItem("Beauty")}>Beauty</li>
                        </ul>
                    </div>
                </div>

                <div className="section-wrapper">
                    <div className='row g-4 justify-content-center row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-1 course-filter '>
                        {
                            items.map(product => (
                                <div key={product.id} className='col'>
                                    <div className='course-item style-4'>
                                        <div className='course-inner'>

                                            <div className="coutse-thumb">
                                                
                                                <img src={product.imgUrl} alt="img" />
                                                <div className='course-category'>

                                                    <div className="course-cate">
                                                        <Link to="/">{product.cate}</Link>
                                                    </div>

                                                    <div className='course-reiew'>
                                                        <Ratting/>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className='course-content'>
                                                <Link to={`/shop/${product.id}`}><h5>{product.title}</h5></Link>
                                                <div className='course-footer'>

                                                    <div className="course-author">
                                                        <Link to="/" className='ca-name'>{product.brand}</Link>
                                                    </div>

                                                    <div className="course-price">
                                                        {product.price}
                                                    </div>                                          
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CategoryShowCase

