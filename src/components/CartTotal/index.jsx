import './style.css';

const CartTotal = ({ totalValue, setCurrentSale, counter, setCounter }) => {

    return (

        <>
        
            <div className="cartTotalValue">
            
                <p className="pTotal">Total</p>
                <p className="value">R$ {totalValue.toFixed(2).replace('.',',')}</p>
            
            </div>

            <button className="removeButton" onClick={() => {

                setCurrentSale([]);

            }}>Remover todos</button>

        </>

    );

}

export default CartTotal;