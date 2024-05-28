import { useEffect, useState } from 'react'

export const ComponenteUseEffect = () => {

    //hook - useState
    const [valor, setValor] = useState<boolean>(false);

    //función cmabiar valor
    const cambioValor = () => {
        setValor(!valor);
    }

    //hook - useEffect 
    useEffect(() => {
        // Código a ejecutar
        console.log('Desde el useEffect');
        //Dependencia
    }, [valor]);

    return (
        <div>
            <h3>Hook - UseEffect</h3>
            <button onClick={cambioValor}>Cambiar Valor</button>
        </div>
    )
}
