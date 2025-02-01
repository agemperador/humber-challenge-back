import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";
import Products from "./products.js";

const Loads = sequelize.define("loads", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  productQuantity: {
    name: "product_quantity",
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  created_at: {
    name: "created_at",
    type: DataTypes.DATE, 
    defaultValue: DataTypes.NOW,
  },
  fare: {
    type: DataTypes.DECIMAL(20,2),
    allowNull: false,
  },
  fareType: {
    name: "fare_type",
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  distance: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  fromCity: {
    name: "from_city",
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  fromAddress: {
    name:"from_address",
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  toCity: {
    name:"to_city",
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  toAddress: {
    name:"to_address",
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  }, 
  }, 
  {
    tableName:"loads",
    timestamps:false
  }
);

Products.hasMany(Loads, { foreignKey: "product_id", onDelete: "CASCADE" });
Loads.belongsTo(Products, { foreignKey: "product_id" });

export default Loads;