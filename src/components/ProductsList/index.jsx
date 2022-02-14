import Product from '../Product';
import './style.css';

const ProductsList = ({ products, currentSale, setCurrentSale, counter, setCounter, filtered, setFiltered, filteredProducts, inputValue }) => {

    return (

        <>

            {

                filtered && <p className="searchResult">Resultados para: <span>{inputValue}</span></p>
            
            }
        
            <ul className={filteredProducts.length === 1 ? "centeredProductList" : "productsList"}>
            
                {

                    filtered ? 

                    filteredProducts.map((product, index) => (

                            <Product products={products} product={product} currentSale={currentSale} setCurrentSale={setCurrentSale} index={index} counter={counter} setCounter={setCounter} filtered={filtered} setFiltered={setFiltered} key={index}/>

                        )) 

                    : 
                    
                        products.map((product, index) => (

                        <Product products={products} product={product} currentSale={currentSale} setCurrentSale={setCurrentSale} index={index} counter={counter} setCounter={setCounter} filtered={filtered} setFiltered={setFiltered} key={index}/>

                    ))

                }

            </ul>

        </>

    );

}

export default ProductsList;