import { showProducts } from '../../App';
import './style.css';

const InputSearch = ({ inputValue, setInputValue, filtered, setFiltered }) => {

    return (

        <label>
        
            <form action="" onSubmit={(event) => showProducts(event)}>

                <input type="text" placeholder="Digitar pesquisa" onChange={(event) => setInputValue(event.target.value)}/>

                <input type="submit" value="Pesquisar"/>
            
            </form>

        </label>


    );

}

export default InputSearch;