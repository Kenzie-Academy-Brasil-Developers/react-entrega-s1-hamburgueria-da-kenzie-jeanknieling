import Product from '../Product';
import './style.css';

const ProductsList = ({ products }) => {

    return (
        <>
        
            <ul>
            
                {
                    products.map(product => <Product product={product} key={product.id}/>)
                }

            </ul>

        </>

    );

}

export default ProductsList;