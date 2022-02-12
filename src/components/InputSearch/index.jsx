import { showProducts } from '../../App';
import './style.css';

const InputSearch = ({ inputValue, setInputValue, filtered, setFiltered }) => {

    return (

        <form onSubmit={(event) => showProducts(event)}>

            <input type="text" onChange={(event) => setInputValue(event.target.value)}/>
            <input type="submit" value="Pesquisar"/>
        
        </form>

    );

}

export default InputSearch;