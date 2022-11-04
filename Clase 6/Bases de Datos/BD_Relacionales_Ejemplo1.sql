create database Ejemplo5;
use Ejemplo1;
create table Estudiantes(nombre varchar(255), apellido varchar(255), usuario varchar(255),edad integer, nota real, casa varchar(255));
insert into Estudiantes(nombre, apellido, usuario, edad, nota, casa) values
('Harry', 'Potter', 'TheBoyWholived', 15, 4.0, 'Gryffindor'),
('Hermionie', 'Granger', 'Granger2', 15, 4.5, 'Gryffindor'),
('Ron', 'Weasley', 'weasley7', 15, 3.7, 'Gryffindor'),
('Draco', 'Malfoy', 'malfoy999', 15, 4.0, 'Slytherin'),
('Cedric', 'Diggory', 'diggory123', 15, 4.0, 'Hufflepuff');
select *from estudiantes;

create table Varitas(usuario varchar(255), tipo varchar(255), ubicacion varchar(255));
insert into Varitas(usuario, tipo, ubicacion) values
('TheBoyWholived', 'cedro', 'almacen'),
('Granger2', 'roble', 'casa'),
('weasley7', 'pla', 'colegio');
select *from Varitas;

select *from estudiantes inner join Varitas on estudiantes.usuario = Varitas.usuario;
select *from estudiantes right join Varitas on estudiantes.usuario = Varitas.usuario;
select *from estudiantes left join Varitas on estudiantes.usuario = Varitas.usuario;
select estudiantes.nota, Varitas.ubicacion from Estudiantes left join Varitas on Estudiantes.usuario = Varitas.usuario;


