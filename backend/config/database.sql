CREATE DATABASE IF NOT EXISTS mi_aplicacion;
USE mi_aplicacion;

CREATE TABLE roles (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre_rol VARCHAR(50) NOT NULL UNIQUE
);

CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    id_rol INT,
    fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (id_rol) REFERENCES roles(id) ON DELETE SET NULL
);

INSERT INTO roles (nombre_rol) VALUES 
('Administrador'),
('Usuario Estándar'),
('Moderador');

INSERT INTO usuarios (nombre, email, id_rol) VALUES 
('Juan Pérez', 'juan.perez@email.com', 1),
('María López', 'maria.lopez@email.com', 2),
('Carlos Mendoza', 'carlos.mendoza@email.com', 2),
('Ana Gómez', 'ana.gomez@email.com', 3),
('Luis Torres', 'luis.torres@email.com', 2),
('Laura Beltrán', 'laura.beltran@email.com', 2),
('Diego Ruiz', 'diego.ruiz@email.com', 3),
('Elena Castro', 'elena.castro@email.com', 2),
('Andrés Villa', 'andres%villa@email.com', 2),
('Sofia Marín', 'sofia.marin@email.com', 2);
