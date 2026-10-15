import "../components/home_sec2.scss"
import { Hero } from "../Photos"
export default function Home_sec2(){
    return(
        <>
            <section className="Home_sec2">
                <div className="med">
                    <p>Welcome to Meddical</p>
                    <h2>A Great Place to Receive Care</h2>
                    <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat<br/>
                        scelerisque tortor ornare ornare. Convallis felis vitae tortor augue. Velit nascetur<br/>
                        proin massa in. Consequat faucibus porttitor enim et.
                    </h3>
                    <div className="str">
                        <p>Learn More</p>
                        <img src={Hero.Strv} alt="" />
                    </div>
                </div>
                <div className="gr">
                    <img src={Hero.Gru} alt="" />
                </div>
            </section>
        </>
    )
}