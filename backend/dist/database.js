"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const sequelize = new sequelize_1.Sequelize(process.env.DB_NAME || 'realestate', process.env.DB_USER || 'postgres', process.env.DB_PASSWORD || 'password', {
    host: process.env.DB_HOST || 'db',
    dialect: 'postgres',
});
exports.default = sequelize;
