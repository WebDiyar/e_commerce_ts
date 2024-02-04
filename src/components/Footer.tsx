import { Link } from "react-router-dom";
import { addressList, socialList, ItemList, quickList, tweetList, footerbottomList } from "../jsons/Footer";

const Footer = () => {
    return (
        <footer className="style-2">
            <div className="footer-top dark-view padding-tb">
                <div className="container">
                    <div className="row g-4 row-cols-xl-4 row-cols-sm-2 row-cols-1 justify-content-center">
                        <div className="col">
                            <div className="footer-item our-address">
                                <div className="footer-inner">
                                    <div className="footer-content">
                                        <div className="title">
                                            <h4>About ShopCart</h4>
                                        </div>
                                        <div className="content">
                                            <p>Eduaid theme number one world class university in the world There are student are studing always in this university for all time.</p>
                                            <ul className="lab-ul office-address">
                                                {addressList.map((val, i) => (
                                                    <li key={i}><i className={val.iconName}></i>{val.text}</li>
                                                ))}
                                            </ul>
                                        
                                            <ul className="lab-ul social-icons">
                                                {socialList.map((val, i) => (
                                                    <li key={i}>
                                                        <a className={val.className}><i className={val.iconName}></i></a>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="footer-item">
                                <div className="footer-inner">
                                    <div className="footer-content">
                                        <div className="title">
                                            <h4>Categories</h4>
                                        </div>
                                        <div className="content">
                                            <ul className="lab-ul">
                                                {ItemList.map((val, i) => (
                                                    <li key={i}><Link to={`${val.link}`}>{val.text}</Link></li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="footer-item">
                                <div className="footer-inner">
                                    <div className="footer-content">
                                        <div className="title">
                                            <h4>Quick Links</h4>
                                        </div>
                                        <div className="content">
                                            <ul className="lab-ul">
                                                {quickList.map((val, i) => (
                                                    <li key={i}><span>{val.text}</span></li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="footer-item twitter-post">
                                <div className="footer-inner">
                                    <div className="footer-content">
                                        <div className="title">
                                            <h4>Recent Tweets</h4>
                                        </div>
                                        <div className="content">
                                            <ul className="lab-ul">
                                                {tweetList.map((val, i) => (
                                                    <li key={i}>
                                                        <i className={val.iconName}></i>
                                                        <p>{val.desc}</p>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <div className="section-wrapper">
                        <p>&copy; 2023 <Link to="/">Shop Cart</Link> Designed by <a href="https://themeforest.net/user/CodexCoder" target="_blank">XYZ</a> </p>
                        <div className="footer-bottom-list">
                            {footerbottomList.map((val, i) => (
                                <a key={i}>{val.text}</a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer