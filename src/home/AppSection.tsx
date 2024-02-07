import { Link } from "react-router-dom"

const AppSection = () => {
    return (
        <div className="app-section padding-tb">
            <div className="container">
                <div className="section-header text-center">
                    <Link to="/sign-up" className="lab-btn mb-4">Sign up for Free</Link>
                    <h2 className="title">Shop Anytime, Any Where</h2>
                    <p>Take courses on your any device with our app & learn all about business what you want. Just download & install & start to learn</p>
                </div>

                <div className="section-wrapper">
                    <ul className="lab-ul">
                        <li><a href="https://www.apple.com/app-store/" target="_blank"><img src="/src/assets/images/app/01.jpg" alt="01" /></a></li>
                        <li><a href="https://play.google.com/store/games?hl=ru&gl=US" target="_blank"><img src="/src/assets/images/app/02.jpg" alt="02" /></a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default AppSection
