import "./filter.css"
import { useState } from "react";
export default function filter({ ValueFilter}) {
    const [isOpen, setIsOpen] = useState(false)
    const [tsest,settesest]=useState("")
    const [selected,setselected]=useState("")
    const ValuFiltered = ValueFilter.filter(item=> item.toLowerCase().includes(tsest.toLowerCase()))
    const handleItemClick = (item)=>{setselected(item)}
    return (
        <div className={isOpen ? "selectFilterMain2" : "selectFilterMain"}>
            <div onClick={() => setIsOpen(!isOpen)} className="headerFilter">
                <span>Ingrédients</span>
                <span >v</span>
            </div>
            {isOpen && (
                <div>
                        <input type="text" onChange={(e)=> settesest(e.target.value)}/>
                    <ul>
                        {ValuFiltered.map((item) =>
                            <li onClick={() => handleItemClick(item)} className={selected === item ? "yellow":" "} key={item}>{item}</li>)}
                    </ul>
                </div>
            )}
        </div>
    )
}