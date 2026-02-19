'use client'
import {createContext} from 'react'
import {Gasto} from '../models/Gasto'
// interfaz del contexto para los datos:
interface GastoContextType {
    gastos: Gasto[]
    presupuesto: number
    setPresupuesto: (monto: number) => void
    guardarGasto: (nuevo: Gasto) => Promise<void> //Promise: no devuelve nada esta vacio
    eliminarGasto: (idgasto: number) => Promise<void> //Promise: no devuelve nada esta vacio
    totalGastado: number
    porcentajeAlcanzado: number
}
export const GastoContext = createContext<GastoContextType>({} as GastoContextType)