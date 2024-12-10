import { useContext, useEffect, useState } from "react"
import FilterItens from "../../HookCustum/ContexData"

const FilterBox= ({moveBox})=>{
    const {getData}= useContext(FilterItens)
    const [checkedIten1, setIten1]= useState(false)
    const [checkedIten2, setIten2]= useState(false)
    const [checkedIten3, setIten3]= useState(false)
    const [checkedIten4, setIten4]= useState(false)

    const [Move, setMove]= useState(300)
    console.log(Move)

    const VisibleBox= ()=>{
        if(Move==0){
            setMove(300)
        }
    }

    useEffect(()=>{
        setMove(moveBox)
    }, [moveBox])

    const [valid1, setvalue1]= useState(false)
    const [valid2, setvalue2]= useState(false)
    const [valid3, setvalue3]= useState(false)
    const [valid4, setvalue4]= useState(false)
    

    const VerifyIten1= (e)=>{
        getData('sofar')
        if(checkedIten1===false){
            setIten1(e.target.checked)//checked
            setIten2(false)
            setIten3(false)
            setIten4(false)
            setvalue1(false)//habilitado paa click
            //desabilitados para click
            setvalue2(true)
            setvalue3(true)
            setvalue4(true)

        }

    }

    const VerifyIten2= (e)=>{
        getData('cama')
        if(checkedIten2===false){
            setIten2(e.target.checked)//checked
            setIten1(false)
            setIten3(false)
            setIten4(false)
            setvalue2(false)//habilitado para click
            //desabilitados para click
            setvalue1(true)
            setvalue3(true)
            setvalue4(true)
        }
    }

    const VerifyIten3= (e)=>{
        getData('Asento')
        if(checkedIten3===false){
            setIten3(e.target.checked)//checked
            setIten1(false)
            setIten2(false)
            setIten4(false)
            setvalue3(false)//habilitado para click
            //desabilitados para click
            setvalue1(true)
            setvalue2(true)
            setvalue4(true)
        }
    }
    const VerifyIten4= (e)=>{
        getData('Asento')
        if(checkedIten4===false){
            setIten4(e.target.checked)//checked
            setIten1(false)
            setIten2(false)
            setIten3(false)
            setvalue4(false)//habilitado para click
            //desabilitados para click
            setvalue1(true)
            setvalue2(true)
            setvalue3(true)
        }
    }

    const VerifyMarker1= ()=>{
        setvalue1(false)
    }

    const VerifyMarker2= ()=>{
        setvalue2(false)
    }

    const VerifyMarker3= ()=>{
        setvalue3(false)
    }

    const VerifyMarker4= ()=>{
        setvalue4(false)
    }

    
    
    return(
        <div className={`absolute inset-0 h-[75px] w-[250px] flex flex-row items-center bg-white border justify-around rounded-[10px]`} style={{marginLeft: `-${Move}px`}}>
            <ul className="flex flex-row w-52 justify-around">
                <li>
                    <label className="flex flex-col items-center justify-around h-full">
                     <p>Sofar</p>
                     <div className="flex flex-row items-center relative">
                        <input type="checkbox" id="classe2" className="hidden peer" onChange={VerifyIten1} disabled={valid1} checked={checkedIten1}/>
                        <label htmlFor="classe2" className="w-7 h-7 flex items-center justify-center rounded-full border-[1px] border-transparent cursor-pointer peer-checked:border-[#B88E2F]"onMouseOver={VerifyMarker1}></label>
                        <span className="w-[11px] h-[11px] rounded-full absolute left-[8.3px] bg-[#D8D8D8] peer-checked:bg-[#B88E2F] peer-checked:border-[#B88E2F] cursor-pointer" onMouseOver={VerifyMarker1}></span>
                     </div>
                    </label>
                </li>
                <li>
                    <label className="flex flex-col items-center justify-around h-full">
                    <p>Cama</p>
                    <div className="flex flex-row items-center relative">
                        <input type="checkbox" id="classe2" className="hidden peer" onChange={VerifyIten2} disabled={valid2} checked={checkedIten2}/>
                        <label htmlFor="classe2" className="w-7 h-7 flex items-center justify-center rounded-full border-[1px] border-transparent cursor-pointer peer-checked:border-[#B88E2F]"onMouseOver={VerifyMarker2}></label>
                        <span className="w-[11px] h-[11px] rounded-full absolute left-[8.3px] bg-[#D8D8D8] peer-checked:bg-[#B88E2F] peer-checked:border-[#B88E2F] cursor-pointer" onMouseOver={VerifyMarker2}></span>
                     </div>
                    </label>
                </li>
                <li>
                    <label className="flex flex-col items-center justify-around h-full">
                    <p>Asento</p>
                    <div className="flex flex-row items-center relative">
                        <input type="checkbox" id="classe2" className="hidden peer" onChange={VerifyIten3} disabled={valid3} checked={checkedIten3}/>
                        <label htmlFor="classe2" className="w-7 h-7 flex items-center justify-center rounded-full border-[1px] border-transparent cursor-pointer peer-checked:border-[#B88E2F]"onMouseOver={VerifyMarker3}></label>
                        <span className="w-[11px] h-[11px] rounded-full absolute left-[8.3px] bg-[#D8D8D8] peer-checked:bg-[#B88E2F] peer-checked:border-[#B88E2F] cursor-pointer" onMouseOver={VerifyMarker3}></span>
                     </div>
                    </label>
                </li>
                <li>
                    <label className="flex flex-col items-center justify-around h-full">
                    <p>Mesas</p>
                    <div className="flex flex-row items-center relative">
                        <input type="checkbox" id="classe2" className="hidden peer" onChange={VerifyIten4} disabled={valid4} checked={checkedIten4}/>
                        <label htmlFor="classe2" className="w-7 h-7 flex items-center justify-center rounded-full border-[1px] border-transparent cursor-pointer peer-checked:border-[#B88E2F]"onMouseOver={VerifyMarker4}></label>
                        <span className="w-[11px] h-[11px] rounded-full absolute left-[8.3px] bg-[#D8D8D8] peer-checked:bg-[#B88E2F] peer-checked:border-[#B88E2F] cursor-pointer" onMouseOver={VerifyMarker4}></span>
                     </div>
                    </label>
                </li>
            </ul>
            <button onClick={VisibleBox}>
                <div className="flex flex-col items-center justify-center h-[20px] gap-[5.4px]">
                    <span className="content boder w-[13px] h-[2px] transition-transform -rotate-[38deg] inline-block bg-[#9F9F9F]"></span>
                    <span className="content boder w-[13px] h-[2px] transition-transform rotate-[39deg] inline-block bg-[#9F9F9F]"></span>
                </div>
            </button>
        </div>
    )
}

export default FilterBox