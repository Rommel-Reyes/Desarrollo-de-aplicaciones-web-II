'use client'
import {useState} from 'react'
import Login from './components/login'
import PresupuestoMensual from './components/PresupuestoMensual'
import FormularioGasto from './components/FormularioGasto'
import TablaGastos from './components/TablaGastos'

export default function Page() {
    const [isLogged, setIsLogged] = useState(false)
    if (!isLogged) return <Login onLoginSuccess={() => setIsLogged(true)} />
    return (
        <main style={{ maxWidth: '900px', margin: '0 auto', padding: '20px' }}>
            <PresupuestoMensual />
            <FormularioGasto />
            <TablaGastos />
        </main>
    )
}