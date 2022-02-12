import { handleClick } from '../../App';
import './style.css';


const Product = ({ product, counter, setCounter, filtered, setFiltered }) => {

    return (

        <>

            {

                <li id={product.id}>
    
                    <figure>
                        <img src={product.img} alt={`Imagem do produto ${product.name}`}/>
                    </figure>
    
                    <p>{product.name}</p>
    
                    <span>{product.category}</span>
    
                    <p className="productValue">{`R$${product.price.toFixed(2).replace('.',',')}`}</p>
    
                    <button onClick={(event) => {

                        //setCounter(counter + 1);
    
                        handleClick(Number(event.target.closest('li').id));
    
                    }}>Adicionar</button>
                    
                </li>

            }
        
        
        </>

    );

}

export default Product;