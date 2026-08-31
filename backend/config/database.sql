-- Active: 1787097504514@@127.0.0.1@3308@mysql
CREATE DATABASE IF NOT EXISTS control_gastos;
USE control_gastos;

-- Tabla de categorías de gastos
CREATE TABLE categoria (
    id_categoria INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL
);

-- Tabla de gastos
CREATE TABLE gasto (
    id_gasto INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    valor DECIMAL(10,2) NOT NULL,
    fecha DATE NOT NULL,
    id_categoria INT NOT NULL,
    FOREIGN KEY (id_categoria) REFERENCES categoria(id_categoria)
);

-- Tabla de personas
CREATE TABLE persona (
    id_persona INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    correo VARCHAR(100) NOT NULL UNIQUE,
    telefono VARCHAR(20)
);

-- Tabla de registros de gastos
CREATE TABLE registro_gasto (
    id_registro INT AUTO_INCREMENT PRIMARY KEY,
    fecha DATE NOT NULL,
    id_persona INT NOT NULL,
    FOREIGN KEY (id_persona) REFERENCES persona(id_persona)
);

-- Detalle de los gastos registrados
CREATE TABLE detalle_gasto (
    id_detalle INT AUTO_INCREMENT PRIMARY KEY,
    id_registro INT NOT NULL,
    id_gasto INT NOT NULL,
    cantidad INT NOT NULL,
    valor_unitario DECIMAL(10,2) NOT NULL,
    FOREIGN KEY (id_registro) REFERENCES registro_gasto(id_registro),
    FOREIGN KEY (id_gasto) REFERENCES gasto(id_gasto)
);

-- =========================================
-- DATOS INICIALES
-- =========================================

-- Categorías
INSERT INTO categoria (nombre) VALUES
('Alimentación'),
('Transporte'),
('Vivienda'),
('Entretenimiento'),
('Educación'),
('Salud'),
('Servicios');

-- Gastos
INSERT INTO gasto (nombre, valor, fecha, id_categoria) VALUES
('Mercado', 250000, '2026-08-01', 1),
('Transporte', 50000, '2026-08-02', 2),
('Arriendo', 800000, '2026-08-01', 3),
('Cine', 40000, '2026-08-03', 4),
('Curso de programación', 150000, '2026-08-04', 5),
('Medicamentos', 60000, '2026-08-05', 6),
('Internet', 90000, '2026-08-06', 7),
('Restaurante', 85000, '2026-08-07', 1),
('Gasolina', 70000, '2026-08-08', 2),
('Videojuego', 120000, '2026-08-09', 4);

-- Personas
INSERT INTO persona (nombre, correo, telefono) VALUES
('Juan Perez', 'juan.perez@email.com', '3001111111'),
('Maria Gomez', 'maria.gomez@email.com', '3002222222'),
('Carlos Rodriguez', 'carlos.rodriguez@email.com', '3003333333'),
('Laura Martinez', 'laura.martinez@email.com', '3004444444'),
('Andres Torres', 'andres.torres@email.com', '3005555555');

-- Registros de gastos
INSERT INTO registro_gasto (fecha, id_persona) VALUES
('2026-08-01', 1),
('2026-08-05', 2),
('2026-08-08', 3);

-- Detalle de los registros
INSERT INTO detalle_gasto 
(id_registro, id_gasto, cantidad, valor_unitario) VALUES
(1, 1, 1, 250000),
(1, 3, 1, 800000),
(2, 5, 1, 150000),
(2, 6, 1, 60000),
(3, 2, 1, 50000),
(3, 9, 1, 70000);

-- =========================================
-- CONSULTAS DE PRUEBA
-- =========================================

SELECT * FROM categoria;

SELECT * FROM gasto;

SELECT * FROM persona;

SELECT * FROM registro_gasto;

SELECT * FROM detalle_gasto;
