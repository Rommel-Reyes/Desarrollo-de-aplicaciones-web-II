const { DataTypes } = require('sequelize');
const sequelize = require('../db/db');

const Evento = sequelize.define('evento', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombreEvento: {
        type: DataTypes.STRING
    },
    direccion: {
        type: DataTypes.STRING
    },
    fechaInicio: {
        type: DataTypes.DATEONLY
    },
    fechaFin: {
        type: DataTypes.DATEONLY
    },
    eliminado: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
}, {
    tableName: 'evento', // Forzamos el nombre de la tabla
    timestamps: false    // Deshabilitamos createdAt y updatedAt
});
module.exports = Evento;