import 'dotenv/config'

import funendpoints from 'endpoints/funendpoints'
import express from 'express'
import cors from 'cors'

const server = express();

server.use(cors());
server.use(express.json());
server.use(funendpoints);

server.listen(process.env.PORT,
    ()=> console.log(`API está conectada na porta ${process.env.PORT}`));