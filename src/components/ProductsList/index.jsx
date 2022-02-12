import Product from '../Product';
import './style.css';

const ProductsList = ({ products, currentSale, setCurrentSale, counter, setCounter, filtered, setFiltered, filteredProducts }) => {

    console.log(filtered,filteredProducts, products)

    return (

        <>
        
            <ul>
            
                {

                    filtered ? products : filteredProducts.map((product, index) => (

                        <Product products={products} product={product} currentSale={currentSale} setCurrentSale={setCurrentSale} index={index} counter={counter} setCounter={setCounter} filtered={filtered} setFiltered={setFiltered} key={index}/>

                    ))

                }

            </ul>

        </>

    );

}

export default ProductsList;