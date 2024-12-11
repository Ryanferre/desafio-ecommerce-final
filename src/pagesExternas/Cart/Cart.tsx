import MarckComponent from "../componentesExternos/MarckAfterFooter"
import { useContext } from "react";
import FilterItens from "../Shop/HookCustum/ContexData";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useState } from "react";


type FilterElement = {
    id: number;
    titleName: string;
    priceDiscount: string;
    imgItem: string;
    Quant: number
  };
  
  type ItensCart = {
    filterElement: FilterElement;
  };
  

const Cart = ()=>{
    const products = useSelector((state) => state.Statecart);

    const [AddTocart, setAdd] = useState<number>(0);//adiciomando itens
    const [removeTotal, setRemove] = useState<number>(0);//quantidade de vezes que retiro
    const [AddRepeated, setRepeated] = useState<string []> ([]);//array com o id de cada item(é aqui que selecino todos os itens independetemente se ele se repete ou não)
    const [filterRepeated, setItenRepeated]= useState<ItensCart []>([]);//array com somente um item

    const StateCart = useSelector((state) => state.Statecart);


    useEffect(()=>{
        const widthArr= products

        const f= widthArr.map((elemnt)=>(//adiciona o total de item repetidos
          elemnt.filterElement.id
        ))
        setRepeated(f)
  
        const filterRepeatedItem= products.filter((element, i, s)=>(//seleciona somente um elemento
          i === s.findIndex((e) => e.filterElement.id === element.filterElement.id)
        )).map((element) => ({...element,...element.filterElement, Quant: 0}));
  
        setItenRepeated(filterRepeatedItem)
      }, [products])

      //quantas vezes o elemento de repete
      useEffect(()=>{
        const updatedProducts = [...products]; // Faz uma cópia
  
        for (let i = 0; i < updatedProducts.length; i++) {
          // Conta quantas vezes o id aparece no array AddRepeated
          const count = AddRepeated.filter((id) => id === updatedProducts[i].filterElement.id).length;
      
          // Atualiza a propriedade newProperty com a contagem
          updatedProducts[i].filterElement.Quant = count;
        }
        
        console.log(AddRepeated)
      }, [AddRepeated, filterRepeated])


      useEffect(()=>{
        filterRepeated.map((element)=>{
            
        })
      })

      //Incrementa o valor de Quant
      const incrementQuant = (id: number) => {
        setItenRepeated((prevState) =>
          prevState.map((item) =>
            item.filterElement.id === id
              ? {
                  ...item,
                  filterElement: {
                    ...item.filterElement,
                    Quant: item.filterElement.Quant + 1,
                  },
                }
              : item
          )
        );
      };
    
      // Decrementa o valor de Quant
      const decrementQuant = (id: number) => {
        setItenRepeated((prevState) =>
          prevState.map((item) => item.filterElement.id === id && item.filterElement.Quant > 0 ? {...item, filterElement: {...item.filterElement, Quant: item.filterElement.Quant - 1, }, } : item));
      };
    return(
        <>
          <div className="w-full h-[310px] bg-contain flex flex-col items-center justify-center" style={{backgroundImage: `url(https://primertesteryan.s3.us-east-2.amazonaws.com/ShopBanner.png`}}>
                <h1 className="font-semibold text-[44px]">Shop</h1>
                <div className="flex flex-row items-center justify-around w-[120px]">
                    <p className="font-semibold text-[16px]">Home</p>
                    <div className="flex flex-col items-center justify-center h-[20px] gap-[3px] mt-[4px]">
                        <span className="content boder w-[10.4px] h-[2px] transition-transform rotate-[38deg] inline-block bg-black"></span>
                        <span className="content boder w-[10.4px] h-[2px] transition-transform -rotate-[39deg] inline-block bg-black"></span>
                    </div>
                    <p>Shop</p>
                </div>
            </div>
            <section className="flex flex-row">
                <div>
                    <ul>
                        <li>
                            <p>Product</p>
                        </li>
                        <li>
                            <p>Price</p>
                        </li>
                        <li>
                            <p>Quantity</p>
                        </li>
                        <li>
                            <p>Subtotal</p>
                        </li>
                    </ul>
                    <ul>
                        {filterRepeated.map((element)=>(
                            <li>
                                <img src={element.filterElement.imgItem} />
                                <p>{element.filterElement.titleName}</p>
                                <div className="w-[385px] h-[60px] justify-between flex flex-row mt-7">
                                    <div className="flex flex-row justify-around items-center w-[110px] border rounded-[8px]">
                                        <button onClick={() => decrementQuant(element.filterElement.id)}>-</button>
                                        <p>{element.filterElement.Quant}</p>
                                        <button onClick={() => incrementQuant(element.filterElement.id)}>+</button>
                                    </div>
                                    <button className="border border-black rounded-[8px] w-[255px] text-[20px] font-medium">Add To Cart</button>
                               </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h2>Cart Totals</h2>
                    <div>
                        <p>Subtotal</p>
                        <p>{}</p>
                    </div>
                    <div>
                        <p>Total</p>
                        <p>Rs. 250,000.00</p>
                    </div>
                </div>
            </section>
            <MarckComponent />
        </>
    )
}

export default Cart