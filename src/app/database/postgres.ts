import {createConnection} from "typeorm";

createConnection({
    type: "postgres",
    host: "172.17.0.3",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "tarefas",
    entities: [
        __dirname + "/../models/*.ts"
    ],
    synchronize: true,
}).then(connection => {
    console.log('Conectado!!!!!');
}).catch(error => console.log(error));