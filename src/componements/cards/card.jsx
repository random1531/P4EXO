import "../../../src/app/page.module.css"
import Ingredient from "./ingredient"
import Link from "next/link"   
import Image
 from "next/image"
export default function card({ReceiptTitle,instruction,ingredient,picture,time,recetslug}){
return(
    <Link href={`/receipt/${recetslug}`} >
    <article className="cardContainer">
        <div className="pictureBlock">
        <Image
  src={`/pictures/${picture}`}
  alt="Nom de la recette"
  width={380} 
  height={253} 
  className="pict"
/>
        <span className="timeReceip">{time} min</span>
        </div>
        <div className="carContainerText">
            <h3>{ReceiptTitle}</h3>
            <div className="carContainerReceip">
                <p>RECETTE</p>
                <p className="receipInstruction">{instruction}</p>
            </div>
            <div className="carContainerIngredient">
                <Ingredient name={ingredient}/>
            </div>
        </div>
    </article>
  </Link>
)
}