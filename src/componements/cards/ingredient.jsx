export default function ingredient({name}){
    return(<>
        {name.map((item)=>(
            <div className="ingredient" key={`${item.ingredient}`}>
            <p>{item.ingredient}</p>
            <p>{item.quantity}{item.unit}</p>
        </div>
            
        ))}
        </>
    )
}