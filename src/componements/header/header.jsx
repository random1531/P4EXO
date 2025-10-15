import HeaderPic from "../../../public/header.jpg"
import "../../app/globals.css"
import Logo from "../../../public/Logo.png"
import Image from "next/image"
import RechercheBar from "./inputcherche"
export default function header(){
    return(
        <header>
            <div className="HeaderPicBloc">
               <Image src={HeaderPic} alt="headerPicture" className="HeaderPicBloc"/>    
            </div>
            <Image src={Logo} alt="logo" className="LogoHeader"/>
            <div className="headerData">
                <h1>DÉCOUVREZ NOS RECETTES DU QUOTIDIEN,SIMPLES ET DÉLICIEUSES</h1>
                <RechercheBar />
            </div>
        </header>
    )
}