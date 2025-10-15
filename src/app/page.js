"use client";
import { useEffect, useState } from "react";
import Card from "../componements/cards/card";
import DataReceipt from "../data/receip.json";
import FilterInput from "../componements/filter/Filter";

export default function Home() {
  const [selectedAppliance, setAppliance] = useState("");
  const [selectedIngredient, setIngredient] = useState("");
  const [seletedUstencil, SetUstencil] = useState("")
  const [bReceipt, setReceipt] = useState(0)
  
  const filteredData = DataReceipt.filter(item => {
    const matchAppliance =
    selectedAppliance === "" || item.appliance === selectedAppliance;
    const matchIngredient =
    selectedIngredient === "" ||
    item.ingredients.some(ing => ing.ingredient === selectedIngredient);
    const matchUstencil =
    seletedUstencil === "" ||
    item.ustensils.includes(seletedUstencil)
    return matchAppliance && matchIngredient && matchUstencil;
    
  });

  const UstencilList = [...new Set(filteredData.flatMap(item => item.ustensils))]
  const AppareilList = [...new Set(filteredData.map(obj => obj.appliance))];
  const IngredientList = [...new Set(filteredData.flatMap(item => item.ingredients.map(ing => ing.ingredient))),];
  
  useEffect(() => {
    setReceipt(filteredData.length)
  }, [filteredData])
  
  function removeselection(selectedId){
    if(selectedId === "apliance") setAppliance("");
     if(selectedId === "ingredien") setIngredient("");
  }

  return (
    <>
      <div className="filterContainer"> 
       <FilterInput
          items={AppareilList}
          selector="appareil"
          onChange={setAppliance}
          itemSelected={selectedAppliance}
          RemoveClick={removeselection}
          selectedId="apliance"
          />
               

          
        <FilterInput
          items={IngredientList}
          selector="ingredient"
          onChange={setIngredient}
          itemSelected={selectedIngredient}
          selectedId="ingredien"
           RemoveClick={removeselection}
        />
        <FilterInput
          items={UstencilList}
          selector="ustencil"
          onChange={SetUstencil}
          itemSelected={seletedUstencil}
          selectedId="ustencil"
        />

        <p className="recetteNumber">{bReceipt} recettes</p>
      </div>
      <div className="containerReceipts">

        {filteredData.map((item, index) => (
          <Card
            key={index}
            ReceiptTitle={item.name}
            instruction={item.description}
            ingredient={item.ingredients}
            picture={item.image}
            time={item.time}
            recetslug={item.slug}
          />
        ))}
      </div>
    </>
  );
}
