const express = require('express');
const cors = require('cors')


class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        // Middlewares
        this.middlewares();

        this.routes();        
    }

    routes() {
        
        this.app.use('/api/users', require('../routes/user'));

    }

    middlewares() {
        // Cors
        this.app.use(cors());

        // Lectura y parsing del body
        this.app.use(express.json());

        // Contenidos estaticos
        this.app.use(express.static('public'));


    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Backend escuchando desde el puerto ${this.port}`);
        });
    }
}

module.exports = Server;