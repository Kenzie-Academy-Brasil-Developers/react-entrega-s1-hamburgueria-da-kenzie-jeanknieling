import Product from '../Product';
import './style.css';

const ProductsList = ({ products, filtered, filteredProducts, inputValue }) => {

    return (

        <section className="vitrineContainer">

            {

                filtered && <p className="searchResult">Resultados para: <span>{inputValue}</span></p>
            
            }
        
            <ul className={filteredProducts.length === 1 ? "centeredProductList" : "productsList"}>
            
                {

                    filtered ? 

                    filteredProducts.map((product, index) => (

                            <Product  product={product}  key={index}/>

                        )) 

                    : 
                    
                        products.map((product, index) => (

                        <Product  product={product}  key={index}/>

                    ))

                }

            </ul>

        </section>

    );

}

export default ProductsList;