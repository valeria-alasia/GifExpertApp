import { useState } from "react"
import PropTypes from 'prop-types';

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = (event) => {

        setInputValue(event.target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault();
        const value = inputValue.trim();
        if (value.length <= 1) return;
        onNewCategory(value)
        setInputValue('')
    } 

    return (

        <form onSubmit={onSubmit} aria-label="form">
            <input 
                type='text'
                placeholder="Buscar Gifs"
                value={inputValue}
                onChange={onInputChange}/>
        
        </form>
    )
}


AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired
}