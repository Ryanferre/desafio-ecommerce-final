import FilterItens from "../../../pagesExternas/Shop/HookCustum/ContexData"
import { useContext, useEffect, useState } from "react";
import { FaCartShopping } from "react-icons/fa6"


const AddedItencart= ()=>{
    const {ItensCart, MoveBannerToCart}= useContext(FilterItens)
    const [Added, setAdded]= useState<number>(ItensCart)

    const MoverBanner= ()=>{
        MoveBannerToCart('flex')
    }
    useEffect(()=>{
        setAdded(ItensCart)
    }, [ItensCart])

    return(
            <div className="relative h-8 w-10 flex flex-col mb-4 justify-between items-center" onClick={MoverBanner}>
                <span className="flex flex-col items-center justify-center bg-black -mr-3 w-[18px] h-[18px] z-0 rounded-[50px]"><p className="text-white text-[12px]">{Added}</p></span>
                <FaCartShopping />
            </div>
    )
}

export default AddedItencart