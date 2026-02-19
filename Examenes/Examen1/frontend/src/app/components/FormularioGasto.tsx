'use client'
import {useState} from 'react'
import {useGasto} from '../providers/GastoProviders'

export default function FormularioGasto() {
    const { guardarGasto, presupuesto } = useGasto()
    const [form, setForm] = useState({ categoria: '', monto: 0, fecha: '' })
    return (
        <div style={{ border: '1px solid #ddd', padding: '20px', borderRadius: '5px' }}>
            <h3>Presupuesto Establecido Lps. {presupuesto.toLocaleString()}</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                <input placeholder="Monto" type="number" onChange={e => setForm({...form, monto: Number(e.target.value)})} />
                <input placeholder="Categoria" onChange={e => setForm({...form, categoria: e.target.value})} />
                <input type="date" onChange={e => setForm({...form, fecha: e.target.value})} />
            </div>
            <button 
                style={{ width: '100%', marginTop: '10px', backgroundColor: '#007bff', color: 'white' }}
                onClick={() => guardarGasto(form)}
            >
                Guardar Gastos
            </button>
        </div>
    )
}