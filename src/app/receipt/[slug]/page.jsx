import { notFound } from "next/navigation";
import Data from "../../../data/receip.json"
import PageReceipt from "@/components/main/reciptPage/receiptPage";

export default async function receiptPage({ params }) {
    const { slug } = params;
    const DataReceipt = Data.find((e) => e.slug === slug)

    if (!DataReceipt) {
        notFound()
    } else {


        return (

            <PageReceipt
                picture={DataReceipt.image}
                Title={DataReceipt.name}
                item={DataReceipt.ingredients}
                time={DataReceipt.time}
                ustencil={DataReceipt.ustensils}
                appareil={DataReceipt.appliance}
                recette={DataReceipt.description}
            />
        )
    }
}