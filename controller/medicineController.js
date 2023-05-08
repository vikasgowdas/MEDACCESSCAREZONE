import Medicine from "../models/Medicine.js";
import { StatusCodes } from "http-status-codes";
import { BadRequestError, NotFoundError } from "../errors/index.js";

const createMedicine = async (req, res) => {
  const { name, type, description, price } = req.body;

  if (!name || !type || !price) {
    throw new BadRequestError("Please Provide All Values");
  }

  const medicine = await Medicine.create(req.body);
  res.status(StatusCodes.CREATED).json({ medicine });
};
const deleteMedicine = async (req, res) => {
  res.send("delete medicine");
};
const getAllMedicines = async (req, res) => {
  const medicine = await Medicine.find({});
  res.send(medicine).status(200);
};
const updatemedicine = async (req, res) => {
  res.send("update medicine");
};

export { createMedicine, deleteMedicine, getAllMedicines, updatemedicine };
