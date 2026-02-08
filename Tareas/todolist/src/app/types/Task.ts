export type TaskStatus = 'Pendiente' | 'En Proceso' | 'Completada';

export interface Task {
    id: number;
    title: string;
    description: string;
    status: TaskStatus;
}
