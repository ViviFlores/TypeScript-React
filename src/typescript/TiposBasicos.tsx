//rafc
import React from 'react'

export const TiposBasicos = () => {
    // variable/constantes - tipado
    //let nombre: string | number = 'Viviana';
    const nombre: string = 'Viviana';
    const edad: number = 31;
    const donanteOrganos: boolean = true;

    //arreglos
    const poderes: string[] = ['volar', 'velocidad', 'fuerza'];
    //agregar dato arreglo
    poderes.push('invisibilidad');

    return (
        <div>
            <h3>Tipos Básicos</h3>
            {nombre}, {edad}, {donanteOrganos ? 'donante' : 'no donante'}
            <br/>
            {poderes.join(', ')}
        </div>
    )
}
