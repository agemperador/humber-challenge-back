import { Sequelize } from "sequelize";


const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        port:process.env.DB_PORT,
        dialect:process.env.DB_TYPE,
        logging:false,
        dialectOptions: {
            connectTimeout: 60000 // Aumentar tiempo de espera
        },
        pool:{
            max:10,
            min:0,
            acquire:60000,
            idle:10000
        }
    },{
        timestamps: false
    }
)

const connectDb = async () => {
    try{
        await sequelize.authenticate();
        console.log("Base de datos conectada");        
    } catch (error){
        console.error("Error conectando a la base de datos");
        console.log(error);
        
        setTimeout(connectDb, 5000);        
    }
}

connectDb();

export default sequelize;
