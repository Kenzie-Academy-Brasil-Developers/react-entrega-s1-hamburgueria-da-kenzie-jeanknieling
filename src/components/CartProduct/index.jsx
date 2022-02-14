import { useEffect } from 'react';
import { handleClick } from '../../App';
import CartImage from '../images/shopping-cart.png';
import './style.css';


const CartProduct = ({ product, currentSale }) => {

    const obj = {}
                
    for(let i = 0; i < currentSale.length; i++) {

        if(obj[currentSale[i].id] === undefined) {
            obj[currentSale[i].id] = 1;
        } else {
            obj[currentSale[i].id]++;
        }

    }

    //console.log(obj, obj[product.id])

    useEffect(() => {

       

    }, [currentSale]);
    

    return (

        <>

            {
                    
                <li className="cartProduct" id={product.id}>

                    <div className="cartProductInformationsContainer">
                        <div className="cartProductsImages">

                            <figure>
                                <span>{obj[product.id]}</span>
                                
                                <img className="mini-cart" src={CartImage} alt={`Imagem ilustrativa de quantidade no carrinho`}/>
                            </figure>

                            <figure>
                                <img className="productImage" src={product.img} alt={`Imagem do produto ${product.name}`}/>
                            </figure>

                        </div>
                    
                        <div className="cartProductInformations">

                            <h4>{product.name}</h4>

                            <p>{product.category}</p>

                        </div>

                    </div>

                    <button onClick={(event) => handleClick(Number(event.target.closest('li').id), "remove")}>Remover</button>

                </li>  

            }
                
        </>

    );

}

export default CartProduct;