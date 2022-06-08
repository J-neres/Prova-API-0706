import Connection from "mysql2/typings/mysql/lib/Connection";
import {con} from './connection.js'

export async function InserirSuperHeroi (heroi){
    const comando = 'insert into tb_super_heroi (id_super_heroi, nm_super_heroi, ds_super_heroi, bl_voa)
        values (?,?,?,?)'
        
        const [resposta] = await con.query (comando, [heroi.id, heroi.nome, heroi.ds, heroi.bl]);
        heroi.id = resposta.insertId;

    return heroi;
}

export async function buscarPorNome (nome) {
    const comando = 'select id_heroi, nm_heroi, ds_heroi, bl_voa from tb_superheroi where nm_heroi like ?';
    const [linhas] = await con.query (comando, ['%${nome}%']);
return linhas[0]; 
}