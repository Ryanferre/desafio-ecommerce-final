import { useSelector, useDispatch } from 'react-redux';
import { FaShoppingBag } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';
import ProtectedLink from '../../../ProtetedRoute';
import { useContext } from 'react';
import FilterItens from '../../Shop/HookCustum/ContexData';
import { useEffect, useState } from 'react';


type FilterElement = {
  id: number;
  titleName: string;
  priceDiscount: string;
  imgItem: string;
};

type ItensCart = {
  filterElement: FilterElement;
};


const ModalTocart = () => {
  const products = useSelector((state) => state.Statecart);
  const dispatch = useDispatch(); // Para disparar a ação
  const {setRemoveIten, BannerCart, MoveBannerToCart, getItenscart, ItensCart}= useContext(FilterItens)

  // Ação para deletar
  const deleteItem = (id) => ({
    type: "DELETE",
    payload: id, // Passa o id do item para deletar
  });

  const RemoveItem = (id) => {
    excludIten()
    dispatch(deleteItem(id)); // Dispara a ação DELETE com o id(só posso disparar se o item chegar a 0 dentro do carrinho)
    setRemoveIten(+1)
  }

  const MoveBanner= (e)=>{
    const getId= (e.target as HTMLElement).id

    if(getId == '1'){
      MoveBannerToCart('hidden')
    }
  }

    const [AddTocart, setAdd] = useState<number>(0);
    const [removeTotal, setRemove] = useState<number>(0);
    const [AddRepeated, setRepeated] = useState<string []> ([]);
    const [filterRepeated, setItenRepeated]= useState<ItensCart []>([])

    const StateCart = useSelector((state) => state.Statecart);


    useEffect(()=>{
      const widthArr= products
      const Tam= widthArr.length

      if(Tam > 0){// se ta zero então não tem nada
        for(let i=0; i<=Tam; i++){
          setAdd(i)
        }
      }
      const f= widthArr.map((elemnt)=>(//adiciona o total de item repetidos
        elemnt.filterElement.id
      ))
      setRepeated(f)
      const filterRepeatedItem= products.filter((element, i, s)=>(//seleciona somente um elemento
        i === s.findIndex((e) => e.filterElement.id === element.filterElement.id)
      ))

      setItenRepeated(filterRepeatedItem)
    }, [products])

    
    // Remover item
    const excludIten = () => {
        if (AddTocart > 0) {
            setAdd((prev) => prev - 1); 
            setRemove((prev) => prev + 1); 
        }
    };

    useEffect(()=>{
        if (removeTotal > 0) {
            getItenscart(ItensCart - removeTotal);
            setRemove(0);
        }
    }, [removeTotal])

  
  return (
    <section className={`absolute ${BannerCart} flex-row justify-end w-full h-[2540px] z-0 inset-0 bg-[#20202050]`} id="1" onClick={MoveBanner}>
      <div className='bg-white opacity-1 h-[700px] w-[370px] pt-[30px] pb-[40px] flex flex-col z-1 justify-between' id="2">
        <div>
          <div className='flex flex-row items-center w-[320px] ml-[20px] justify-between'>
            <h1 className='font-semibold text-[24px]'>Shopping Cart</h1>
            <FaShoppingBag color="#9F9F9F" />
          </div>
          <div className="w-[280px] ml-[20px] h-[500px] flex flex-col justify-between">
            {filterRepeated.length > 0 ? (
              filterRepeated.map((product, i) => {
                return (
                  <div key={i} className="w-10 h-10 flex flex-row">
                    <p>{product.filterElement.titleName}</p> {/* Exibindo o título do produto */}
                    <p>{product.filterElement.priceDiscount}</p> {/* Exibindo o preço com desconto */}
                    <img src={product.filterElement.imgItem} alt={product.filterElement.titleName} /> {/* Exibindo a imagem */}
                    <button onClick={() => RemoveItem(product.filterElement.id)}><FaTimes /></button> {/* Passa o id do produto */}
                  </div>
                );
              })
            ) : (
              <p>Sem produtos no carrinho.</p>
            )}
            <div className='flex flex-row w-[280px] justify-between'>
              <p className='text-[16px] font-semibold'>Subtotal</p>
              <p className='text-[#B88E2F] text-[16px] font-semibold'>Rs. 520,000.00</p>
            </div>
          </div>
        </div>
        <span className='w-full h-[1px] bg-[#9F9F9F]'></span>
        <ul className='flex flex-row w-[320px] ml-[20px] justify-between'>
          <li>
            <button className='border border-black rounded-[50px] px-[30px] py-[5px]'>Cart</button>
          </li>
          <li>
            <ProtectedLink to="/Adress"><button className='border border-black rounded-[50px] px-[20px] py-[5px]'>Checkout</button></ProtectedLink>
          </li>
          <li>
            <button className='border border-black rounded-[50px] px-[7px] py-[5px]'>Comparison</button>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ModalTocart;
