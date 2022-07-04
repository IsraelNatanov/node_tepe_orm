import express from "express";
import {Banker} from "../entities/banker"

const router = express.Router();

router.post('/api/banker', async (req, res) =>{
    const {
        firstName,
        lastName,
        email,
        cardNumber,
        employees_number,
    } = req.body;

    const banker = Banker.create({
        first_name: firstName,
        lest_name: lastName,
        email,
        card_number: cardNumber,
        employees_number
    
    });
    await banker.save();

    return res.json(banker)


    
});

export{
    router as createBankerRouter
}