import { useState } from "react";

export const useCounter = (numeroInicial: number = 10) => {
    //Hook useState - tipado estricto
    const [valor, setValor] = useState<number>(numeroInicial);

    //Función para contador
    const contador = (numero: number) => {
        setValor(valor + numero)
    }

    return {
        //valor: valor,
        //contador: contador
        valor,
        contador
    }
}
