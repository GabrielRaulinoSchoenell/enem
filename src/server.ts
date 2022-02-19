import express, {Request, Response} from 'express';
import dotenv from 'dotenv';
import path from 'path';
import enem from './routes/enem';
import mustache from 'mustache-express';

const server = express();

dotenv.config();

server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));
server.engine('mustache', mustache());

server.use(express.static(path.join(__dirname, '../public')));
server.use(express.urlencoded({extended:true}));

server.use(enem);

server.use((req: Request, res: Response)=>{
    res.status(404);
    res.send('pagina nao encontrada');
})

server.listen(process.env.PORT)