import { Header } from "../components/Header";
import { Mainn } from "../components/Mainn";
import "../App.css";

export function Home (){
    return (
        <div className="home">
        <Header/>
        <Mainn/>
        </div>
    )
}