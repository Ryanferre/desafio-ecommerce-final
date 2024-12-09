import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaShoppingBag } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';
import ProtectedLink from '../../../ProtetedRoute';
import { useContext } from 'react';
import FilterItens from '../../Shop/HookCustum/ContexData';


const ModalTocart = () => {
  const products = useSelector((state) => state.Statecart);
  const dispatch = useDispatch(); // Para disparar a ação
  const {setRemoveIten, BannerCart, MoveBannerToCart}= useContext(FilterItens)

  // Ação de deletar
  const deleteItem = (id) => ({
    type: "DELETE",
    payload: id, // Passa o id do item para deletar
  });
  const RemoveItem = (id) => {
    dispatch(deleteItem(id)); // Dispara a ação DELETE com o id

    setRemoveIten(+1)
  }

  const MoveBanner= ()=>{
    MoveBannerToCart('hidden')
  }
  return (
    <section className={`absolute ${BannerCart} flex-row justify-end w-full h-[835px] inset-0 bg-[#20202050]`}>
      <div className='bg-white opacity-1 h-[700px] w-[370px] pt-[30px] pb-[40px] flex flex-col justify-between'>
        <div>
          <div className='flex flex-row items-center w-[320px] ml-[20px] justify-between'>
            <h1 className='font-semibold text-[24px]'>Shopping Cart</h1>
            <FaShoppingBag color="#9F9F9F" />
          </div>
          <div className="w-[280px] ml-[20px] h-[500px] flex flex-col justify-between">
            {products.length > 0 ? (
              products.map((product, i) => {
                const filterElement = product.filterElement; // Acessa o filtro dentro do produto
                return (
                  <div key={i} className="w-10 h-10 flex flex-row">
                    <p>{filterElement.titleName}</p> {/* Exibindo o título do produto */}
                    <p>{filterElement.priceDiscount}</p> {/* Exibindo o preço com desconto */}
                    <img src={filterElement.imgItem} alt={filterElement.titleName} /> {/* Exibindo a imagem */}
                    <button onClick={() => RemoveItem(filterElement.id)}><FaTimes /></button> {/* Passa o id do produto */}
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
