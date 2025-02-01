import UserService from "../services/user.service.js";
import { generateToken } from "../utils/crypt.js";

const getTokenExample =  async(req, res) => {
    
    if (req.params?.id){
        try{
            const user = await UserService.getById(req.params.id);
            
            if (user){
                res.status(200).json(generateToken(user.dataValues))
            }else{
                res.status(404).json({message:"No se encontró el usuario seleccionado."});
            }
        } catch(e){
            res.status(500).json({message:"Error al obtener el token",error:e.message})
        }
    }
};


export default {getTokenExample};