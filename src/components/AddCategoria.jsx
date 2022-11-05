
import React, { useState } from 'react'

export const AddCategoria = ( { onNewCategoria } ) => {

    const [ inputValue, setInputValue ] = useState('');

    const onInputChange = (e) => {
        setInputValue( e.target.value );
    }

    const onSubmit = ( event ) => {
        event.preventDefault();
        if( inputValue.trim().length <= 1 ) return;
        onNewCategoria( inputValue.trim() );
        setInputValue('');
    }

  return (
    <form onSubmit={ (event) => onSubmit(event) }>
        <input 
            type="text"
            placeholder="Buscar gifs..."
            value={ inputValue }
            onChange={ onInputChange }
        />
    </form>
  )
}
