import { FaLocationPin, FaPhone, FaClock } from "react-icons/fa6"
import ImgContact from "./imgContact/ShopBanner.png"

const Contact= ()=>{
    return(
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
            <div>
                <div>
                    <h2>Get In Touch With Us</h2>
                    <p>For More Information About Our Product & Services.
                         Please Feel Free To Drop Us An Email. Our Staff
                          Always Be There To Help You Out. Do Not Hesitate!</p>
                </div>
                <div>
                    <ul>
                        <li>
                            <FaLocationPin />
                            <label>
                                <p>Address</p>
                                <p>236 5th SE Avenue, New York NY10000, United States</p>
                            </label>
                        </li>
                        <li>
                            <FaPhone />
                            <label>
                                <p>Phone</p>
                                <p>Mobile: +(84) 546-6789
                                   Hotline: +(84) 456-6789</p>
                            </label>
                        </li>
                        <li>
                            <FaClock />
                            <label>
                                <p>Monday-Friday: 9:00 - 22:00
                                   Saturday-Sunday: 9:00 - 21:00</p>
                            </label>
                        </li>
                    </ul>
                    <div>
                        <ul>
                            <li>
                                <label>
                                    <p>Your name</p>
                                    <input type="texte" />
                                </label>
                            </li>
                            <li>
                                <label>
                                    <p>Your name</p>
                                    <input type="texte" />
                                </label>
                            </li>
                            <li>
                                <label>
                                    <p>Your name</p>
                                    <input type="texte" />
                                </label>
                            </li>
                            <li>
                                <label>
                                    <p>Your name</p>
                                    <input type="texte" />
                                </label>
                            </li>
                        </ul>
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact