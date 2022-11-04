create database Ejemplo3; #crear la BD
use Ejemplo3; 
create table Tabla1(fecha date, hora time, usuario text, edad int);#crear tabla
insert into Tabla1 values('2022-10-30', '15:50:00', 'daniel1', 30);#insertar datos
insert into Tabla1 values('2022-10-28', '15:55:00', 'daniel2', 28);#insertar datos
insert into Tabla1 values('2022-10-29', '15:45:00', 'daniel3', 29);#insertar datos
select *from Tabla1;#mostrar la tabla
select fecha, usuario from Tabla1;#mostrar solo las columnas fecha y usuario
select distinct fecha from Tabla1;#mostrar solo la columna fecha
select *from Tabla1 order by edad;#ordenar de menor a mayor la columna edad
select *from Tabla1 order by edad desc;#ordenar la columna edad de forma descendente
select *from Tabla1 where edad=28;#mostrar solo la fila con el atributo de la celda edad
select *from Tabla1 where edad>28 and edad<30;#mostrar solo la tabla que cumpla una condición
select *from Tabla1 where usuario<>'daniel1';#mostrar todos los datos diferentes de dicho usuario
 
