import './liingredient.css'

export default function listIngredient({ item }) {
    return (
        <>

            {item.map((e) => (
                <ul key={e.ingredient}>
                    <li className="ingredientName">{e.ingredient}</li>
                    <li className="ingredientQuantity">{e.quantity}{e.unit}</li>
                </ul>

            ))}
        </>
    )
}