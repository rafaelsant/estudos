import {Request, Response} from 'express';
import {getRepository} from 'typeorm';

import Orphanage from '../models/Orphanage'
export default {
    async index(request:Request, response:Response){
        const orphanagesRepository = getRepository(Orphanage);
        const orphanages = await orphanagesRepository.find()
        return response.json(orphanages);
    },
    async show(request:Request, response:Response){

        const{id} = request.params;
        const orphanagesRepository = getRepository(Orphanage);
        try {const orphanages = await orphanagesRepository.findOneOrFail(id)
        return response.json(orphanages);
        }
        catch{
            response.status(404);
        }
    },
    async create(request: Request, response:Response){
        const {
            name,
            latitude,
            longitude,
            about,
            instructions,
            opening_hours,
            open_on_weekends,
        } = request.body;
        console.log(request.body);
        const orphanagesRepository = getRepository(Orphanage);
        const orphanage =orphanagesRepository.create({
            name,
            latitude,
            longitude,
            about,
            instructions,
            opening_hours,
            open_on_weekends
        })
        await orphanagesRepository.save(orphanage);
        response.status(201).json(orphanage);
    }
}