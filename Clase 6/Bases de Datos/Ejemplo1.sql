#Crear una base de datos
CREATE DATABASE Ejemplo1;
USE Ejemplo1; #asigna esta BD como la de trabajo
CREATE TABLE Tabla1(Sensor INT, Sensor2 REAL); #crea una tabla en la BD
DESCRIBE Tabla1; #Muestra la información de los atributos de la BD
INSERT INTO Tabla1 VALUES(12,12.4); #Agrega registros a la tabla
SELECT *FROM Tabla1; # Consulta la tabla
DROP TABLE Tabla1; #Elimina la BD