import { useState } from 'react';
import CartProduct from '../CartProduct';
import CartTotal from '../CartTotal';
import './style.css';

const Cart = ({ products, currentSale, setCurrentSale, counter, setCounter }) => {

    const totalValue = currentSale.reduce((acc, curr) => acc + curr.price, 0);

    let productsLimite = [];
    
    const obj = {};

    for(let i = 0; i < currentSale.length; i++) {

        if(obj[currentSale[i].id] === undefined) {

            productsLimite = [...productsLimite, currentSale[i]];

            console.log(currentSale[i], productsLimite);

            obj[currentSale[i].id] = 1;

        } else {

            obj[currentSale[i].id]++;

        }
        
    }

    //console.log(obj, productsLimite) 

    return (

        <section className="cart">
        
            <h2>Carrinho de compras</h2>

            <ul>
            
                {

                    productsLimite.map((product, index) => <CartProduct product={product} currentSale={currentSale} setCurrentSale={setCurrentSale} key={index} counter={counter} setCounter={setCounter} productsLimite={productsLimite}/>)
                }

            </ul>

            {

                currentSale.length !== 0 && <CartTotal currentSale={currentSale} setCurrentSale={setCurrentSale} totalValue={totalValue} counter={counter} setCounter={setCounter}/>

            }

        </section>

    );

}

export default Cart;