import { handleClick } from '../../App';
import './style.css';


const Product = ({ product }) => {

    return (

        <>

            {

                <li className="product" id={product.id}>
    
                    <figure>
                        <img src={product.img} alt={`Imagem do produto ${product.name}`}/>
                    </figure>
    
                    <section className="productInformations">

                        <h3>{product.name}</h3>
        
                        <p>{product.category}</p>
        
                        <p className="productValue">{`R$ ${product.price.toFixed(2).replace('.',',')}`}</p>
        
                        <button onClick={(event) => handleClick(Number(event.target.closest('li').id))}>Adicionar</button>

                    </section>
                    
                </li>

            }
        
        
        </>

    );

}

export default Product;