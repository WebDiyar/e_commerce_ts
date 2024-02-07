import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
interface ISponsorList {
    imgUrl: string;
}

const sponsorList: ISponsorList[] = [
    {
        imgUrl: "/src/assets/images/sponsor/01.png",
    },
    {
        imgUrl: "/src/assets/images/sponsor/02.png",
    },
    {
        imgUrl: "/src/assets/images/sponsor/03.png",
    },
    {
        imgUrl: "/src/assets/images/sponsor/04.png",
    },
    {
        imgUrl: "/src/assets/images/sponsor/05.png",
    },
    {
        imgUrl: "/src/assets/images/sponsor/06.png",
    },
];

const Sponsor = () => {
    return (
        <div className="sponsor-section section-gbg">
            <div className="container">
                <div className="section-wrapper">
                    <div className="sponsor-slider">
                        <Swiper
                            spaceBetween={20}
                            slidesPerView={2}
                            autoplay={{
                                delay: 2000,
                                disableOnInteraction: false,
                            }}
                            modules={[Autoplay]}
                            breakpoints={{
                                640: {
                                    spaceBetween: 20,
                                    slidesPerView: 1,
                                },
                                768: {
                                    spaceBetween: 40,
                                    slidesPerView: 3,
                                },
                                1200: {
                                    spaceBetween: 50,
                                    slidesPerView: 5.5,
                                },
                            }}
                        >
                            {sponsorList.map((value, index) => (
                                <SwiperSlide key={index}>
                                    <div className="sponsor-iten">
                                        <div className="sponsor-thumb">
                                            <img src={`${value.imgUrl}`} />
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                            
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sponsor
