"use client";
import Card from "../components/main/card/card";
import Data from "../data/receip.json";
import Filter from "../components/main/filter/filter";
import Link from "next/link";
import { useState } from "react";
export default function Home() {
  const [data, setdata] = useState(Data);
  const originalData = Data;
  const Appareil = originalData.map((item) => item.appliance);
  const Ustensiles = originalData.flatMap((item) => item.ustensils);
  const Ingredients = originalData.flatMap((item) =>
    item.ingredients.map((i) => i.ingredient)
  );
  const uniqueIngredients = [...new Set(Ingredients)];
  const uniqueUstensiles = [...new Set(Ustensiles)];
  const uniqueAppareil = [...new Set(Appareil)];
  console.log(data);

  const resetFilters = () => {
    setdata(originalData);
  };

  return (
    <main>
      <div className="filterMain">
        <div className="new">
          <Filter
            ValueFilter={uniqueAppareil}
            OnselectFilter={(item) =>
              setdata(originalData.filter((ite) => ite.appliance === item))
            }
            OnResetFilter={resetFilters}
          />
          <Filter
            ValueFilter={uniqueUstensiles}
            OnselectFilter={(item) =>
              setdata(
                originalData.filter((ite) => ite.ustensils.includes(item))
              )
            }
            OnResetFilter={resetFilters}
          />
          <Filter
            ValueFilter={uniqueIngredients}
            OnselectFilter={(item) =>
              setdata(
                originalData.filter((ite) =>
                  ite.ingredients.some((ing) => ing.ingredient === item)
                )
              )
            }
            OnResetFilter={resetFilters}
          />
        </div>
        <div>
          <span>{data.length} recettes</span>
        </div>
      </div>
      <div className="cardContente">
        {data.map((e) => (
          <Link key={e.slug} href={`receipt/${e.slug}`}>
            <Card
              time={e.time}
              picture={e.image}
              namereceipt={e.name}
              ingredient={e.ingredients}
              description={e.description}
            />
          </Link>
        ))}
      </div>
    </main>
  );
}
