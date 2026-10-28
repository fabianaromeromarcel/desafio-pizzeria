import '../style.css'
import { useState } from 'react';

const FormRegistro = () => {
    const [mail, setMail] = useState('')
    const [contraseña, setContraseña] = useState ('')
    const [error, setError] = useState ('')
    const validarDatos = (e) => {
        e.preventDefault();
        if (!mail.trim() || !contraseña.trim()) {
            setError('Todos los campos son obligatorios.');
            return;
        }
        if (contraseña.length < 6) {
            setError('La contraseña debe tener al menos 6 caracteres.');
            return;
        }
        setError('');
    }

    return (
        <form onSubmit={validarDatos}>
            <div className='form'>
                <h4>Login</h4>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                    <input type="email" className="form-control" id="exampleInputEmail" placeholder="Ingresa tu mail" onChange={(e) => setMail(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Contraseña</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Ingresa tu contraseña" onChange={(e) => setContraseña(e.target.value)}/>
                </div>
                <button type="submit" className="btn btn-primary">Ingresar</button>
                {error ? <p>{error}</p> : null}
            </div>
        </form>
    )
}

export default FormRegistro;

