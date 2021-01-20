import {createConnection} from "typeorm";

createConnection({
    type: "mongodb",
    host: "172.17.0.3",
    database: "tarefas",
    entities: [
        __dirname + "/../models/*.ts"
    ],
    synchronize: true,
}).then(connection => {
    console.log('Conectado!!!!!');
}).catch(error => console.log(error));