import express from "express";
const router = express.Router();

import {
  createMedicine,
  deleteMedicine,
  getAllMedicines,
  updatemedicine,
} from "../controller/medicineController.js";

router.route("/").post(createMedicine).get(getAllMedicines);
// * place before :id
router.route("/:id").delete(deleteMedicine).patch(updatemedicine);
export default router;
