CREATE DATABASE IF NOT EXISTS companydb;
USE companydb;

CREATE TABLE peliculas (
    id INT(11) NOT NULL AUTO_INCREMENT,
    titulo VARCHAR(45) DEFAULT NULL,
    anio YEAR,
    critica VARCHAR(140) DEFAULT NULL,
    caratula BOOLEAN NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE copias (    
    numberCopy INT(11) NOT NULL AUTO_INCREMENT,
    deterioro BOOLEAN DEFAULT FALSE,
    formato VARCHAR(45),
    id INT(11),
    precioAlquiler INT(11),
    PRIMARY KEY (numberCopy),    
    FOREIGN KEY (id) REFERENCES peliculas(id)
);

CREATE TABLE clientes (
    codigoCliente INT(11) NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(45) DEFAULT NULL,
    apellido1 VARCHAR(45) DEFAULT NULL,
    apellido2 VARCHAR(45) DEFAULT NULL,
    direccion VARCHAR (45) DEFAULT NULL,
    email VARCHAR(60) NOT NULL,
    PRIMARY KEY(codigoCliente)
);


CREATE TABLE prestamos (
    id_prestamos INT(11) NOT NULL AUTO_INCREMENT,
    fecha_prestamo DATE,
    fecha_tope DATE,
    fecha_entregado DATE,
    codigoCliente INT(11),
    numberCopy INT(11),
    PRIMARY KEY(id_prestamos),
    FOREIGN KEY (codigoCliente) REFERENCES clientes(codigoCliente),
    FOREIGN KEY (numberCopy) REFERENCES copias(numberCopy)    
);

INSERT INTO `companydb`.`clientes` (`codigoCliente`, `nombre`, `apellido1`, `apellido2`, `direccion`, `email`) VALUES ('1', 'Daniel', 'Cabiativa', 'Felacio', 'calle 123', 'daniel@mail.com');
INSERT INTO `companydb`.`clientes` (`codigoCliente`, `nombre`, `apellido1`, `apellido2`, `direccion`, `email`) VALUES ('2', 'Alejandra', 'Santos', 'Rodriguez', 'avenida 123', 'aleja@mail.com');
INSERT INTO `companydb`.`clientes` (`codigoCliente`, `nombre`, `apellido1`, `apellido2`, `direccion`, `email`) VALUES ('3', 'Cristiano', 'Ronaldo', 'Siuuu', 'av. 123', 'elbicho@mail.com');

INSERT INTO `companydb`.`peliculas` (`id`, `titulo`, `anio`, `critica`) VALUES ('1', 'El Lobo de Wall Street', 2013, 'Excelente');
INSERT INTO `companydb`.`peliculas` (`id`, `titulo`, `anio`, `critica`) VALUES ('2', 'El Club de la Pelea', 1999, 'Excelente');
INSERT INTO `companydb`.`peliculas` (`id`, `titulo`, `anio`, `critica`) VALUES ('3', 'Harry Potter', 2001, 'Buena');

INSERT INTO `companydb`.`copias` (`numberCopy`, `deterioro`, `formato`, `id`, `precioAlquiler`) VALUES ('1', '1', 'dvd', '1', '1000');
INSERT INTO `companydb`.`copias` (`numberCopy`, `deterioro`, `formato`, `id`, `precioAlquiler`) VALUES ('2', '1', 'cd', '2', '2000');
INSERT INTO `companydb`.`copias` (`numberCopy`, `deterioro`, `formato`, `id`, `precioAlquiler`) VALUES ('3', '0', 'blu-ray', '3', '3000');

INSERT INTO `companydb`.`prestamos` (`id_prestamos`, `fecha_prestamo`, `fecha_tope`, `fecha_entregado`, `codigoCliente`, `numberCopy`) VALUES ('1', '2022-10-01', '2022-11-01', '2022-10-15', '1', '1');
INSERT INTO `companydb`.`prestamos` (`id_prestamos`, `fecha_prestamo`, `fecha_tope`, `fecha_entregado`, `codigoCliente`, `numberCopy`) VALUES ('2', '2022-10-05', '2022-11-05', '2022-10-20', '2', '2');
INSERT INTO `companydb`.`prestamos` (`id_prestamos`, `fecha_prestamo`, `fecha_tope`, `fecha_entregado`, `codigoCliente`, `numberCopy`) VALUES ('3', '2022-10-10', '2022-11-10', '2022-10-25', '3', '3');

select * from peliculas;

