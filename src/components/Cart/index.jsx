import CartProduct from '../CartProduct';
import './style.css';

const Cart = ({ products }) => {

    return (

        <section className="cart">
        
            <h2>Carrinho de compras</h2>

            <CartProduct products={products}/>

        </section>

    );

}

export default Cart;