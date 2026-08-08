-- Creación de la base de datos
CREATE DATABASE IF NOT EXISTS poligastos_db;
USE poligastos_db;

-- Tabla de Usuarios
CREATE TABLE IF NOT EXISTS usuarios (
    id_usuario INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    correo VARCHAR(100) NOT NULL UNIQUE,
    fecha_registro DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Tabla de Categorías
CREATE TABLE IF NOT EXISTS categorias (
    id_categoria INT AUTO_INCREMENT PRIMARY KEY,
    nombre_categoria VARCHAR(50) NOT NULL
);

-- Tabla de Gastos
CREATE TABLE IF NOT EXISTS gastos (
    id_gasto INT AUTO_INCREMENT PRIMARY KEY,
    id_usuario INT NOT NULL,
    id_categoria INT NOT NULL,
    monto DECIMAL(10, 2) NOT NULL,
    descripcion VARCHAR(255),
    fecha_gasto DATE NOT NULL,
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario) ON DELETE CASCADE,
    FOREIGN KEY (id_categoria) REFERENCES categorias(id_categoria) ON DELETE CASCADE
);

-- INSERCIÓN DE DATOS DE PRUEBA (Mínimo 10 datos)

-- Usuarios
INSERT INTO usuarios (nombre, correo) VALUES
('Juan Gómez', 'juan.gomez@correo.com'),
('María López', 'maria.lopez@correo.com');

-- Categorías
INSERT INTO categorias (nombre_categoria) VALUES
('Alimentación'),
('Transporte'),
('Servicios Públicos'),
('Entretenimiento'),
('Educación');

-- Gastos (12 registros)
INSERT INTO gastos (id_usuario, id_categoria, monto, descripcion, fecha_gasto) VALUES
(1, 1, 45000.00, 'Almuerzo ejecutivo', '2026-08-01'),
(1, 2, 12000.00, 'Pasaje de transporte público', '2026-08-01'),
(1, 3, 85000.00, 'Factura de energía', '2026-08-02'),
(1, 4, 32000.00, 'Boleta de cine y combo de palomitas', '2026-08-03'),
(1, 1, 120000.00, 'Mercado quincenal', '2026-08-04'),
(1, 5, 250000.00, 'Cuota de matrícula universidad', '2026-08-05'),
(2, 1, 28000.00, 'Cena en restaurante', '2026-08-01'),
(2, 2, 15000.00, 'Recarga de tarjeta de transporte', '2026-08-02'),
(2, 3, 60000.00, 'Pago del servicio de internet', '2026-08-03'),
(2, 4, 18000.00, 'Suscripción mensual de streaming', '2026-08-04'),
(2, 1, 35000.00, 'Compra de café y snacks', '2026-08-05'),
(2, 5, 45000.00, 'Compra de cuaderno y útiles escolares', '2026-08-06');