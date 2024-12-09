import { createContext, useState, ReactNode, useEffect } from "react";

// Definindo o tipo para o contexto
interface FilterItensContextType {
  itensData: string;
  moveModal: string;
  ItensCart: number;
  IdIten: [];
  BannerCart: string;
  removedIten: number;
  getData: (e: string) => void;
  moveMargin: (e: string) => void;
  getItenscart: (e: number) => void;
  setIdIten: (e: number)=> void;
  setRemoveIten: (e: number)=> void;
  MoveBannerToCart: (e: string)=> void
}

// Inicializando o contexto com valores padrão e tipos
export const FilterItens = createContext<FilterItensContextType>({
  itensData: '',
  moveModal: '96',
  ItensCart: 0,
  IdIten: [],
  removedIten: 0,
  BannerCart: 'hidden',
  getData: () => {},
  moveMargin: () => {},
  getItenscart: () => {},
  setIdIten: ()=> {},
  setRemoveIten: ()=> {},
  MoveBannerToCart: ()=> {}
});

// Componente Provider para fornecer os dados do contexto
export const ItenSearch = ({ children }: { children: ReactNode }) => {
  const [itensData, setItens] = useState<string>('');
  const [moveModal, setMargin] = useState<string>('0');
  const [ItensCart, setIten] = useState<number>(0);
  const [removedIten, setRemove]= useState<number>(0)
  const [BannerCart, setBanner]= useState<string>('hidden')

  const getData = (evt: string) => {
    setItens(evt);
  };

  const moveMargin = (evt: string) => {
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
    <FilterItens.Provider value={{ itensData, getData, moveMargin, moveModal, ItensCart, getItenscart, setRemoveIten, removedIten, MoveBannerToCart, BannerCart }}>
      {children}
    </FilterItens.Provider>
  );
};

export default FilterItens;
