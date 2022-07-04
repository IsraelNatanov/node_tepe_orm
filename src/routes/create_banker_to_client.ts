import express from "express";
import {Client} from "../entities/client"
import {Banker} from "../entities/banker"
import { Transaction, TransactionTypes } from "../entities/Transaction";




const router = express.Router();

router.put("/api/banker/:bankerId/client/:clientId/", async (req,res) =>{
    const {bankerId, clientId} = req.params;

    
    const client = await Client.findOne({where: {id: parseInt(clientId)}});

    const banker = await Banker.findOne({where: {id: parseInt(bankerId)}});
    if(!banker || !client){
        return res.json({
            nmg: "banker or client not found"
        })
    }
    banker.clintes = [
        client
    ]

    await banker.save();

    return res.json({
        nmg: "banker conneected to client"
    })

})

export {router as createBankerToClientRouter }