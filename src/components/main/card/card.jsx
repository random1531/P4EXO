import "./card.css"
import Image from "next/image"
import Link from "next/link"
import Liingredient from "../../main/liIngredient/liingredient"

export default function cards({ time, picture, namereceipt, description, ingredient }) {
    return (
        
        <article>
            <div className="headerCard">
                <span>{time} min</span>
                <Image src={`/pictures/${picture}`} className="picturecard" alt="" width={380} height={253} />
            </div>
            <div className="textcontentCard">
                <h3>{namereceipt}</h3>
                <div className="cardInformationreceipt">
                    <div>

                        <span className="spanCard">RECETTE</span>
                        <p className="textcontentCardDescription">{description}</p>
                    </div>
                    <div>
                        <span className="spanCard">Ingrédients</span>
                        <div className="ingredientListCard">
                         <Liingredient item={ingredient}/>
                        </div>
                    </div>
                </div>
            </div>
        </article>
   
    )
}