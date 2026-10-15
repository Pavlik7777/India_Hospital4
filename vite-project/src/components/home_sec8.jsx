import "../components/home_sec8.scss"
import { Hero } from "../Photos"

export default function Home_sec8(){
    return(
        <>
            <section className="Home_sec8">
                <div className="als">
                    <p>Get in touch</p>
                    <h2>Contact</h2>
                </div>
                <div className="lp">
                    <div className="lp_container">
                        <div className="alal">
                            <img src={Hero.Phone} alt="" />
                            <h2>Emergency</h2>
                            <ul>
                                <li>(237) 681-812-255</li>
                                <li>(237) 666-331-894</li>
                            </ul>
                        </div>
                        <div className="alal2">
                            <img src={Hero.Toch} alt="" />
                            <h2>Location</h2>
                            <ul>
                                <li>0123 Some place</li>
                                <li>9876 Some country</li>
                            </ul>
                        </div>
                        <div className="alal">
                            <img src={Hero.Email} alt="" />
                            <h2>Email</h2>
                            <ul>
                                <li>fildineeesoe@gmil.com</li>
                                <li>myebstudios@gmail.com</li>
                            </ul>
                        </div>
                        <div className="alal">
                            <img src={Hero.Time} alt="" />
                            <h2>Emergency</h2>
                            <ul>
                                <li>Working Hours</li>
                                <li>Sunday Emergency only</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}