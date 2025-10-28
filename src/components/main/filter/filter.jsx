import "./filter.css"
import { useState } from "react";
export default function filter({ ValueFilter }) {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className="selectFilterMain">
            <div onClick={() => setIsOpen(!isOpen)}>
                <span>Ingrédients</span>
                <span>v</span>
            </div>
            {isOpen && (
                <div>
                    {ValueFilter.map((item) =>
                        <p key={item}>{item}</p>)}
                </div>
            )}
        </div>
    )
}