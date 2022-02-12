import CartProduct from '../CartProduct';
import CartTotal from '../CartTotal';
import './style.css';

const Cart = ({ products, currentSale, setCurrentSale, counter, setCounter }) => {

    const totalValue = currentSale.reduce((acc, curr) => acc + curr.price, 0);

    return (

        <section className="cart">
        
            <h2>Carrinho de compras</h2>

            <ul>
            
                {
                    currentSale.map((product, index) => <CartProduct product={product} currentSale={currentSale} setCurrentSale={setCurrentSale} key={index} counter={counter} setCounter={setCounter}/>)
                }

            </ul>

            {

                currentSale.length !== 0 && <CartTotal currentSale={currentSale} setCurrentSale={setCurrentSale} totalValue={totalValue}/>

            }

        </section>

    );

}

export default Cart;