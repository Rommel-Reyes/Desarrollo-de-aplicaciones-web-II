'use client'
import React, { useContext, useEffect, useState } from 'react'
import {Plantilla} from '../models/Plantilla'
import {Gasto} from '../models/Gasto'
import {GastoContext} from '../context/Gastocontext'

export default function GastoProvider(props: Plantilla) {
    const [gastos, setGastos] = useState<Gasto[]>([])
    const [presupuesto, setPresupuesto] = useState<number>(0)
    // obtener los gastos:
    const obtenerGastos = async () => {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/gasto`)
        const data = await response.json()
        setGastos(data);
    }
    //guardar el gasto neuvo que se hace:
    const guardarGasto = async (nuevoGasto: Gasto) => {
        await fetch(`${process.env.NEXT_PUBLIC_API_URL}/gasto`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(nuevoGasto)
            //el stringify convierte el objeto nuevoGasto a un tipo de formato JSON pq asi es mas facil de enviar al backends.
        })
        obtenerGastos()
    }
    // elimianr los gastos:
    const eliminarGasto = async (idgasto: number) => {
        await fetch(`${process.env.NEXT_PUBLIC_API_URL}/gasto/${idgasto}`, { method: 'DELETE'})
        obtenerGastos()
    }
    // calcular el gasto para tiurar alertas:
    const totalGastado = gastos.reduce((acc, item) => acc + parseFloat(item.monto.toString()), 0)
    const porcentajeAlcanzado = presupuesto > 0 ? (totalGastado / presupuesto) : 0
    useEffect(() => { obtenerGastos(); }, [])
    return (
        <GastoContext.Provider value={{gastos, presupuesto, setPresupuesto,guardarGasto, eliminarGasto, totalGastado, porcentajeAlcanzado}}>
            {props.children}
        </GastoContext.Provider>
    )
}
export const useGasto = () => useContext(GastoContext)