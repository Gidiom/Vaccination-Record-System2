const mongoose = require("mongoose");

const Patients = mongoose.model("Patients");

function welcome (req,res){
    console.log("Welcome page called!");
    res.status(200).json({
        "patients":"to find patients  use /patients",
        "searchByDateOfBirth":"to search patient by DateOfBirth use /search/:DateOfBirth"
    });
}
//adding a new patient 
function addPatient(req, res) {
    console.log("Add patient patientId method called");
  
    const newPatient = {
        patientId: req.body.patientId,
        fname:req.body.fname,
        lname:req.body.lname,
        age: req.body.age,
        dateOfBirth: req.body.dateOfBirth,
        address: req.body.address,
        vaccinationType: req.body.vaccinationType,
        status: req.body.status

    }
    Patients.create(newPatient, function (err, newpat) {
        if(err){
            console.log("Error adding patient");
            res.status(500).json({"message":"Error adding patient"});
            return
        }else{
            console.log("new Patient added!");
            res.status(200).json(newpat);
        }
    });
}
// Getting all 
function getAll(req,res){
    console.log("Get all patients method called");

        Patients.find().exec(function(err,patients){
            if(err){
                console.log("Error finding patients");
                res.status(500).json({"Message":"Error finding patients"});
                return
            }else{
                console.log("Found patients!");
                res.status(200).json(patients);
            }
        })
}

//getting patient by Id
function getById(req,res){
    console.log("Get patient by Id method called");
    const patientId = req.params.patientId;
    //mongoose.isvalidObjectId() ..... uses regular expression to validate ID
    if(!mongoose.isValidObjectId(patientId)){
        console.log("Invalid patient Id");
        res.status(404).json({"Message":"Invalid patient Id!"});
        return;
    }else{
        Patients.findById(patientId).exec(function(err,patient){
            if(err){
                console.log("Error finding patient");
                res.status(500).json({"Message":"Error finding patient"});
                return;
            }else if(!patient){
                console.log("patient Id doesn't exist");
                res.status(404).json({"Message":"patient Id doesn't exist"});
                return
            }else{
                console.log("patient is found");
                res.status(200).json(patient);
            }
        });
    }
}


function deleteById(req,res){
    console.log("Delete patient by Id method called");
    const _id = req.params.patientId;
    //mongoose.isvalidObjectId() ..... uses regular expression to validate ID
    if(!mongoose.isValidObjectId(_id)){
        console.log("Invalid patient Id");
        res.status(404).json({"Message":"Invalid patient Id!"});
        return;
    }else{
        Patients.deleteById(_id).exec(function(err,deletedPatient){
            if(err){
                console.log("Error deleting patient");
                res.status(500).json({"Message":"Error finding the Patient"})
                return
            }else if(!deletedPatient){
                console.log("Patient Id doesn't exist");
                res.status(404).json({"Message":"Patient Id doesn't exist"});
                return
            }else{
                console.log("Patient deleted!");
                res.status(200).json(deletedPatient);
            }
        })
    }
}

// Incase patients forgot their ID, we can search them by date of birth
function searchByDateOfBirth(req,res){
    console.log("Search By dateOfBirth method called");
    const dateOfBirth = req.params.q;
    Patients.findOne({dateOfBirth:dateOfBirth}).exec(function(err,patient){
        if(err){
            console.log("Error finding patient by dateOfBirth");
            res.status(500).json({"Message":"Error finding patient by dateOfBirth"});
            return;
        }else if(!patient){
            console.log("dateOfBirth doesn't exist");
            res.status(404).json({"Message":"dateOfBirth doesn't exist"});
            return;
        }else{
            console.log("Patient by dateOfBirth is found!");
            res.status(200).json(patient);
        }
    });
}

module.exports ={addPatient,getAll,getById,deleteById,searchByDateOfBirth,welcome}