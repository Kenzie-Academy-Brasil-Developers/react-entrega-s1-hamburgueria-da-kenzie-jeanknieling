import { useState, useEffect } from 'react';
import Header from './components/Header';
import ProductsList from './components/ProductsList';
import Cart from './components/Cart';
import CartProduct from './components/CartProduct';
import './App.css';


function App() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(`https://hamburgueria-kenzie-json-serve.herokuapp.com/products`)
            .then(response => response.json())
            .then(response => setProducts(response))
            .catch((error) => console.log(error));
    } , []);

    console.log(products)
    return (

        <div className="App">

            <Header/>
            <main className="mainContainer">
                <ProductsList products={products}/>
                <Cart products={products}/>
            </main>

        </div>

    );

}

export default App;
