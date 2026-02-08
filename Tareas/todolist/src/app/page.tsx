import TaskForm from './components/TaskForm';
import TaskTable from './components/TaskTable';

export default function Home() {
  return (
    <main style={{ padding: '20px' }}>
      <h1>Lista de Tareas</h1>
      <TaskForm />
      <TaskTable />
    </main>
  );
}
