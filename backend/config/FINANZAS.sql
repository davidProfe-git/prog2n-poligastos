DROP DATABASE IF EXISTS FINANZAS;
CREATE DATABASE FINANZAS;
USE FINANZAS;
CREATE TABLE cliente (
    id_usuario INT AUTO_INCREMENT PRIMARY KEY,
    correo VARCHAR(100) NOT NULL,
    fecha_registro DATE NOT NULL
);
CREATE TABLE cuentas (
    id_cuenta INT AUTO_INCREMENT PRIMARY KEY,
    tipo_cuenta VARCHAR(50) NOT NULL,
    saldo DECIMAL(15,2) NOT NULL,
    id_usuario INT NOT NULL,
    FOREIGN KEY (id_usuario) REFERENCES cliente(id_usuario)
);
CREATE TABLE categoria (
    id_categoria INT AUTO_INCREMENT PRIMARY KEY,
    descripcion VARCHAR(250) NOT NULL,
    estado VARCHAR(50) NOT NULL,
    total DECIMAL(15,2)
);
CREATE TABLE movimientos (
    id_movimiento INT AUTO_INCREMENT PRIMARY KEY,
    descripcion VARCHAR(250),
    fecha DATE NOT NULL,
    monto DECIMAL(15,2) NOT NULL,
    tipo VARCHAR(25) NOT NULL,
    id_cuenta INT NOT NULL,
    id_categoria INT NOT NULL,
    FOREIGN KEY (id_cuenta) REFERENCES cuentas(id_cuenta),
    FOREIGN KEY (id_categoria) REFERENCES categoria(id_categoria)
);
INSERT INTO cliente (correo, fecha_registro) VALUES
('mariana.lasprilla@gmail.com', '2025-02-15'),
('ana.asprilla@gmail.com', '2026-02-25'),
('maria.camila@gmail.com', '2025-12-11'),
('andres.gonzales@gmail.com', '2026-04-22');

INSERT INTO categoria (descripcion, estado, total) VALUES
('transporte', 'en uso', 150000),
('ropa', 'en uso', 100000),
('alimentos', 'en uso', 400000),
('servicios', 'en uso', 200000);

INSERT INTO cuentas (tipo_cuenta, saldo, id_usuario) VALUES
('Ahorros', 15000000, 1),
('corriente', 20000000, 2);

INSERT INTO movimientos
(descripcion, fecha, monto, tipo, id_cuenta, id_categoria)
VALUES
('pago quincena', '2025-05-11', 1200000, 'ingreso', 1, 1),
('ahorros', '2026-08-21', 1500000, 'gastos', 1, 2);
SELECT * FROM cliente;
