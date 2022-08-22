import { Header } from "./Header";
import { Mainn } from "./Mainn";
import "./App.css";

export function Home (){
    return (
        <div className="home">
        <Header/>
        <Mainn/>
        </div>
    )
}