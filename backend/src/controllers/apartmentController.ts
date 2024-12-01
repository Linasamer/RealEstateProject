import { Request, Response } from 'express';
import Apartment from '../models/apartmentModel';

// Get all apartments
export const fetchAllApartments = async (req: Request, res: Response) => {
  try {
    const apartments = await Apartment.findAll();
    res.json(apartments);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving apartments', error });
  }
};

// Get apartment by ID
export const fetchApartmentById = async (req: Request, res: Response) => {
  try {
    const apartment = await Apartment.findByPk(req.params.id);
    if (!apartment) {
      return res.status(404).json({ message: 'Apartment not found' });
    }
    res.json(apartment);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving apartment', error });
  }
};

// Create a new apartment
export const createNewApartment = async (req: Request, res: Response) => {
  const { name, location, price, description } = req.body;

  if (!name || !location || !price || !description) {
    return res.status(400).json({ message: 'Please provide all required fields' });
  }

  try {
    const newApartment = await Apartment.create({
      name,
      location,
      price,
      description,
    });
    res.status(201).json(newApartment);
  } catch (error) {
    res.status(500).json({ message: 'Error saving apartment', error });
  }
};

  /// Correct syntax for async function
  export const deleteApartment = async (req: Request, res: Response) => {
    try {
      const apartment = await Apartment.findByPk(req.params.id);

      if (!apartment) {
        return res.status(404).json({ message: 'Apartment not found' });
      }

      await apartment.destroy(); // Delete the apartment from the database
      res.status(200).json({ message: 'Apartment deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Error deleting apartment', error });
    }
  };





