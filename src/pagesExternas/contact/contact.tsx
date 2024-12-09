import { FaFacebook } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"

const Contact= ()=>{
    return(
        <section>
             <div className="m-auto bg-[#FFF3E3] w-[400px] h-[300px] flex flex-col items-center my-20 justify-start gap-9 rounded-[15px]">
            <div>
                <h1 className="text-[52px] text-center w-full text-[#B88E2F] font-bold">Wellcome!</h1>
                <p className="text-center text-[#9F9F9F]">Log in with your social network</p>
            </div>
             <ul className="flex flex-row w-[240px] justify-around h-[50px]">
                <a href="https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://pt-br.facebook.com/login/device-based/regular/login/&ved=2ahUKEwi9nNPwq5uKAxWtppUCHXAYLrQQjBB6BAgREAE&usg=AOvVaw2MezuOQmbz6LjDCjlRi0-K" className="border py-[4px] px-[16px] rounded-[50px] flex items-center justify-center" style={{boxShadow: '1px 2px 3px gray'}}>
                    <li>
                        <FaFacebook />
                    </li>
                </a>
                <a href="https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://br.linkedin.com/company/login&ved=2ahUKEwjp15KBrJuKAxXDrZUCHeKHDewQjBB6BAgQEAE&usg=AOvVaw3nMEdONgcpgqgK2S1gXGj_" className="border py-[4px] px-[16px] rounded-[50px] flex items-center justify-center" style={{boxShadow: '1px 2px 3px gray'}}>
                    <li>
                        <FaLinkedin />
                    </li>
                </a>
                <a href="https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://github.com/&ved=2ahUKEwi1h-qsrJuKAxWtu5UCHcK6AZ8QFnoECAwQAQ&usg=AOvVaw38IHvcyBra8HGhmSxvlCGw" className="border py-[4px] px-[16px] rounded-[50px] flex items-center justify-center" style={{boxShadow: '1px 2px 3px gray'}}>
                    <li>
                        <FaTwitter />
                    </li>
                </a>
             </ul>
         </div>
        </section>
    )
}

export default Contact