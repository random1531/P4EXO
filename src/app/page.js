"use client";
import Card from "../components/main/card/card";
import Data from "../data/receip.json";
import Filter from "../components/main/filter/filter";
import Link from "next/link";
import { useState, useContext, useEffect } from "react";
import { SearchContext } from "../context/SearchContext";

export default function Home() {
  const [selectedIngredient, setselectedIngredient] = useState(null);
  const [selectedAppliance, setselectedAppliance] = useState(null);
  const [selectedUstensil, setselectedUstensil] = useState(null);
  const { search } = useContext(SearchContext);

  const originalData = Data.filter((item) =>
    (!selectedAppliance || item.appliance.toLowerCase() === selectedAppliance) &&
    (!selectedUstensil || item.ustensils.includes(selectedUstensil)) &&
    (!selectedIngredient || item.ingredients.some((ing) => ing.ingredient.toLowerCase() === selectedIngredient)) &&
    (!search || search.length < 3 ||
      item.slug.includes(search) ||
      item.description.includes(search) ||
      item.ustensils.includes(search) ||
      item.ingredients.some((ingred) => ingred.ingredient.includes(search)))
  );
  console.log(originalData)

  const Appareil = originalData.map((item) => item.appliance.toLowerCase());
  const Ustensiles = originalData.flatMap((item) => item.ustensils);
  const Ingredients = originalData.flatMap((item) =>
    item.ingredients.map((i) => i.ingredient.toLowerCase())
  );

  const uniqueIngredients = [...new Set(Ingredients)];
  const uniqueUstensiles = [...new Set(Ustensiles)];
  const uniqueAppareil = [...new Set(Appareil)];


  return (
    <main>
      <div className="filterMain">
        <div className="new">
          <Filter
            namefilter="Ingrédients"
            ValueFilter={uniqueIngredients}
            OnselectFilter={(item) =>
              setselectedIngredient(item)
            }
            OnResetFilter={() => setselectedIngredient(null)}
            selectedvalue={selectedIngredient}
          />
          <Filter
            namefilter="Appareils"
            ValueFilter={uniqueAppareil}
            OnselectFilter={(item) =>
              setselectedAppliance(item)
            }
            OnResetFilter={() => setselectedAppliance(null)}
            selectedvalue={selectedAppliance}
          />
          <Filter
            namefilter="Ustensiles"
            ValueFilter={uniqueUstensiles}
            OnselectFilter={(item) =>
              setselectedUstensil(item)
            }
            OnResetFilter={() => setselectedUstensil(null)}
            selectedvalue={selectedUstensil}
          />
        </div>
        <div>
          <span className="nbreceipt">{originalData.length} recettes</span>
        </div>
      </div>
      <div className="cardContente">
        {originalData && originalData.length > 0 ? (originalData.map((e) => (
          <Link key={e.slug} href={`receipt/${e.slug}`}>
            <Card
              time={e.time}
              picture={e.image}
              namereceipt={e.name}
              ingredient={e.ingredients}
              description={e.description}
            />
          </Link>
        ))) : (<p>Aucune recette trouvée pour {search}</p>)}
      </div>
    </main>
  );
}
