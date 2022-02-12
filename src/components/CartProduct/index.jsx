import { handleClick } from '../../App';
import CartImage from '../images/shopping-cart.png';
import './style.css';


const CartProduct = ({ product, currentSale, counter, setCounter }) => {

    const obj = {}
                
    for(let i = 0; i < currentSale.length; i++) {
        if(obj[currentSale[i].id] === undefined) {
            obj[currentSale[i].id] = 1;
        } else {
            obj[currentSale[i].id]++;
        }
    }

    console.log(obj, obj[product.id])
    

    return (

        <>
            {
                

                <li id={product.id}>

                    
                    <figure>
                        <span>{obj[product.id]}</span>
                        <img className="mini-car" src={CartImage} alt={`Imagem ilustrativa de quantidade no carrinho`}/>
                    </figure>
                    

                    <figure>
                        <img src={product.img} alt={`Imagem do produto ${product.name}`}/>
                    </figure>

                    <p>{product.name}</p>

                    <span>{product.category}</span>

                    <button onClick={(event) => {

                        //setCounter(counter - 1);

                        handleClick(Number(event.target.closest('li').id), "remove");

                    }}>Remover</button>

                </li>
                        
            }
                
        </>

    );

}

export default CartProduct;