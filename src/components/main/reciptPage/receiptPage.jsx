import './receiptpage.css'
import ListeIngredient from '../liIngredient/liingredient'
export default async function pageReceipt({ picture, Title, item, time, ustencil,appareil,recette }) {
    return (
        <div className='mainpage'>
            <img className='pictureReceipt' src={`/pictures/${picture}`} alt="" />
            <div className='mainpageleft'>
                <h2>{Title}</h2>
                <div className='gap'>
                    <p className='spanCard'>Temps de préparation</p>
                    <span className='timesetup'>{time} min</span>

                </div>
                <div className='gap'>
                    <p className='spanCard'>Ingredient</p>
                    <div className='ingredientListemainpage'>
                        <ListeIngredient item={item} />
                    </div>
                </div>
                <div className='gap'>
                    <p className='spanCard'>Ustensiles nécessaires</p>
                    <div>
                        {ustencil.map((item) =>
                            <div  key={item}>
                                <p>{item}</p>
                                <p className='ingredientQuantity'>1</p>
                            </div>)}
                    </div>
                </div>
                <div className='gap'>
                    <p className='spanCard'>Appareils nécessaires</p>
                    <div>
                        <p>{appareil}</p>
                    </div>
                </div>
                <div className='gap'>
                     <p className='spanCard'>RECETTE</p>
                     <div>
                        <p className='descriptionreceiptpage'>{recette}</p>
                     </div>
                </div>
            </div>
        </div>
    )
}