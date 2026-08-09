-- Base de datos: tienda_videojuegos
-- Proyecto académico - nivel inicial

CREATE DATABASE IF NOT EXISTS tienda_videojuegos;
USE tienda_videojuegos;

CREATE TABLE categoria (
    id_categoria INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL
);

CREATE TABLE producto (
    id_producto INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    precio DECIMAL(10,2) NOT NULL,
    stock INT NOT NULL,
    id_categoria INT NOT NULL,
    FOREIGN KEY (id_categoria) REFERENCES categoria(id_categoria)
);

CREATE TABLE cliente (
    id_cliente INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    correo VARCHAR(100) NOT NULL UNIQUE,
    telefono VARCHAR(20)
);

CREATE TABLE venta (
    id_venta INT AUTO_INCREMENT PRIMARY KEY,
    fecha DATE NOT NULL,
    id_cliente INT NOT NULL,
    FOREIGN KEY (id_cliente) REFERENCES cliente(id_cliente)
);

CREATE TABLE detalle_venta (
    id_detalle INT AUTO_INCREMENT PRIMARY KEY,
    id_venta INT NOT NULL,
    id_producto INT NOT NULL,
    cantidad INT NOT NULL,
    precio_unitario DECIMAL(10,2) NOT NULL,
    FOREIGN KEY (id_venta) REFERENCES venta(id_venta),
    FOREIGN KEY (id_producto) REFERENCES producto(id_producto)
);

-- Datos iniciales
INSERT INTO categoria (nombre) VALUES
('Acción'),
('Aventura'),
('Deportes'),
('Carreras'),
('Estrategia');

INSERT INTO producto (nombre, precio, stock, id_categoria) VALUES
('FIFA 25', 180000, 10, 3),
('Mario Kart 8', 160000, 8, 4),
('Minecraft', 120000, 15, 2),
('God of War', 190000, 7, 1),
('Forza Horizon 5', 175000, 9, 4),
('Age of Empires IV', 150000, 6, 5),
('The Legend of Zelda', 200000, 5, 2),
('Mortal Kombat 1', 185000, 11, 1),
('NBA 2K25', 170000, 12, 3),
('Civilization VI', 140000, 4, 5);

INSERT INTO cliente (nombre, correo, telefono) VALUES
('Juan Perez', 'juan.perez@email.com', '3001111111'),
('Maria Gomez', 'maria.gomez@email.com', '3002222222'),
('Carlos Rodriguez', 'carlos.rodriguez@email.com', '3003333333'),
('Laura Martinez', 'laura.martinez@email.com', '3004444444'),
('Andres Torres', 'andres.torres@email.com', '3005555555');

INSERT INTO venta (fecha, id_cliente) VALUES
('2026-08-01', 1),
('2026-08-02', 2),
('2026-08-03', 3);

INSERT INTO detalle_venta (id_venta, id_producto, cantidad, precio_unitario) VALUES
(1, 1, 1, 180000),
(1, 3, 2, 120000),
(2, 2, 1, 160000),
(2, 6, 1, 150000),
(3, 4, 1, 190000),
(3, 9, 2, 170000);

-- Consultas de prueba
SELECT * FROM categoria;
SELECT * FROM producto;
SELECT * FROM cliente;
SELECT * FROM venta;
SELECT * FROM detalle_venta;
