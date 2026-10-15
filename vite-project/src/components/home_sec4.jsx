import { Hero } from "../Photos"
import "../components/home_sec4.scss"
const items =[
    {id:1, title:"Neurology", img:"/src/assets/Ser.png"},
    {id:2, title:"Bones", img:"/src/assets/Serg.png"},
    {id:3, title:"Oncology", img:"/src/assets/Ser.png"},
    {id:4, title:"Otorhinolaryngology", img:"/src/assets/Ser.png"},
    {id:5, title:"Ophthalmology", img:"/src/assets/Ser.png"},
    {id:6, title:"Cardiovascular", img:"/src/assets/Ser.png"},
    {id:7, title:"Pulmonology", img:"/src/assets/Ser.png"},
    {id:8, title:"Renal Medicine", img:"/src/assets/Ser.png"},
    {id:9, title:"Gastroenterology", img:"/src/assets/Ser.png"},
    {id:10, title:"Urology", img:"/src/assets/Ser.png"},
    {id:11, title:"Dermatology", img:"/src/assets/Ser.png"},
    {id:12, title:"Gynaecology", img:"/src/assets/Ser.png"},
]
export default function Home_sec4(){    
    return(
        <>
            <section className="Home_sec4">
                <div className="all">
                    <p>Always Caring</p>
                    <h2>Our Specialties</h2>
                </div>
                <div className="lopp">
                    {items.map(item =>(
                        <div className={`jo ${item.id === 2 ? 'active' : ''}`} key={item.id}>
                            <img src={item.img} alt="" />
                            <p>{item.title}</p>
                        </div>))}
                </div>
            </section>
        </>
    )
}