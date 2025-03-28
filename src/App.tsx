import Footer from "./Componentes/footer/footer.tsx"
import Header from "./Componentes/Header/Header.tsx"
import { Outlet } from "react-router-dom"
import { Provider } from "react-redux"
import Creatreducer from "./pagesExternas/Shop/ComponentesShop/itensList/redux/add.tsx"
import { FilterItens } from "./pagesExternas/Shop/HookCustum/ContexData.tsx"
import { useState } from "react"

//para passar os dados iniciais e utilizar nas paginas, preciso declarar o tipo tanto na
//app quanto no contexto(é importante lembrar que não é preciso declrar com os mesmo valores)
function App() {

  // Inicializando os estados
  const [itensData, setItens] = useState<string>('');
  const [moveModal, setMargin] = useState<number>(96);//modalFilter iniciando com -96
  const [ItensCart, setIten] = useState<number>(0);
  const [BannerCart, setBanner]= useState<string>('hidden')
  const [removedIten, setRemove]= useState<number>(0)

  // Funções para atualizar os estados
  const getData = (e: string) => {
    setItens(e);
  };

  const moveMargin = (e: number) => {
    setMargin(e);
  };

  const getItenscart = (e: number) => {
    setIten(e);
  };

  const MoveBannerToCart= (e: string)=>{
    setBanner(e)
  }
  const setRemoveIten= (e: number)=>{
    setRemove(e)
  }
  return (
    <>
    <Provider store={Creatreducer}>
      <FilterItens.Provider value={{itensData, getData, moveMargin, moveModal, ItensCart, getItenscart, BannerCart, MoveBannerToCart, setRemoveIten}}>
      <Header />
      <Outlet />
      <Footer />
      </FilterItens.Provider>
    </Provider>
    </>
  )
}

export default App
