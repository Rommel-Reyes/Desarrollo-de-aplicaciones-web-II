'use client';

import { useState } from 'react';
import { useTasks } from '../context/TaskContext';

export default function TaskForm() {
    const { addTask } = useTasks();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !description) return;

    addTask(title, description);
    setTitle('');
    setDescription('');
    };

return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
        <input
        type="text"
        placeholder="Título"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <input
        type="text"
        placeholder="Descripción"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        />
        <br />
        <button type="submit">Agregar tarea</button>
    </form>
    );
}
