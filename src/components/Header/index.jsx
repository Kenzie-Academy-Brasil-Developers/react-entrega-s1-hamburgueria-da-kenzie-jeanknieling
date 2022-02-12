import Logo from '../Logo';
import InputSearch from '../InputSearch'; 
import './style.css';

const Header = ({ inputValue, setInputValue, filtered, setFiltered }) => {

    return (

        <header>

            <Logo/>
            <InputSearch inputValue={inputValue} setInputValue={setInputValue} filtered={filtered} setFiltered={setFiltered}/>
        
        </header>

    );

}

export default Header;