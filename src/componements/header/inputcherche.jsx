import loupe from "../../../public/loupe.svg"
import Image from "next/image"

export default function inputrecherche(){
    return(
       <label htmlFor="" className="new">
        <input type="text" placeholder="Rechercher une recette, un ingrédient, ..."/>
        <div className="loupe">

        <Image src={loupe} alt="a" />
        </div>
       </label>
    )
}