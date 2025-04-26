import { createStore } from "redux";

// Definição do tipo dos itens no carrinho
interface CartItem {
  filterElement: {
    id: string | number;
    titleName: string;
    priceDiscount: string;
    imgItem: string;
  };
}

// Tipo do estado inicial
interface CartState {
  Statecart: CartItem[];
}

// Estado inicial tipado
const Init: CartState = { Statecart: [] };

// Reducer com a tipagem definida
const reducer = (state: CartState = Init, action: any): CartState => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, Statecart: [...state.Statecart, action.payload] };

    case "DELETE":
      return {
        ...state,
        Statecart: state.Statecart.filter(
          (product) =>
            String(product.filterElement.id) !== String(action.payload)
        ),
      };

    default:
      return state;
  }
};

// Criar o store
const Creatreducer = createStore(reducer);

export default Creatreducer;
