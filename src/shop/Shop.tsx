import { useState } from 'react';
import PageHeader from '../components/PageHeader'
import ProductCards from './ProductCards';
import Pagination from './Pagination';
import productsData from "../productsJSON"
import Search from './Search';
import ShopCategory from './ShopCategory';
import PopularPost from './PopularPost';
import Tags from './Tags';

const showResult = "Showing 01 - 12 of 65 Results";

type TSelectedCategory = "Men's Sneaker" | "Men's Pants" | "Men's Boot" | 'Bag' | 'Cap' | 'Earphones' | 'Bottle' | "All";
 
const Shop = () => {
    const [GridList, setGridList] = useState<boolean>(true);
    const [products, setProducts] = useState(productsData);
    const [selectedCategory, setSelectedCategory] = useState<TSelectedCategory>("All");

    //pagination
    const [currentPage, setCurrentPage] = useState<number>(1);
    const productsPerPage: number = 12;

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstPage = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstPage, indexOfLastProduct);

    //change the current page
    const paginate = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    }

    const menuItems = [...new Set(productsData.map(val => val.category))];  //TSelectedCategory

    const filterItems = (currentCategory: TSelectedCategory) => {
        const newItem = productsData.filter(product => {
            return currentCategory === product.category;
        })

        setSelectedCategory(currentCategory);
        setProducts(newItem);
    }

    return (
        <div>
            <PageHeader title="Our Shop Page" currPage="Shop" />
            
            <div className="shop-page padding-tb">
                <div className="container">
                    <div className="row justify-content-center">

                        <div className="col-lg-8 col-12">
                            <article>
                                <div className="shop-title d-flex flex-wrap justify-content-between">
                                    <p>{showResult}</p>
                                    <div
                                        className={`product-view-mode ${GridList ? "gridActive" : "listActive" }  d-flex align-items-center  `}>
                                        <a className="grid" onClick={() => setGridList(GridList===false ? !GridList : true)}> 
                                            <i className="icofont-ghost"></i>
                                        </a>
                                        <a className="list" onClick={() => setGridList(GridList === true ? !GridList : false)}>
                                            <i className="icofont-listine-dots"></i>
                                        </a>
                                    </div>
                                </div>

                                <div>
                                    <ProductCards products={currentProducts} GridList={GridList} />
                                </div>

                                <Pagination
                                    productsPerPage={productsPerPage}
                                    totalProducts={products.length}
                                    paginate={paginate}
                                    currentPage={currentPage} />

                            </article>
                        </div>

                        <div className="col-lg-4 col-12">
                            <aside>
                                <Search products={products} />
                                <ShopCategory
                                    filterItems={filterItems}
                                    setItem={setProducts}
                                    menuItems={menuItems as TSelectedCategory[]}
                                    setProducts={setProducts}
                                    selectedCategory={selectedCategory} />
                                
                                <PopularPost />
                                <Tags/>
                            </aside>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        
        
    )
}

export default Shop
