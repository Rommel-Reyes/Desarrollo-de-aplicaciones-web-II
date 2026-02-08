'use client';

import { useTasks } from '../context/TaskContext';
import { TaskStatus } from '../types/Task';

export default function TaskTable() {
const { tasks, updateStatus } = useTasks();

return (
    <table border={1} cellPadding={8}>
    <thead>
        <tr>
            <th>ID</th>
            <th>Título</th>
            <th>Descripción</th>
            <th>Estado</th>
        </tr>
    </thead>
        <tbody>
        {tasks.map((task) => (
            <tr key={task.id}>
            <td>{task.id}</td>
            <td>{task.title}</td>
            <td>{task.description}</td>
            <td>
                <select
                value={task.status}
                onChange={(e) =>
                updateStatus(task.id, e.target.value as TaskStatus)
                }
                >
                <option value="Pendiente">Pendiente</option>
                <option value="En Proceso">En Proceso</option>
                <option value="Completada">Completada</option>
                </select>
            </td>
            </tr>
        ))}
        </tbody>
    </table>
    );
}
