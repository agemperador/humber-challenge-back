import sequelize from "../config/database.js";
import { DataTypes } from "sequelize";
import Trucks from "./trucks.js";
import Users from "./users.js";
import Loads from "./loads.js";

const Shipments = sequelize.define("shipments", {
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
  status: {
    name: "status",
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  },
  {
    tableName:"shipments",
    timestamps:false
  }
);

Trucks.hasMany(Shipments, { foreignKey: "truck_id", onDelete: "CASCADE" });
Shipments.belongsTo(Trucks, { foreignKey: "truck_id" });
Users.hasMany(Shipments, { foreignKey: "trucker_id", onDelete: "CASCADE" });
Shipments.belongsTo(Users, { foreignKey: "trucker_id" });
Loads.hasMany(Shipments, { foreignKey: "load_id", onDelete: "CASCADE" });
Shipments.belongsTo(Loads, { foreignKey: "load_id" });



export default Shipments;