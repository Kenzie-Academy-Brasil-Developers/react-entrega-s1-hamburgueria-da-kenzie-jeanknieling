import './style.css';

const CartTotal = ({ totalValue, setCurrentSale, counter, setCounter }) => {

    return (

        <>
        
            <div>
            
                <p>Total</p>
                <p>R$ {totalValue.toFixed(2).replace('.',',')}</p>
            
            </div>

            <button onClick={() => {

                setCurrentSale([]);

                //setCounter(counter - counter);

            }}>Remover todos</button>

        </>

    );

}

export default CartTotal;