const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('gestion_eventos', 'root', 'transformers', {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql',
    logging: false // Esto evita que salgan textos raros de SQL en la consola
});

sequelize.authenticate()
    .then(() => console.log('Conexión Exitosa a MySQL Workbench'))
    .catch((err) => console.log('Ocurrio un error en la conexion de BD', err));

module.exports = sequelize;