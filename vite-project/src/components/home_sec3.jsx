import "../components/home_sec3.scss"
import { Hero } from "../Photos"
export default function Home_sec3(){
    return(
        <>
            <section className="Home_sec3">
                <div className="hoho">
                    <p>Care you can believe in</p>
                    <h2>Our Services</h2>
                </div>
                <div className="main">
                    <div className="leftc">
                        <div className="hot">
                            <img src={Hero.Medi} alt="" />
                            <p>Free Checkup</p>
                        </div>
                        <div className="hot2">
                            <img src={Hero.Vec} alt="" />
                            <p>Cardiogram</p>
                        </div>
                        <div className="hot1">
                            <img src={Hero.Go} alt="" />
                            <p>Dna Testing</p>
                        </div>
                        <div className="hot1">
                            <img src={Hero.Cap} alt="" />
                            <p>Blood Bank</p>
                        </div>
                        <div className="hot3">
                            <p>View All</p>
                        </div>
                    </div>
                    <div className="centr">
                        <h2>A passion for putting patients first.</h2>
                        <div className="ull">
                            <ul>
                                <li>A Passion for Healing</li>
                                <li>All our best</li>
                                <li>A Legacy of Excellence</li>
                            </ul>
                            <ul>
                                <li>5-Star Care</li>
                                <li>Believe in Us</li>
                                <li>Always Caring</li>
                            </ul>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/>
                            Quisque placerat scelerisque tortor ornare ornare. Quisque<br/>
                            placerat scelerisque tortor ornare ornare Convallis felis<br/>
                            vitae tortor augue. Velit nascetur proin massa in.<br/>
                            Consequat faucibus porttitor enim et.
                        </p>
                        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/>
                            Quisque placerat scelerisque. Convallis felis vitae tortor<br/>
                            augue. Velit nascetur proin massa in.
                        </h3>
                    </div>
                    <div className="per">
                        <img src={Hero.Biq} alt="" />
                        <img src={Hero.Grr} alt="" />
                    </div>
                </div>
            </section>
        </>
    )
}