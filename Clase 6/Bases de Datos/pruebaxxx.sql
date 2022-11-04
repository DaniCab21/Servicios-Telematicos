-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`varitas`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`varitas` ;

CREATE TABLE IF NOT EXISTS `mydb`.`varitas` (
  `usuario` VARCHAR(255) NOT NULL,
  `tipo` TEXT NULL,
  `ubicacion` TEXT NULL,
  PRIMARY KEY (`usuario`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`estudiantes`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`estudiantes` ;

CREATE TABLE IF NOT EXISTS `mydb`.`estudiantes` (
  `nombre` INT NULL,
  `apellido` TEXT NULL,
  `usuario` VARCHAR(255) NOT NULL,
  `edad` INT NULL,
  `nota` REAL NULL,
  `casa` TEXT NULL,
  `varitasUsuario` VARCHAR(45) NULL,
  `varitas_usuario` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`usuario`),
  INDEX `fk_estudiantes_varitas_idx` (`varitas_usuario` ASC) VISIBLE,
  CONSTRAINT `fk_estudiantes_varitas`
    FOREIGN KEY (`varitas_usuario`)
    REFERENCES `mydb`.`varitas` (`usuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
