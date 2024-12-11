import { createContext, useState, ReactNode } from "react";

// Definindo o tipo para o contexto
interface FilterItensContextType {
  itensData: string;
  moveModal: number;
  ItensCart: number;
  BannerCart: string;
  removedIten: number;
  getData: (e: string) => void;
  moveMargin: (e: number) => void;
  getItenscart: (e: number) => void;
  setRemoveIten: (e: number)=> void;
  MoveBannerToCart: (e: string)=> void
}

// Inicializando o contexto com valores padrão e tipos
export const FilterItens = createContext<FilterItensContextType>({
  itensData: '',
  moveModal: 96,
  ItensCart: 0,
  removedIten: 0,
  BannerCart: 'hidden',
  getData: () => {},
  moveMargin: () => {},
  getItenscart: () => {},
  setRemoveIten: ()=> {},
  MoveBannerToCart: ()=> {}
});

// Componente Provider para fornecer os dados do contexto
export const ItenSearch = ({ children }: { children: ReactNode }) => {
  const [itensData, setItens] = useState<string>('');
  const [moveModal, setMargin] = useState<number>(0);
  const [ItensCart, setIten] = useState<number>(0);
  const [removedIten, setRemove]= useState<number>(0)
  const [BannerCart, setBanner]= useState<string>('hidden')

  const getData = (evt: string) => {
    setItens(evt);
  };

  const moveMargin = (evt: number) => {
    setMargin(evt);
  };

  const getItenscart = (e: number) => {
    setIten(e);
  };

  const setRemoveIten= (e: number)=>{
    setRemove(e)
  }

  const MoveBannerToCart= (e: string)=>{
    setBanner(e)
  }

  return (
    <FilterItens.Provider value={{ itensData, getData, moveMargin, moveModal, ItensCart, getItenscart, setRemoveIten, removedIten, MoveBannerToCart, BannerCart}}>
      {children}
    </FilterItens.Provider>
  );
};

export default FilterItens;
