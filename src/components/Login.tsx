import { useReducer } from "react"

export const Login = () => {

    const initialState={
        validando: true,
        token: null,
        nombre: '',
        correo:''
    }

    const [state, dispatch] = useReducer(first, second);

  return (
    <div>
        <h3>Login</h3>
        <div className="alert alert-info">
            Validando...
        </div>
        <div className="alert alert-danger">
            No autenticado...
        </div>
        <div className="alert alert-success">
            Autenticado...
        </div>
        <button className="btn btn-primary">Login</button>
        &nbsp;
        <button className="btn btn-danger">Logout</button>
    </div>
  )
}
