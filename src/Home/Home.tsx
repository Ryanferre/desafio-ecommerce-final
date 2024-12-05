import Header from "../Componentes/Header/Header.tsx";
import Footer from "../Componentes/footer/footer.tsx";
import BannerSection from "./Componentes/SectionBanner/Banner.tsx";
import BrowserHome from "./Componentes/BrowserRanger/BrowserRanger.tsx";
import Destaque from "./Componentes/Productsdestac/ProductsHome.tsx";
import Carrosel from "./Componentes/carrosel/carrosel.tsx";
import FileImg from "./Componentes/galeriaItens/Galeria.tsx";
import { Outlet } from "react-router-dom";

const HomePage= ()=>{
    return(
        <>
         <BannerSection />
         <BrowserHome />
         <Destaque />
         <Carrosel />
         <FileImg />
         <Footer />
        </>
    )
}

export default HomePage