import { Link } from "react-router-dom";
import { SignedIn, SignedOut, UserButton } from '@clerk/clerk-react'
import AddedItencart from "./CompoHeader/IconCart.tsx";

/*icones */
import { FaUser } from "react-icons/fa"

const Header= ()=>{
    return(
        <>
         <header className="flex flex-row items-center justify-between px-10 h-[75px]">

            {/*logo*/}
            <div className="flex flex-row w-[178px] items-center justify-between">
                <img src="https://i.postimg.cc/FRrJpCJN/Icon-Header.png" />
                <h1 className="font-bold text-[35px]">Furniro</h1>
            </div>

            {/*lista*/}
            <ul className="flex flex-row w-[400px] align-center justify-between">
                <li className="font-semibold"><Link to="/">Home</Link></li>
                <li className="font-semibold"><Link to="/shop">Shop</Link></li>
                <li className="font-semibold"><Link to="">About</Link></li>
                <li className="font-semibold"><Link to="/Contact">Contact</Link></li>
            </ul>

            {/*user*/}
            <div className="flex flex-row items-center justify-around w-[100px]">
            <SignedIn>
              <UserButton />
            </SignedIn>
            <SignedOut>
                <Link className="flex flex-row items-center" to="/Login"><FaUser />!</Link>
            </SignedOut>
            <AddedItencart />
            </div>
         </header>
        </>
    )
}

export default Header