import ShipmentService from "../services/shipment.service.js";
import TruckService from "../services/truck.service.js";
import ShipmentStatusEnum from "../enums/ShipmentStatusEnum.js";

const ping = ((req, res) => {
    res.send('Pong');
});

const createShipment =  async (req, res) => {
    /* Implementar un método que cree un shipment en la base de datos */
    try {     

      const user = req.user; 
      if (!user) {
        return res.status(401).json({message:"Token invalido"})
      }
      const { loadId, plate } = req.body;

      if ( !loadId || !plate) {
        return res.status(400).json({ message: "Todos los campos son obligatorios." });
      }
    
      //Elegí crearlo en caso de que no exista
      const truck = await TruckService.findOrCreate(plate);
      
      const newShipment =  await  ShipmentService.create({
        status:ShipmentStatusEnum.PENDING,
        truck_id: truck.id,
        trucker_id:user.id,
        load_id:loadId,
      })

      return res.status(201).json({
        message: "Shipment creado exitosamente",
        shipment: newShipment
      });

    } catch (error) {
      console.error("Error al crear el shipment:", error);
      return res.status(500).json({ message: "Error al crear el shipment", error:error.message });
    }
};


export default {ping, createShipment}