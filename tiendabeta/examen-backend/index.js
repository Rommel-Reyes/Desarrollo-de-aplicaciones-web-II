const express = require('express');
const Evento = require('./models/evento');
const sequelize = require('./db/db'); 

const app = express();
app.use(express.json());

// --- GET: Listar todos los eventos ---
app.get('/api/evento', async (req, resp) => {
    try {
        const eventos = await Evento.findAll();
        if (eventos.length > 0) {
            resp.status(200).json(eventos);
        } else {
            resp.status(400).json(eventos);
        }
    } catch (error) {
        resp.status(500).json({ error: 'Ocurrio un error en el servicio' });
    }
});

// --- POST: Crear un nuevo evento ---
app.post('/api/evento', async (req, resp) => {
    try {
        const { fechaInicio, fechaFin } = req.body;

        // Validación de fechas (Requisito del examen)
        if (new Date(fechaInicio) > new Date(fechaFin)) {
            return resp.status(400).json({ mensaje: 'La fecha de inicio no puede ser mayor que la final' });
        }

        const nuevoEvento = await Evento.create(req.body);
        if (nuevoEvento != null) {
            resp.status(200).json(nuevoEvento);
        } else {
            resp.status(400).json({ mensaje: 'Evento no ha sido creado' });
        }
    } catch (error) {
        resp.status(500).json({ error: 'Ocurrio un error en el servicio' });
    }
});

// --- PUT: Actualizar un evento ---
app.put('/api/evento/:id', async (req, resp) => {
    try {
        let id = req.params.id;
        const [updated] = await Evento.update(req.body, {
            where: { id: id }
        });

        if (updated) {
            resp.status(200).json({ mensaje: 'Actualizado' });
        } else {
            resp.status(400).json({ mensaje: 'Evento no ha sido actualizado' });
        }
    } catch (error) {
        resp.status(500).json({ error: 'Ocurrio un error en el servicio: ' + error });
    }
});

// --- DELETE: Eliminar físicamente ---
app.delete('/api/evento/:id', async (req, resp) => {
    try {
        const deleted = await Evento.destroy({
            where: { id: req.params.id }
        });
        if (deleted) {
            resp.status(200).json({ mensaje: 'Evento eliminado definitivamente' });
        } else {
            resp.status(400).json({ mensaje: 'Evento no ha sido encontrado' });
        }
    } catch (error) {
        resp.status(500).json({ error: 'Ocurrio un error en el servicio: ' + error });
    }
});

// --- INICIO DEL SERVIDOR ---
const PORT = 5001;
app.listen(PORT, async () => {
    console.log(`Aplicacion ejecutando en puerto ${PORT}`);
    
    try {
        await sequelize.sync({ alter: true });
        console.log('Base de datos sincronizada y lista');
    } catch (error) {
        console.error('Error al sincronizar la base de datos:', error);
    }
});