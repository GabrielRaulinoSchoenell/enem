import {Request, Response} from 'express';
import {Falas} from '../models/Falas';

export const main = async (req: Request, res: Response)=>{
    let list = await Falas.findAll();

    res.render('main', {list, count: list.length});
} 

export const numeric = (req: Request, res: Response)=>{
    let number = req.params.number;

    res.render('numeric', {number});
}
export const numericAction = async (req: Request, res: Response)=>{
        let counter = req.body.counter;
        let date = new Date();

        let {add, take} = req.body;
        if(add){
            const newEnem = await Falas.create({
                date
            });
        } else if(take){
            let fala = await Falas.findAll({
                order: [
                    ['id', 'DESC']
                ],
                limit: 1
            });

            let destroy = fala[0];

            await destroy.destroy();
            
        }

        res.redirect('/numeric/'+counter);
}

export const listen = (req: Request, res: Response)=>{
    res.render('listen');
}