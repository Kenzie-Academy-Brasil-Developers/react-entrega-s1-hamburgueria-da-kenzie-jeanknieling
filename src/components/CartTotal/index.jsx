import './style.css';

const CartTotal = ({ totalValue, setCurrentSale}) => {

    return (

        <>
        
            <div>
            
                <p>Total</p>
                <p>R$ {totalValue.toFixed(2).replace('.',',')}</p>
            
            </div>

            <button onClick={() => setCurrentSale([])}>Remover todos</button>

        </>

    );

}

export default CartTotal;