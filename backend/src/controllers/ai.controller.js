const aiSservice = require('../services/ai.services')





module.exports.getReview = async (req,res)=>{

    const code = req.body.code;

    if (!code) {

        return res.status(400).send("prompt is require")
        
    }

    const response = await aiSservice(code)


    res.send(response);
}