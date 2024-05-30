import { useEffect, useRef, useState } from "react";
import { reqResApi } from "../api/reqRes";
import { ListaUsuariosReqRes, Usuario } from "../interfaces/interfaceReqRes";

export const Usuarios = () => {

    //hook useRef
    const paginaRef = useRef(1);

    //hook useState
    const [users, setUsers] = useState<Usuario[]>([]);

    //hook useEffect
    useEffect(() => {
        //llamar a la función
        return () => {
            cargarUsuarios();
        }
    }, [])



    //Función para cargar lista de usuarios
    const cargarUsuarios = async () => {
        // llamando a la API
        const resp = await reqResApi.get<ListaUsuariosReqRes>('/users', {
            params: {
                page: paginaRef.current  //valor númerico
            }
        });

        //Validar que el vector tenga usaurios
        if (resp.data.data.length > 0) {
            //console.log(resp.data.data); 
            setUsers(resp.data.data)
            //incremento el id de las páginas
            paginaRef.current++;
        } else {
            alert('No hay más usuarios')
        }


    }

    //Función listar los usuarios acorde a un elemento html
    const itemUsuario = ({ id, first_name, last_name, email, avatar }: Usuario) => {
        return (
            <tr key={id.toString()}>
                <td>
                    <img src={avatar}
                        alt={first_name}
                        style={{
                            width: 40,
                            borderRadius: 15

                        }} />
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
                        users.map((usuario) => itemUsuario(usuario))
                    }
                </tbody>
            </table>
            <button className="btn btn-primary" onClick={cargarUsuarios}> Siguiente</button>
        </div>
    )
}
