import { useState, useEffect } from 'react';
import Header from './components/Header';
import ProductsList from './components/ProductsList';
import Cart from './components/Cart';
import './App.css';

export let handleClick = "";
export let showProducts = "";

function App() {

    const [products, setProducts] = useState([]);
    const [currentSale, setCurrentSale] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [counter, setCounter] = useState(0);
    const [inputValue, setInputValue] = useState('');
    const [filtered, setFiltered] = useState(false);
    
    useEffect(() => {

        fetch(`https://hamburgueria-kenzie-json-serve.herokuapp.com/products`)
        .then(response => response.json())
        .then(response => {
            setProducts(response)
            setFilteredProducts(response)
        })
        .catch((error) => console.log(error));

    } , []);
    

    handleClick = (productId, action) => {
        
        if(action === 'remove') {

            let auxArr = [...currentSale];

            auxArr = currentSale.splice(currentSale.findIndex(product => product.id === productId), 1);
            
            setCurrentSale([...currentSale]);

        } else {

            setCurrentSale([...currentSale, ...products.filter(product => product.id === productId)]);

        }

    }

    showProducts = (event) => {
        
        event.preventDefault();

        setFiltered(event.target.firstChild.value === "" ? false : true);
        
        event.target.firstChild.value = "";
        event.target.firstChild.focus();

        setFilteredProducts(products.filter(product => {

            return product.name.toLowerCase().includes(inputValue.toLowerCase()) || product.category.toLowerCase().includes(inputValue.toLowerCase());
            
        }));

    }

    return (

        <div className="App">

            <Header inputValue={inputValue} setInputValue={setInputValue} filtered={filtered} setFiltered={setFiltered}/>

            <main className="mainContainer">

                <ProductsList products={products} filteredProducts={filteredProducts} currentSale={currentSale} setCurrentSale={setCurrentSale} filtered={filtered} setFiltered={setFiltered} counter={counter} setCounter={setCounter}/>

                <Cart products={products} currentSale={currentSale} setCurrentSale={setCurrentSale} counter={counter} setCounter={setCounter}/>

            </main>

        </div>

    );

}

export default App;
