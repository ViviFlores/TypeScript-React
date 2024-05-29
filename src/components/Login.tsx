import { useReducer, useEffect } from "react"

//Interface - valor inicial reducer
interface AuthState {
    validando: boolean;
    token: null | string;
    nombre: string;
    correo: string;
}

//Type payload login
type LoginActionPayload = {
    nombre: string,
    correo: string,
}

//Type action Reducer
type AuthAction =
    { type: 'logout' }
    | { type: 'login', payload: LoginActionPayload };

export const Login = () => {

    //Valor inicial useReducer
    const initialState: AuthState = {
        validando: true,
        token: null,
        nombre: '',
        correo: ''
    }

    //Función useReducer
    const authReducer = (state: AuthState, action: AuthAction): AuthState => {
        switch (action.type) {
            case 'logout':
                return {
                    validando: false,
                    token: null,
                    nombre: '',
                    correo: '',
                }
            case 'login':
                //desestructuración 
                const { nombre, correo } = action.payload;
                return {
                    validando: false,
                    token: 'ETERRG54545dfhtrhbdfv545gfdgdfgHKJHKH',
                    nombre: nombre,
                    correo: correo,
                }
            default:
                return state;
        }
    }

    // Función acción login
    const login = () => {
        dispatch({
            type: 'login',
            payload: {
                nombre: 'Viviana',
                correo: 'vflores@itsqmet.edu.ec'
            }
        });
    }

    //Función acción logout
    const logout = () => {
        dispatch({ type: 'logout' });
    }

    //hook useReducer
    //Desestrucción del objeto state
    const [{ validando, token, nombre }, dispatch] = useReducer(authReducer, initialState);

    //hook useEffect
    useEffect(() => {
        setTimeout(() => {
            dispatch({ type: 'logout' })
        }, 1500)
    }, [])

    // Verificando el estado 
    if (validando) { //true
        return (
            <>
                <h3>Login</h3>
                <div className="alert alert-info">
                    Validando...
                </div>
            </>
        )
    }

    return (
        <div>
            <h3>Login</h3>
            {
                (token == null)
                    ? <div className="alert alert-danger">No autenticado...</div>
                    : <div className="alert alert-success">Autenticado como {nombre}...</div>
            }
            {
                (token == null)
                    ? <button
                        className="btn btn-primary"
                        onClick={login}>Login</button>
                    : <button 
                        className="btn btn-danger"
                        onClick={logout}>Logout</button>
            }
        </div>
    )
}
