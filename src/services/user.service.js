import Users from "../models/users.js";

const UserService = {

    getById: async (id) => {
        try {
            return  await Users.findByPk(id);        
        }catch (error) {
            console.error(error.stack);  
            throw new Error("Error al obtener usuario: " + error.message);
        }
      },
}

export default UserService