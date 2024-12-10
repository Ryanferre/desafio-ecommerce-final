import { FaLocationPin, FaPhone, FaClock } from "react-icons/fa6"
import ImgContact from "./imgContact/ShopBanner.png"
import MarckComponent from "../componentesExternos/MarckAfterFooter"


const styleTitlleIten= 'font-semibold text-[19px]'
const StyleItensInform= 'flex flex-row gap-6'
const stylelabel= 'w-[190px]'
const styleInput= 'h-[52px] w-[450px] border border-[#9F9F9F] rounded-[5px]'
const StylelabelInputs= 'h-[100px] flex flex-col justify-between'
const StyleTitlleInput= 'text-[16px] font-semibold'
const Contact= ()=>{
    return(
        <>
          <section>
            <div className="w-full h-[310px] bg-contain flex flex-col items-center justify-center" style={{backgroundImage: `url(${ImgContact}`}}>
                <h1 className="font-semibold text-[44px]">Contact</h1>
                <div className="flex flex-row items-center justify-around w-[120px]">
                    <p className="font-semibold text-[16px]">Home</p>
                    <div className="flex flex-col items-center justify-center h-[20px] gap-[3px] mt-[4px]">
                        <span className="content boder w-[10.4px] h-[2px] transition-transform rotate-[38deg] inline-block bg-black"></span>
                        <span className="content boder w-[10.4px] h-[2px] transition-transform -rotate-[39deg] inline-block bg-black"></span>
                    </div>
                    <p>Contact</p>
                </div>
            </div>
            <div className="h-[950px] flex flex-col items-center pt-20 px-[300px] gap-[100px] justify-between">
                <div className="w-[580px] h-[100px] justify-between flex flex-col items-center">
                    <h2 className="text-[30px] font-semibold">Get In Touch With Us</h2>
                    <p className="text-center text-[#9F9F9F]">For More Information About Our Product & Services.
                         Please Feel Free To Drop Us An Email. Our Staff
                          Always Be There To Help You Out. Do Not Hesitate!</p>
                </div>
                <div className="flex flex-row h-full w-full justify-between">
                    <ul className="flex flex-col h-[370px] justify-between">
                        <li className={StyleItensInform}>
                            <span className="mt-0"><FaLocationPin /></span>
                            <label className={stylelabel}>
                                <p className={styleTitlleIten}>Address</p>
                                <p>236 5th SE Avenue, New York NY10000, United States</p>
                            </label>
                        </li>
                        <li className={StyleItensInform}>
                            <span className="mt-[7px]"><FaPhone /></span>
                            <label className={stylelabel}>
                                <p className={styleTitlleIten}>Phone</p>
                                <p>Mobile: +(84) 546-6789
                                   Hotline: +(84) 456-6789</p>
                            </label>
                        </li>
                        <li className={StyleItensInform}>
                            <span className="mt-2"><FaClock /></span>
                            <label className={stylelabel}>
                                <p className={styleTitlleIten}>Working Time</p>
                                <p>Monday-Friday: 9:00 - 22:00
                                   <br/>Saturday-Sunday: 9:00 - 21:00</p>
                            </label>
                        </li>
                    </ul>
                    <div className="h-[620px] flex flex-col justify-between">
                        <ul className="flex flex-col justify-between h-[520px]">
                            <li>
                                <label className={StylelabelInputs}>
                                    <p className={StyleTitlleInput}>Your name</p>
                                    <input className={styleInput} type="texte" />
                                </label>
                            </li>
                            <li>
                                <label className={StylelabelInputs}>
                                    <p className={StyleTitlleInput}>Email address</p>
                                    <input className={styleInput} type="texte" />
                                </label>
                            </li>
                            <li>
                                <label className={StylelabelInputs}>
                                    <p className={StyleTitlleInput}>Subject</p>
                                    <input className={styleInput} type="texte" />
                                </label>
                            </li>
                            <li>
                                <label className="h-[145px] flex flex-col justify-between">
                                    <p className={StyleTitlleInput}>Message</p>
                                    <input className="h-[100px] w-[450px] border border-[#9F9F9F] rounded-[5px]" type="texte" />
                                </label>
                            </li>
                        </ul>
                        <button className="bg-[#B88E2F] text-white w-[237px] h-[55px] rounded-[5px]">Submit</button>
                    </div>
                </div>
            </div>
          </section>
          <MarckComponent />
        </>
    )
}

export default Contact