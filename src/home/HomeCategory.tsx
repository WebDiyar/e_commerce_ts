import { Link } from "react-router-dom";
interface ICategoryItem{
    imgUrl: string;
    imgAlt: string;
    iconName: string;
    title: string;
}

const categoryList: ICategoryItem[] = [
    {
        imgUrl: '/src/assets/images/category/01.jpg',
        imgAlt: 'category rajibraj91 rajibraj',
        iconName: 'icofont-brand-windows',
        title: 'DSLR Camera',
    },
    {
        imgUrl: '/public/favicon.ico',
        imgAlt: 'category rajibraj91 rajibraj',
        iconName: 'icofont-brand-windows',
        title: 'Shoes',
    },
    {
        imgUrl: '/test/01.jpg',
        imgAlt: 'category rajibraj91 rajibraj',
        iconName: 'icofont-brand-windows',
        title: 'Photography',
    },
    {
        imgUrl: 'src/assets/images/category/04.jpg',
        imgAlt: 'category rajibraj91 rajibraj',
        iconName: 'icofont-brand-windows',
        title: 'Formal Dress',
    },
    {
        imgUrl: '/public/test/02.jpg', 
        imgAlt: 'category rajibraj91 rajibraj',
        iconName: 'icofont-brand-windows',
        title: 'Colorful Bags',
    },
    {
        imgUrl: '/src/assets/images/category/06.jpg',
        imgAlt: 'category rajibraj91 rajibraj',
        iconName: 'icofont-brand-windows',
        title: 'Home Decor',
    },
]

const Homecategory = () => {
    return (
        <div className="category-section style-4 padding-tb">
            <div className="container">

                <div className="section-header text-center">
                    <span className="subtitle">Choose Any Products</span>
                    <h2 className="title">Buy Everything with Us</h2>
                </div>

                <div className="section-wrapper">
                    <div className="row g-4 justify-content-center row-cols-md-3 row-cols-sm-2 row-cols-1">
                        {categoryList.map((val, i) => (
                            <div className="col" key={i}>
                                <Link to="/shop" className="category-item">
                                    <div className="category-inner">
                                        <div className="category-thumb">
                                            <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                                        </div>
                                        <div className="category-content">
                                            <div className="cate-icon">
                                                <i className={`${val.iconName}`}></i>
                                            </div>
                                            <h6>{val.title}</h6>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-5">
                        <Link to="/shop" className="lab-btn"><span>Get Started Now</span></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homecategory
