create database listaSuperHeroi;
use listaSuperHeroi;

create table superherois (
	id_heroi				int primary key auto_increment,
    nm_heroi			varchar(50),
    ds_heroi		varchar(500),
    bl_voa				boolean
);
