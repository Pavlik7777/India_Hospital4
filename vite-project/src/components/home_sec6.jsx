import "../components/home_sec6.scss"
import { Hero } from "../Photos"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
export default function Home_sec6(){
    return(
        <>
            <section className="tra">
                <div className="tru">
                    <p>Trusted Care</p>
                    <h2>Our Doctors</h2>
                </div>
                <div className="klo">
                    <div className="klo_container">
                        <Swiper
                            slidesPerView={3}
                            spaceBetween={30}
                            freeMode={true}
                            pagination={{
                            clickable: true,
                            }}
                            modules={[FreeMode, Pagination]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <div className="vrach">
                                    <img className="vava" src={Hero.Vrac} alt="" />
                                    <div className="doc">
                                        <p>Doctor’s Name</p>
                                        <h2>Neurology</h2>
                                        <div className="imm">
                                            <img src={Hero.Inn} alt="" />
                                            <img src={Hero.Ff} alt="" />
                                            <img src={Hero.Insts} alt="" />
                                        </div>
                                        <div className="vie">
                                            <p>View Profile</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="vrach">
                                    <img className="vava" src={Hero.Vrac2} alt="" />
                                    <div className="doc">
                                        <p>Doctor’s Name</p>
                                        <h2>Neurology</h2>
                                        <div className="imm">
                                            <img src={Hero.Inn} alt="" />
                                            <img src={Hero.Ff} alt="" />
                                            <img src={Hero.Insts} alt="" />
                                        </div>
                                        <div className="vie">
                                            <p>View Profile</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="vrach">
                                    <img className="vava" src={Hero.Vrac3} alt="" />
                                    <div className="doc">
                                        <p>Doctor’s Name</p>
                                        <h2>Neurology</h2>
                                        <div className="imm">
                                            <img src={Hero.Inn} alt="" />
                                            <img src={Hero.Ff} alt="" />
                                            <img src={Hero.Insts} alt="" />
                                        </div>
                                        <div className="vie">
                                            <p>View Profile</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="vrach">
                                    <img className="vava" src={Hero.Vrac} alt="" />
                                    <div className="doc">
                                        <p>Doctor’s Name</p>
                                        <h2>Neurology</h2>
                                        <div className="imm">
                                            <img src={Hero.Inn} alt="" />
                                            <img src={Hero.Ff} alt="" />
                                            <img src={Hero.Insts} alt="" />
                                        </div>
                                        <div className="vie">
                                            <p>View Profile</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="vrach">
                                    <img className="vava" src={Hero.Vrac2} alt="" />
                                    <div className="doc">
                                        <p>Doctor’s Name</p>
                                        <h2>Neurology</h2>
                                        <div className="imm">
                                            <img src={Hero.Inn} alt="" />
                                            <img src={Hero.Ff} alt="" />
                                            <img src={Hero.Insts} alt="" />
                                        </div>
                                        <div className="vie">
                                            <p>View Profile</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </section>
        </>
    )
}