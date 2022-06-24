import { InserirSuperHeroi, buscarPorNome } from "../services/funcoes";

import {Router} from 'express';
const server = Router();

server.post('/heroi', async (req, resp) => {
    try{
        const novoheroi = req.body;
        if(!nomeheroi.nome)
            throw new error ('Nome do herói é obrigatório');

            const heroiInserido = await InserirSuperHeroi(novoheroi)
            resp.send(heroiInserido);
    }catch(err) {
        resp.status(401).send({
            erro:err.message
        });
    }
})

server.get ('/heroi/busca', async (req, resp) =>{
    try {
        const {nome} = req.query;
        const resposta = await buscarPorNome(nome);
        if (!resposta)
            resp.status(404).send([])
        else 
            resp.send (repsota);
    }catch (err) {
        resp.status(400).send({
            erro:err.message
        });
    }
})