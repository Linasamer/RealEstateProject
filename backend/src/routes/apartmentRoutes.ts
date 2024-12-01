import express from 'express';
import {
  fetchAllApartments,
  fetchApartmentById,
  createNewApartment,
  deleteApartment,
} from '../controllers/apartmentController';

const router = express.Router();

router.get('/', fetchAllApartments); 
router.get('/:id', fetchApartmentById);
router.post('/', createNewApartment); 
router.delete('/:id', deleteApartment);


export default router;

