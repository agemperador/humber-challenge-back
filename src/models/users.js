import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";


const Users = sequelize.define("Users", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  created_at: {
    type: DataTypes.DATE, 
    defaultValue: DataTypes.NOW,
  },
  cuit: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  username: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  phone_number: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  updated_at: {
    type: DataTypes.DATE, 
    defaultValue: DataTypes.NOW,
},
},
{
    tableName:"users",
    timestamps: false
}
);

export default Users;