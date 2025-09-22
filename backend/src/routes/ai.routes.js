const express = require ('express')
const aiController = require ("../controllers/ai.controller")
const bcrypt = require ('bcrypt')
const router = express.Router();

router.post("/get-review", aiController.getReview)

// const 




module.exports= router;