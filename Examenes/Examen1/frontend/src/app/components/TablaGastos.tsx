'use client'
import {useGasto} from '../providers/GastoProviders'
//tabal de gasto:
export default function TablaGastos() {
    const { gastos } = useGasto()
    return (
        <table border={1} style={{ width: '100%', marginTop: '20px', borderCollapse: 'collapse' }}>
            <thead>
                <tr style={{ backgroundColor: '#f2f2f2' }}>
                    <th>Monto</th><th>Descripcion</th><th>Categoria</th><th>Fecha</th><th>Editar</th><th>Eliminar</th>
                </tr>
            </thead>
            <tbody>
                {gastos.map((g) => (
                    <tr key={g.idgasto}>
                        <td>{g.monto}</td>
                        <td>{g.categoria}</td> {/*usando cate como la descripcion segun lo de la api*/}
                        <td>{g.categoria}</td>
                        <td>{g.fecha}</td>
                        <td><button>Editar</button></td>
                        <td><button style={{ color: 'red' }}>Borrar</button></td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}