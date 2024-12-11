import NavList from "./ListFooter/List"
import Cadestre from "./cadrestHome/cadUser"

/*icones */
import { FaFacebook } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"


const Footer= ()=>{
    return(
        <>
         <section className="h-[440px] flex flex-col items-center justify-center px-[100px]">
            <div className="w-full h-[320px] border-b flex flex-row mt-8">
               <div className="h-[223px] w-[300px] flex flex-col justify-between">
                    <h6 className="font-bold text-[24px]">Funiro</h6>
                    <div className="w-[300px]">
                        <p className="text-[#9F9F9F]">400 University Drive Suite 200 Coral Gables,</p>
                        <p className="text-[#9F9F9F]">FL 33134 USA</p>
                    </div>

                    <ul className="flex flex-row w-[169px] justify-between">
                        <li className="border p-[8px] rounded-[50px]" style={{boxShadow: '1px 2px 3px gray'}}>
                            <a href="https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://pt-br.facebook.com/login/device-based/regular/login/&ved=2ahUKEwj5i8impKCKAxULO7kGHdn7HkUQmuEJegQIEhAB&usg=AOvVaw2MezuOQmbz6LjDCjlRi0-K"><FaFacebook /></a>
                        </li>

                        <li className="border p-[8px] rounded-[50px]" style={{boxShadow: '1px 2px 3px gray'}}>
                            <a href="https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.prod.instagram.com/accounts/login/%3Fnext%3D%252Fglobalnews%252Ffeed%252F%26source%3Dprofile_feed_tab%26hl%3Dpt-br&ved=2ahUKEwiHxr6wpKCKAxWTEbkGHVhDCdAQjBB6BAgNEAE&usg=AOvVaw2c_PcfotKRmSY3c9GbY6Su"><FaInstagram /></a>
                        </li>

                        <li className="border p-[8px] rounded-[50px]" style={{boxShadow: '1px 2px 3px gray'}}>
                            <a href="https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://twitter.com/i/flow/login&ved=2ahUKEwi1466fpaCKAxXhErkGHVAAGYsQFnoECBAQAQ&usg=AOvVaw3eA22KztHKlK4M0EWkfpdG"><FaTwitter /></a>
                        </li>

                        <li className="border p-[8px] rounded-[50px]" style={{boxShadow: '1px 2px 3px gray'}}>
                            <a href="https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://br.linkedin.com/company/login&ved=2ahUKEwiMmZ2xo6CKAxUiG7kGHY3CMwYQmuEJegQIEhAB&usg=AOvVaw3nMEdONgcpgqgK2S1gXGj_"><FaLinkedin /></a>
                        </li>
                    </ul>
               </div>
               <NavList />
               <Cadestre />
            </div>
            <p className="my-8 w-full">2023 furino.All rights reverved</p>
         </section>
        </>
    )
}

export default Footer