import { Hero } from "../Photos";
import "../Header/header.scss"
export default function Header(){
    return(
        <>
            <header>
                <nav>
                    <div className="hihi">
                        <ul>
                            <li>Home</li>
                            <li>About us</li>
                            <li>Services</li>
                            <li>Doctors</li>
                            <li>News</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div className="app">
                        <img src={Hero.Lupa} alt="" />
                        <button>Appointment</button>
                    </div>
                </nav>
            </header>
        </>
    )
}