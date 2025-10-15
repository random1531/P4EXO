import { notFound } from "next/navigation";
import DataReceipt from "../../../data/receip.json";


async function fetchReceip(slug){
    return DataReceipt.find(e => e.slug===slug)
}


export default async function receipt({params}){
    const {slug} = params
    const receipt  = await(fetchReceip(slug))
    if(!receipt){
        notFound();
    }else{

        return(
            <>
            <div>{receipt.id}</div>
            <p>{receipt.name}</p>
            <p>{receipt.description}</p>
            </>
        )
    }
}