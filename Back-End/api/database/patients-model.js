const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
    street:{
        type: String,
        required: true
    },
    city:{
        type:String,
        required: true
    },
    state:{
        type: String,
        required: true
    },
   
    zipcode:{
        type: String,
        required: true
    }
    
})

// 1000 N 4th street Fairfield IA 52557

const patientSchema = new mongoose.Schema({
    patientId:{
        type:String,
        required:true,
        unique: true
    },
    fname:String,
    lname:{
        type:String,
        required:true
    },
    age:Number,
    dateOfBirth: String,
    address:addressSchema,
    vaccinationType: String,
    status: Boolean
});

mongoose.model("Patients",patientSchema,"patient")