import CountUp from 'react-countup';
import { Link } from 'react-router-dom';

interface IcountList{
    iconName: string;
    count: string;
    text: string;
}

const countList: IcountList[] = [
    {
        iconName: 'icofont-users-alt-4',
        count: '11600',
        text: 'Marchant Enrolled',
    },
    {
        iconName: 'icofont-graduate-alt',
        count: '70',
        text: 'Certified Courses',
    },
    {
        iconName: 'icofont-notification',
        count: '150',
        text: 'Rewards and GitCards',
    },
]

const AboutUs = () => {
    return (
        <div className="instructor-section style-2 padding-tb section-bg-ash">
            <div className="container">
                <div className="section-wrapper">
                    <div className="row g-4 justify-content-center align-items-center row-cols-1 row-cols-md-2 row-cols-xl-3">

                        <div className="col">
                            {
                                countList.map((value, index) => (
                                    <div key={index} className="count-item">
                                        <div className="count-inner">

                                            <div className="count-icon">
                                                <i className={value.iconName}></i>
                                            </div>

                                            <div className="count-content">
                                                <h2>
                                                    <span className='count'><CountUp end={+value.count} /></span>
                                                    <span>{value.text}</span>
                                                </h2>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>

                        <div className="col">
                            <div className="instructor-content">
                                <p className='subtitle'>Why Choose Us</p>
                                <h2 className='title'>Become a Marchant</h2>
                                <p>Take courses on your any device with our app & learn all about business what you want. Just download & install & start to learn</p>
                                <Link to="/sign-up" className='lab-btn'>Apply Now</Link>
                            </div>
                        </div>

                        <div className="col">
                            <div className="instructor-thumb">
                                <img src="/src/assets/images/instructor/01.png" alt="01" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs
