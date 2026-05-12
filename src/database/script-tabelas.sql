drop database individual_project_1;
create database individual_project_1;
use	individual_project_1;

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

CREATE TABLE IF NOT EXISTS `individual_project_1`.`Usuário` (
  `idUsuário` INT NOT NULL,
  `Name` VARCHAR(45) NOT NULL,
  `NickName` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `senha` VARCHAR(45) NOT NULL,
  `FotoPerfil` CHAR(1) NOT NULL,
  PRIMARY KEY (`idUsuário`),
  UNIQUE INDEX `NickName_UNIQUE` (`NickName` ASC) VISIBLE,
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE)
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `individual_project_1`.`trofeus` (
  `idtrofeu` INT NOT NULL,
  `nome` VARCHAR(45) NULL,
  `desc` VARCHAR(45) NULL,
  PRIMARY KEY (`idtrofeu`))
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `individual_project_1`.`relacionamento_trofeus` (
  `Usuário_idUsuário` INT NOT NULL,
  `trofeu_idtrofeu` INT NOT NULL,
  PRIMARY KEY (`Usuário_idUsuário`, `trofeu_idtrofeu`),
  INDEX `fk_relacionamento_trofeu1_idx` (`trofeu_idtrofeu` ASC) VISIBLE,
  CONSTRAINT `fk_relacionamento_Usuário1`
    FOREIGN KEY (`Usuário_idUsuário`)
    REFERENCES `individual_project_1`.`Usuário` (`idUsuário`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_relacionamento_trofeu1`
    FOREIGN KEY (`trofeu_idtrofeu`)
    REFERENCES `individual_project_1`.`trofeus` (`idtrofeu`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `individual_project_1`.`pokemons` (
  `id` INT NOT NULL,
  `Name` VARCHAR(100) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `individual_project_1`.`relacionamento_pokemon` (
  `Usuário_idUsuário` INT NOT NULL,
  `pokemons_id` INT NOT NULL,
  PRIMARY KEY (`Usuário_idUsuário`, `pokemons_id`),
  INDEX `fk_trelacionamentopokemon_pokemons1_idx` (`pokemons_id` ASC) VISIBLE,
  CONSTRAINT `fk_trelacionamentopokemon_Usuário1`
    FOREIGN KEY (`Usuário_idUsuário`)
    REFERENCES `individual_project_1`.`Usuário` (`idUsuário`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_trelacionamentopokemon_pokemons1`
    FOREIGN KEY (`pokemons_id`)
    REFERENCES `individual_project_1`.`pokemons` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `individual_project_1`.`Treiners` (
  `Usuário_idUsuário` INT NOT NULL,
  `pokedex` INT NULL,
  `catchMultiplier` INT NULL,
  `TrainerDamage` INT NULL,
  `TrainerLife` INT NULL,
  `Badges` INT NULL,
  `Elite` INT NULL,
  `Champeon` VARCHAR(45) NULL,
  `qtdPokeballs` INT NULL,
  PRIMARY KEY (`Usuário_idUsuário`),
  CONSTRAINT `fk_Treiners_Usuário1`
    FOREIGN KEY (`Usuário_idUsuário`)
    REFERENCES `individual_project_1`.`Usuário` (`idUsuário`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
