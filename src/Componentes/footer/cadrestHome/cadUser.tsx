import { useState } from "react"
const Cadestre= ()=>{
    const [ValidEmail, SetEmail]= useState(0)

    const GetValue= (e)=>{
        const Email= /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        if(e.target.value(Email)){
            SetEmail(1)
        }else{
            SetEmail(0)
        }
    }
    return(
        <>
         <div className="w-[290px] h-[96px] flex flex-col justify-between mt-[8px]">
            <p className="font-semibold text-[#9F9F9F]">Newsletter</p>
            <label className="flex flex-row w-full justify-between">
                <input className="outline-none border-b-2 border-black" type="email" placeholder="Enter Your Email Adress" onChange={GetValue}/>
                <button className="font-semibold opacity-0 border-b-2 border-black text-black">SUBSCRIBE</button>
            </label>
            <p className={`text-red-500 opacity-${ValidEmail}`}>Email invalido</p>
         </div>
        </>
    )
}

export default Cadestre