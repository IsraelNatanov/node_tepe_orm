import express from "express";
import { main } from "src";
import { createQueryBuilder, DataSource, Migration } from "typeorm";
import { Client } from "../entities/client";

const router = express.Router();


router.get("/api/client", async (req, res) =>{
    
    const photos = await main.getRepository(Client)
        .createQueryBuilder("photo") // first argument is an alias. Alias is what you are selecting - photos. You must specify it.
        .innerJoinAndSelect("photo.metadata", "metadata")
        .leftJoinAndSelect("photo.albums", "album")
        .where("photo.isPublished = true")
        .andWhere("(photo.name = :photoName OR photo.name = :bearName)")
        .orderBy("photo.id", "DESC")
        .skip(5)
        .take(10)
        .setParameters({ photoName: "My", bearName: "Mishka" })
        .getMany()
    // const client = await main.getRepository(Client)
    // .createQueryBuilder("client") // first argument is an alias. Alias is what you are selecting - photos. You must specify it.
    // .innerJoinAndSelect("photo.metadata", "metadata")
    // .leftJoinAndSelect("photo.albums", "album")
    // .where("photo.isPublished = true")
    // .andWhere("(photo.name = :photoName OR photo.name = :bearName)")
    // .orderBy("photo.id", "DESC")
    // .skip(5)
    // .take(10)
    // .setParameters({ photoName: "My", bearName: "Mishka" })
    // .getMany()
    
    // const client = createQueryBuilder((
    //     'client'
    // ))
    // .select('client')
    // .from(Client, 'client')
    // .where('client.id = :clientId',{clientId: 4})
    // .getOne()

    // return res.json(client)
})

export {router as fatchClientRouter}