import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { IProduct } from '../productsJSON';
import PageHeader from "../components/PageHeader";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import ProductDisplay from "./ProductDisplay";


const SingleProduct = () => {
    const [products, setProducts] = useState<IProduct[]>([]);
    const { id } = useParams<{id: string}>();

    useEffect(() => {
        fetch("/src/products.json")
            .then(result => result.json())
            .then((data: IProduct[]) => setProducts(data));
    }, []);

    const result = products.filter(product => product.id === id);
    // console.log(result)

    return (
        <div>
            <PageHeader title={"OUR SHOP SINGLE"} currPage={"Shop / Single Product"} />
            <div className="shop-single padding-tb aside-bg">
                <div className="container">
                    <div className="row justify-content-center">

                        {/* left side */}
                        <div className="col-lg-8 col-12">
                            <article>
                                <div className="product-details">
                                    <div className="row align-items-center">

                                        <div className="col-md-6 col-12">
                                            <div className="product-thumb">
                                                <div className="swiper-container pro-single-top">
                                                    <Swiper
                                                        spaceBetween={30}
                                                        slidesPerView={1}      
                                                        autoplay={{
                                                            delay: 2000,
                                                            disableOnInteraction: false,
                                                        }}
                                                        navigation={{
                                                            prevEl: ".pro-single-prev",
                                                            nextEl: ".pro-single-next",
                                                        }}
                                                    >
                                                        {result.map((item, i) => (
                                                            <SwiperSlide key={i}>
                                                                <div className="single-thumb">
                                                                    <img src={item.img} alt={item.name} />
                                                                </div>
                                                            </SwiperSlide>
                                                        ))}
                                                    </Swiper>
                                                    <div className="pro-single-next">
                                                        <i className="icofont-rounded-left"></i>
                                                    </div>
                                                    <div className="pro-single-prev">
                                                        <i className="icofont-rounded-right"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-6 col-12">
                                            <div className="post-content">
                                                <div>
                                                    {
                                                        result.map(item => <ProductDisplay item={item} key={item.id} />)
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>

                                <div className="review">
                                    {/* <Review /> */}
                                </div>
                            </article>
                        </div>

                        {/* right side */}
                        <div className="col-lg-4 col-md-7 col-12">
                            <aside className="ps-lg-4">
                                {/* <MostPopularPost />
                                <Tags /> */}
                            </aside>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleProduct
