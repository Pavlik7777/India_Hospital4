import { Hero } from "../Photos"
import "../components/home_sec1.scss"
export default function Home_sec1(){
    return(
        <>
            <section className="Home_sec1">
                <div className="kol">
                    <div className="kol_container">
                        <p>Caring for Life</p>
                        <h1>Leading the Way<br/>
                            in Medical Excellence
                        </h1>
                        <button>Our Services</button>
                    </div>
                </div>
                <div className="gif">
                    <div className="gif_container">
                        <div className="got1">
                            <p>Book an Appointment</p>
                            <img src={Hero.Calen} alt="" />
                        </div>
                        <div className="got2">
                            <p>Book an Appointment</p>
                            <img src={Hero.Team} alt="" />
                        </div>
                        <div className="got3">
                            <p>Book an Appointment</p>
                            <img src={Hero.Cash} alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}