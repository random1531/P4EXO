"use client";
import "./header.css"
import Logo from "../../../public/Logo.png"
import BackgroundPicture from "../../../public/header.jpg"
import Image from "next/image"
import { usePathname } from "next/navigation";

export default function header(){
    const url = usePathname()
    console.log(url)
     if (typeof url !== "string") {
        return null; 
    }
    return(
        <header className={url === "/" ? "mainheader" : "reduceheader"}>
          {url === "/" && (
            <>
              <h1 className="headerTextSite">DÉCOUVREZ NOS RECETTES DU QUOTIDIEN,SIMPLES ET DÉLICIEUSES</h1>
              <input type="text" className="inputshearch"  placeholder="Rechercher une recette, un ingrédient, ..." />
            </>

          )}
            <Image src={Logo} alt="" className="logoheader"/>
           <Image src={BackgroundPicture} className="backgroundpictureheader" alt=""/>
        </header>
    )
}