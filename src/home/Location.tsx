import { Link } from 'react-router-dom';
interface IClientsList{
    imgUrl: string;
    imgAlt: string;
    text: string;
}

const clientsList: IClientsList[] = [
    {
        imgUrl: '/src/assets/images/clients/avater.jpg',
        imgAlt: 'education thumb rajibraj91 rajibraj',
        text: 'Join with Us',
    },
    {
        imgUrl: '/src/assets/images/clients/avater.jpg',
        imgAlt: 'education thumb rajibraj91 rajibraj',
        text: 'Join with Us',
    },
    {
        imgUrl: '/src/assets/images/clients/avater.jpg',
        imgAlt: 'education thumb rajibraj91 rajibraj',
        text: 'Join with Us',
    },
    {
        imgUrl: '/src/assets/images/clients/avater.jpg',
        imgAlt: 'education thumb rajibraj91 rajibraj',
        text: 'Join with Us',
    },
    {
        imgUrl: '/src/assets/images/clients/avater.jpg',
        imgAlt: 'education thumb rajibraj91 rajibraj',
        text: 'Join with Us',
    },
    {
        imgUrl: '/src/assets/images/clients/avater.jpg',
        imgAlt: 'education thumb rajibraj91 rajibraj',
        text: 'Join with Us',
    },
    {
        imgUrl: '/src/assets/images/clients/avater.jpg',
        imgAlt: 'education thumb rajibraj91 rajibraj',
        text: 'Join with Us',
    },
]
const Location = () => {
    return (
        <div className="clients-section style-2 padding-tb">
            <div className="container">

                <div className="section-header text-center">
                    <h2 className="title">More Then 50,000 Customers</h2>
                    <p>Buy products on your any device with our app & enjoy your time what you want. Just download & install & start to shopping</p>
                </div>

                <div className="section-wrapper">
                    <div className="clients">
                        {
                            clientsList.map((value, index) => (
                                <div key={index} className="client-list">
                                    <Link to="/signup" className='client-content'>
                                        <span>{value.text}</span>
                                    </Link>
                                    <div className="client-thumb">
                                        <img src={value.imgUrl} alt={value.imgAlt} />
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

export default Location
