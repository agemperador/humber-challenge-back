import express from 'express';
import sequelize from './config/database.js';
import shipmentRouter from './routes/shipment.routes.js'
import userRouter from './routes/user.routes.js'

const app = express();
app.use(express.json());


(async () => {
  await sequelize.sync({ force: false });
  console.log("Base de datos sincronizada.");
})();

app.use("/shipment", shipmentRouter);
app.use('/user', userRouter)

app.listen(3000, () => {
    console.log('Server en puerto 3000');
});