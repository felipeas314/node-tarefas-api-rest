import {createConnection} from "typeorm";

createConnection().then(connection => {
    console.log('Conectado!!!!!');
}).catch(error => console.log(error));