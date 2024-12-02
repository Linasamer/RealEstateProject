import { DataTypes, Model } from 'sequelize';
import sequelize from '../database'; // Make sure this is correctly set up

class Apartment extends Model {}

Apartment.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4, // Auto-generating UUID
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT, // TEXT allows for longer descriptions
    },
  },
  {
    sequelize, // Make sure your sequelize instance is correctly passed
    modelName: 'Apartment',
    timestamps: true, // Enable automatic timestamps (createdAt and updatedAt)
  }
);

export default Apartment;
