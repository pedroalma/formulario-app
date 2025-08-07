import React, { useState } from 'react';

function MyForm() {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Lógica para processar o valor do campo
    console.log('Valor enviado:', inputValue);
    // Limpa o campo após o envio
    setInputValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
      />
      <button type="submit" >Enviar</button>
      
    </form>
  );
}

export default MyForm;