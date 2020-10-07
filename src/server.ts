import "reflect-metadata"; // this shim is required
import { createExpressServer } from "routing-controllers";

// creates express app, registers all controller routes and returns you express app instance
const app = createExpressServer({
   controllers: [__dirname+"/app/controllers/*.ts"] // we specify controllers we want to use
});

export default app;