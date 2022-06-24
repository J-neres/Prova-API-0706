use listaSuperHeroi;

insert into tb_superherois (id_heroi, nm_heroi, ds_heroi, bl_voa)
		values (1, 'homem aranha', 'Ele é Agil, e solta teia', false);
	
    
select
	id_heroi		id,
    nm_heroi		nome,
    ds_heroi		descricao,
    bl_voa			voa
from tb_superheroi
where nm_heroi 		like '%a%';