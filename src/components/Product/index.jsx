import './style.css';

const Product = ({ product }) => {

    return (

        <>
        
            <li>

                <figure>
                    <img src={product.img} alt={`Imagem do produto ${product.name}`}/>
                </figure>

                <p>{product.name}</p>

                <span>{product.category}</span>

                <p className="productValue">{`R$${product.price.toFixed(2).replace('.',',')}`}</p>

                <button onClick={(event) => console.log(event.target.closest('li'))}>Adicionar</button>
            </li>
        
        </>

    );

}

export default Product;