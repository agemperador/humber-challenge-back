import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Trucks = sequelize.define("trucks", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    created_at: {
        name: "created_at",
        type: DataTypes.DATE, 
        defaultValue: DataTypes.NOW,
    },
    plate: {
      name: "plate",
      type: DataTypes.STRING(255),
      allowNull: false,
      unique:true
    },
    updatedAt: { 
        name: "updatedAt",
        type: DataTypes.DATE, 
        defaultValue: DataTypes.NOW 
    }
  },
  {
    tableName:"trucks",
    timestamps:false
  }
);

export default Trucks;