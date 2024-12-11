import { useSelector, useDispatch } from 'react-redux';
import { FaShoppingBag } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';
import ProtectedLink from '../../../ProtetedRoute';
import { useContext } from 'react';
import FilterItens from '../../Shop/HookCustum/ContexData';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

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
    excludIten(id)
    dispatch(deleteItem(id)); // Dispara a ação DELETE com o id
    setRemoveIten(+1)
  }

  const MoveBanner= (e)=>{
    const getId= (e.target as HTMLElement).id

    if(getId == '1'){
      MoveBannerToCart('hidden')
    }
  }

    const [AddTocart, setAdd] = useState<number>(0);//conten a quantidade de vezes no icone do carrinho
    const [removeTotal, setRemove] = useState<number>(0);//contem a quantidade de vezes que removi no carrinho
    const [AddRepeated, setRepeated] = useState<string []> ([]);// array com os itens independente se esta repetido ou não
    const [filterRepeated, setItenRepeated]= useState<ItensCart []>([]);//array com os itens filtrados(sem repetições)

    const StateCart = useSelector((state) => state.Statecart);


    useEffect(()=>{
      const widthArr= products
      const Tam= widthArr.length

      if(Tam > 0){//se ta zero então não tem nada
        setAdd(Tam);
      }
      const f= widthArr.map((elemnt)=>(//adiciona o total de item repetidos
        elemnt.filterElement.id
      ))
      setRepeated(f)

      const filterRepeatedItem= products.filter((element, i, s)=>(//seleciona somente um elemento
        i === s.findIndex((e) => e.filterElement.id === element.filterElement.id)
      )).map((element) => ({...element,...element.filterElement, Quant: 0}));

      setItenRepeated(filterRepeatedItem)
    }, [products])

    useEffect(()=>{
      const updatedProducts = [...products]; //Faz uma cópia

      for (let i = 0; i < updatedProducts.length; i++) {
        //Conta quantas vezes o id aparece no array AddRepeated
        const count = AddRepeated.filter((id) => id === updatedProducts[i].filterElement.id).length;
    
        //Atualiza a propriedade Quant com a contagem
        updatedProducts[i].filterElement.Quant = count;
      }
      
    }, [AddRepeated])

    
    
    //Remover item
    const excludIten = (e) => {

      const numericId = e;
      const item = products.find((item) => item.filterElement.id === numericId);

      const QuantRepted= item.filterElement.Quant

        if (AddTocart > 0) {//adicionado ao box do carrinho
            setAdd((prev) => prev - 1);//retirando do box do carrinho
            if(QuantRepted == 1){//a cada item removido é adicionado mais 1
              setRemove((prev) => prev + 1)
            }else{
              setRemove(QuantRepted)
            };
        }
    };

    useEffect(()=>{
        if (removeTotal > 0) {
            getItenscart(ItensCart - removeTotal);//pego a quantidade de itens que foram removidos do box e subtraio enviando o resultado para o contexto
            setRemove(0);
        }
    }, [removeTotal])

  
  return (
    <section className={`absolute ${BannerCart} flex-row justify-end w-full h-[2540px] z-0 inset-0 bg-[#20202050]`} id="1" onClick={MoveBanner}>
      <div className='bg-white opacity-1 h-[700px] w-[370px] pt-[30px] pb-[40px] flex flex-col z-1 justify-between' id="2">
        <div className='flex flex-col w-[300px] pl-[30px]'>
          <div className='flex flex-row items-center justify-between'>
            <h1 className='font-semibold text-[24px]'>Shopping Cart</h1>
            <FaShoppingBag color="#9F9F9F" />
          </div>
          <span className='w-[230px] h-[1px] bg-[#9F9F9F] my-7'></span>
          <div className="w-[280px] h-[440px] flex flex-col pt-1">
            {filterRepeated.length > 0 ? (
              filterRepeated.map((product, i) => {
                return (
                  <div key={i} className="w-full h-[76px] flex flex-row justify-between items-center">
                    <img className='w-[65px] rounded-[5px]' src={product.filterElement.imgItem} alt={product.filterElement.titleName} />
                    <div className='flex flex-col justify-around h-[70px]'>
                      <p>{product.filterElement.titleName}</p>
                      <div className='flex flex-row gap-4'>
                        <p>{product.filterElement.Quant}</p>
                        <p>X</p>
                        <p>{product.filterElement.priceDiscount}</p>
                      </div>
                    </div>
                    <button onClick={() => RemoveItem(product.filterElement.id)}><FaTimes /></button> {/* Passa o id do produto */}
                  </div>
                );
              })
            ) : (
              <p>Sem produtos no carrinho.</p>
            )}
          </div>
          <div className='flex flex-row w-[280px] justify-between'>
            <p className='text-[16px] font-semibold'>Subtotal</p>
            <p className='text-[#B88E2F] text-[16px] font-semibold'>{filterRepeated.map((e)=> (e.filterElement.priceDiscount.split('Rp')))}</p>
          </div>
        </div>
        
        <span className='w-full h-[1px] bg-[#9F9F9F]'></span>
        <ul className='flex flex-row w-[320px] ml-[20px] justify-between'>
          <li>
            <button className='border border-black rounded-[50px] px-[30px] py-[5px]'><Link to="/Cart">Cart</Link></button>
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
