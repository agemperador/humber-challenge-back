// src/repositories/truckRepository.js
import Trucks from "../models/trucks.js";

const TruckService  ={
  
  create: async (plate) => {
    try {     
      return await Trucks.create({plate});
      
    } catch (error) {
      throw new Error("Error al crear el camión: " + error.message);
    }
  },

  getByPlate: async (plate) => {
    try {
        return await Trucks.findOne( {where:{plate}});        
    }catch (error) {
        throw new Error("Error al obtener los camiones: " + error.message);
    }
  },

  findOrCreate: async (plate) => {
   
    let truck = await TruckService.getByPlate(plate);
    if (!truck){
        truck = TruckService.create(plate)
    }
    return truck;
  }
};

export default TruckService;