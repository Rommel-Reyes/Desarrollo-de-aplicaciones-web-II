export interface Gasto {
    idgasto?: number // colocamos el ? ya que el componente es opcional pq este esta en la base de datos.
    categoria: string
    monto: number
    fecha: string
}