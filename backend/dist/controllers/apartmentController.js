"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteApartment = exports.createNewApartment = exports.fetchApartmentById = exports.fetchAllApartments = void 0;
const apartmentModel_1 = __importDefault(require("../models/apartmentModel"));
// Get all apartments
const fetchAllApartments = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const apartments = yield apartmentModel_1.default.findAll();
        res.json(apartments);
    }
    catch (error) {
        res.status(500).json({ message: 'Error retrieving apartments', error });
    }
});
exports.fetchAllApartments = fetchAllApartments;
// Get apartment by ID
const fetchApartmentById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const apartment = yield apartmentModel_1.default.findByPk(req.params.id);
        if (!apartment) {
            return res.status(404).json({ message: 'Apartment not found' });
        }
        res.json(apartment);
    }
    catch (error) {
        res.status(500).json({ message: 'Error retrieving apartment', error });
    }
});
exports.fetchApartmentById = fetchApartmentById;
// Create a new apartment
const createNewApartment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, location, price, description } = req.body;
    if (!name || !location || !price || !description) {
        return res.status(400).json({ message: 'Please provide all required fields' });
    }
    try {
        const newApartment = yield apartmentModel_1.default.create({
            name,
            location,
            price,
            description,
        });
        res.status(201).json(newApartment);
    }
    catch (error) {
        res.status(500).json({ message: 'Error saving apartment', error });
    }
});
exports.createNewApartment = createNewApartment;
/// Correct syntax for async function
const deleteApartment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const apartment = yield apartmentModel_1.default.findByPk(req.params.id);
        if (!apartment) {
            return res.status(404).json({ message: 'Apartment not found' });
        }
        yield apartment.destroy(); // Delete the apartment from the database
        res.status(200).json({ message: 'Apartment deleted successfully' });
    }
    catch (error) {
        res.status(500).json({ message: 'Error deleting apartment', error });
    }
});
exports.deleteApartment = deleteApartment;
