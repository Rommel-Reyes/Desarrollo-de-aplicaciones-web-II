'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import { Task, TaskStatus } from '../types/Task';

interface TaskContextType {
    tasks: Task[];
    addTask: (title: string, description: string) => void;
    updateStatus: (id: number, status: TaskStatus) => void;
}

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const TaskProvider = ({ children }: { children: ReactNode }) => {
    const [tasks, setTasks] = useState<Task[]>([]);

    const addTask = (title: string, description: string) => {
    const newTask: Task = {
        id: Date.now(),
        title,
        description,
        status: 'Pendiente',
    };

    setTasks((prev) => [...prev, newTask]);
    };

    const updateStatus = (id: number, status: TaskStatus) => {
    setTasks((prev) =>
        prev.map((task) =>
        task.id === id ? { ...task, status } : task
        )
    );
    };

    return (
    <TaskContext.Provider value={{ tasks, addTask, updateStatus }}>
        {children}
    </TaskContext.Provider>
    );
};

export const useTasks = () => {
    const context = useContext(TaskContext);
    if (!context) {
    throw new Error('useTasks debe usarse dentro de TaskProvider');
    }
    return context;
};
