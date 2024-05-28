import React, { useState } from 'react'

export const Contador = () => {

    //Hook useState - tipado estricto
    const [valor, setValor] = useState<number>(0);

    //Función para contador
    const contador = (numero: number) => {
        setValor(valor + numero)
    }

    return (
        <div>
            <h3>Contador: <small>{valor}</small></h3>
            <button 
                className='btn btn-primary'
                onClick={()=>contador(1)}>+1</button>
            &nbsp;
            <button 
                className='btn btn-primary'
                onClick={()=>contador(-1)}>-1</button>
        </div>
    )
}
