'use client'
import {useState} from 'react'
import {useGasto} from '../providers/GastoProviders'
//presupuesto mensual y alertas:
export default function PresupuestoMensual() {
    const { presupuesto, setPresupuesto, porcentajeAlcanzado } = useGasto();
    const [monto, setMonto] = useState(0)
    return (
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
            <h2>Establecer Presupuesto Mensual</h2>
            <input 
                type="number" 
                placeholder="Monto de presupuesto Mensual" 
                onChange={(e) => setMonto(Number(e.target.value))} 
            />
            <button onClick={() => setPresupuesto(monto)}>Guardar Presupuesto</button>
            {porcentajeAlcanzado >= 0.8 && porcentajeAlcanzado <= 1 && (
                <div style={{ backgroundColor: '#fff3cd', padding: '10px', margin: '10px' }}>
                    Ha alcanzado el 80% del presupuesto
                </div>
            )}
            {porcentajeAlcanzado > 1 && (
                <div style={{ backgroundColor: '#f8d7da', color: '#721c24', padding: '10px', margin: '10px' }}>
                    Has superado el limite del presupuesto, debes ajustar gastos
                </div>
            )}
        </div>
    )
}