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
    
    //console.log(currentSale)
    handleClick = (productId, action) => {
        
        if(action === 'remove') {

            const auxArr = [...currentSale];

            auxArr.splice(currentSale.findIndex(product => product.id === productId), 1);
            
            setCurrentSale([...auxArr]);

        } else {

            setCurrentSale([...currentSale, ...products.filter(product => product.id === productId)]);

        }

    }

    showProducts = (event) => {

        console.log(inputValue)

        event.preventDefault();
        
        setFiltered(event.target.firstChild.value === "" ? false : true);
        
        
        setFilteredProducts(event.target.firstChild.value === "" ? [] : products.filter(product => {
            
            return product.name.toLowerCase().includes(inputValue.toLowerCase()) || product.category.toLowerCase().includes(inputValue.toLowerCase());
            
        }));

        event.target.firstChild.value = "";
        event.target.firstChild.focus();
         
    }

    return (

        <div className="App">

            <Header inputValue={inputValue} setInputValue={setInputValue} filtered={filtered} setFiltered={setFiltered}/>

            <main className="mainContainer">

                <ProductsList products={products} filteredProducts={filteredProducts}  filtered={filtered} inputValue={inputValue}/>

                <Cart products={products} currentSale={currentSale} setCurrentSale={setCurrentSale} counter={counter} setCounter={setCounter}/>

            </main>

        </div>

    );

}

export default App;
