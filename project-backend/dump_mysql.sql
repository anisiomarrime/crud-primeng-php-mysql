CREATE TABLE `crud_primeng_php`.`usuarios` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(145) NOT NULL,
  `email` VARCHAR(145) NOT NULL,
  `senha` VARCHAR(145) NOT NULL,
  `created_at` DATETIME NOT NULL,
  `updated_at` DATETIME NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `nome_UNIQUE` (`nome` ASC)
);