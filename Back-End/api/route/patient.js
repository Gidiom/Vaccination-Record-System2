const express = require("express");
const router = express.Router();
const patientController = require("../controller/patientController");

router.route("/").get(patientController.welcome);

router.route("/patients").post(patientController.addPatient)
.get(patientController.getAll);

router.route("/patients/:patientId").get(patientController.getById)
.delete(patientController.deleteById);

router.route("/search/:q").get(patientController.searchByDateOfBirth);

module.exports = router;