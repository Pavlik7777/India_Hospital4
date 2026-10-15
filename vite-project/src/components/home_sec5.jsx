import "../components/home_sec5.scss"
import { Hero } from "../Photos"
export default function Home_sec5(){
    return(
        <>
            <section className="Home_sec5">
                <div className="alala">
                    <div className="alala_container">
                        <div className="boo">
                            <h2>Book an Appointment</h2>
                            <p className="lor">Lorem ipsum dolor sit amet, consectetur adipiscing<br/>
                                elit. Quisque placerat scelerisque tortor ornare ornare.<br/>
                                Convallis felis vitae tortor augue. Velit<br/>
                                nascetur proin massa in. Consequat faucibus<br/>
                                porttitor enim et.
                            </p>
                        </div>
                        <div className="lipa">
                            <div className="con1">
                                <p>Name</p>
                                <div className="cher"></div>
                                <div className="gen">
                                    <p>Gender</p>
                                    <img src={Hero.Vniz} alt="" />
                                </div>
                            </div>
                            <div className="con1">
                                <p>Email</p>
                                <div className="cher"></div>
                                <div className="gen">
                                    <p>Phone</p>
                                </div>
                            </div>
                            <div className="con1">
                                <div className="fol">
                                    <p>Date</p>
                                    <img src={Hero.Vniz} alt="" />
                                </div>
                                <div className="cher"></div>
                                <div className="gen">
                                    <p>Time</p>
                                    <img src={Hero.Vniz} alt="" />
                                </div>
                            </div>
                            <div className="con1">
                                <div className="fol">
                                    <p>Doctor</p>
                                    <img src={Hero.Vniz} alt="" />
                                </div>
                                <div className="cher"></div>
                                <div className="gen">
                                    <p>Department</p>
                                    <img src={Hero.Vniz} alt="" />
                                </div>
                            </div>
                            <div className="mes">
                                <p>Message</p>
                            </div>
                            <div className="sub">
                                <p>Submit</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}