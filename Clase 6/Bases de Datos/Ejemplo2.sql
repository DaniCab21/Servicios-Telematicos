create database Ejemplo2;
use Ejemplo2;
create table Tabla1(fecha date, hora time, usuario text, edad int);
insert into Tabla1 values('2022-10-27', '15:45:00', 'daniel', 28);
select *from Tabla1;
insert into Tabla1 (fecha, hora, usuario, edad) values(current_date(), current_date(),'daniel2',28);
select *from Tabla1;
insert into Tabla1(usuario, edad) values('Daniel3', 123);
Select *from Tabla1;