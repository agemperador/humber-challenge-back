// src/repositories/truckRepository.js
import Shipments from "../models/shipments.js";

const ShipmentService  ={
  
  create: async (shipmentData) => {
    try {    
      return await Shipments.create(shipmentData);
    } catch (error) {
      throw new Error("Error al crear el shipment: " + error.message);
    }
  },

};

export default ShipmentService;