import './receiptpage.css'
import ListeIngredient from '../liIngredient/liingredient'
export default async function pageReceipt({ picture, Title,item }) {
    return (
        <div className='mainpage'>
            <img src={`/pictures/${picture}`} alt="" />
            <div>
                <h2>{Title}</h2>
                <ListeIngredient item={item} />
            </div>
        </div>
    )
}