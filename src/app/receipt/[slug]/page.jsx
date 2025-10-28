import Data from "../../../data/receip.json"


export default async function receiptPage({params}){
    const {slug}=params;
    const DataReceipt = Data.find((e)=>e.slug===slug)

    return(
        <>
        <p>{DataReceipt.slug}</p>
        </>
    )
}