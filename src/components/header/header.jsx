"use client";
import "./header.css"
import Logo from "../../../public/Logo.png"
import BackgroundPicture from "../../../public/header.jpg"
import Image from "next/image"
import { usePathname } from "next/navigation";
import {useContext} from 'react'
import { SearchContext } from "@/context/SearchContext";

export default function header() {
  const url = usePathname()
   const { search, setSearch } = useContext(SearchContext);

  const handleChange = (item) => {
    setSearch(item.target.value)
  }

  console.log(search.length < 3 ? "":search);
  if (typeof url !== "string") {
    return null;
  }
  return (
    <header className={url === "/" ? "mainheader" : "reduceheader"}>
      {url === "/" && (
        <>
          <h1 className="headerTextSite">DÉCOUVREZ NOS RECETTES DU QUOTIDIEN,SIMPLES ET DÉLICIEUSES</h1>
          <input type="search" className="inputshearch" placeholder="Rechercher une recette, un ingrédient, ..." onChange={handleChange} value={search}/>
        </>

      )}
      <Image src={Logo} alt="" className="logoheader" />
      <Image src={BackgroundPicture} className="backgroundpictureheader" alt="" />
    </header>
  )
}