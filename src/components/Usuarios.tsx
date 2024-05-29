import { useEffect, useState } from "react";
import { reqResApi } from "../api/reqRes";
import { ListaUsuariosReqRes, Usuario } from "../interfaces/interfaceReqRes";

export const Usuarios = () => {

    //hook useState
    const [users, setUsers] = useState<Usuario[]>([]);

    //hook useEffect
    useEffect(() => {
        // llamando a la API
        reqResApi.get<ListaUsuariosReqRes>('/users')
            .then(resp => {
                //console.log(resp.data.data); 
                setUsers(resp.data.data)
            })
            .catch(console.log);
    }, [])

    //Función listar los usuarios acorde a un elemento html
    const itemUsuario = ({id, first_name, last_name, email, avatar}: Usuario) => {
        return (
            <tr key={id.toString()}>
                <td>
                    <img src={avatar} 
                        alt={first_name}
                        style={{
                            width:40,
                            borderRadius: 15

                        }}/>
                </td>
                <td>{first_name} {last_name}</td>
                <td>{email}</td>
            </tr>
        )
    }

    return (
        <div>
            <h3>Lista usuarios</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>Nombre</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                      // iterar el arreglo y enviar a la función
                      users.map((usuario)=>itemUsuario(usuario))
                    }
                </tbody>
            </table>
            <button className="btn btn-primary"> Siguiente</button>
        </div>
    )
}
