'use client'
import {useState} from 'react'
//componente de aunteticar el usuarioL:
export default function Login({ onLoginSuccess }: { onLoginSuccess: () => void }) {
    const [auth, setAuth] = useState({ usuario: '', clave: '' })
    const handleLogin = () => {
        if (auth.usuario === 'admin' && auth.clave === 'admin123') {
            onLoginSuccess()
        } else {
            alert('Usuario o clave incorrecta')
        }
    }
    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Mis Gastos Inicio de Sesion</h1>
            <input placeholder="Usuario" onChange={e => setAuth({...auth, usuario: e.target.value})} />
            <br />
            <input type="password" placeholder="Clave" onChange={e => setAuth({...auth, clave: e.target.value})} />
            <br />
            <button onClick={handleLogin} style={{ backgroundColor: '#007bff', color: 'white' }}>Iniciar Sesion</button>
        </div>
    )
}