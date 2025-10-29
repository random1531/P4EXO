"use client";
import Card from "../components/main/card/card"
import Data from "../data/receip.json"
import Filter from "../components/main/filter/filter"
import Link from "next/link"

export default function Home() {
const Appareil = Data.map(item => item.appliance)
const Ustensiles = Data.flatMap(item => item.ustensils)
const Ingredients = Data.flatMap(item=> item.ingredients.map((i=>i.ingredient)))
const uniqueIngredients = [...new Set(Ingredients)]
const uniqueUstensiles = [...new Set(Ustensiles)]
const uniqueAppareil = [...new Set(Appareil)]
console.log(uniqueIngredients)

  return (
    <div className="cardContente">
      <div className="new">
        <Filter ValueFilter={uniqueAppareil} />
         <Filter ValueFilter={uniqueUstensiles} />
          <Filter ValueFilter={uniqueIngredients} />
      </div>
      {Data.map((e) => (
        <Link key={e.slug}  href={`receipt/${e.slug}`}>
        <Card 
        time={e.time} 
        picture={e.image} 
        namereceipt={e.name} 
        ingredient={e.ingredients}
        description={e.description} />
        </Link>
      ))}
    </div>
  );
}
