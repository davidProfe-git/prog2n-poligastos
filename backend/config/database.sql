-- 1. Borramos la BD si existe para limpiar por completo
DROP DATABASE IF EXISTS poligastos_db;

-- 2. Creamos la BD desde cero
CREATE DATABASE poligastos_db;
USE poligastos_db;

-- 3. Tabla Usuarios 
CREATE TABLE usuarios (
    id_usuario INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    correo VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    fecha_registro DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- 4. Tabla Categorías
CREATE TABLE categorias (
    id_categoria INT AUTO_INCREMENT PRIMARY KEY,
    nombre_categoria VARCHAR(50) NOT NULL,
    tipo_categoria ENUM('ingreso', 'egreso', 'ambos') DEFAULT 'egreso'
);

-- 5. Tabla Transacciones
CREATE TABLE transacciones (
    id_transaccion INT AUTO_INCREMENT PRIMARY KEY,
    id_usuario INT NOT NULL,
    id_categoria INT NOT NULL,
    tipo ENUM('ingreso', 'egreso') NOT NULL,
    monto DECIMAL(10, 2) NOT NULL,
    descripcion VARCHAR(255),
    fecha_hora DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario) ON DELETE CASCADE,
    FOREIGN KEY (id_categoria) REFERENCES categorias(id_categoria) ON DELETE CASCADE
);

-- DATOS DE PRUEBA
INSERT INTO usuarios (nombre, correo, password) VALUES
('Juan Gómez', 'juan.gomez@correo.com', '123456'),
('María López', 'maria.lopez@correo.com', '123456');

INSERT INTO categorias (nombre_categoria, tipo_categoria) VALUES
('Alimentación', 'egreso'), ('Transporte', 'egreso'), ('Servicios Públicos', 'egreso'),
('Entretenimiento', 'egreso'), ('Educación', 'egreso'), ('Salario', 'ingreso'), ('Trabajo Independiente', 'ingreso');

INSERT INTO transacciones (id_usuario, id_categoria, tipo, monto, descripcion, fecha_hora) VALUES
(1, 6, 'ingreso', 1500000.00, 'Salario quincenal', '2026-08-01 08:00:00'),
(2, 6, 'ingreso', 1800000.00, 'Salario quincenal', '2026-08-01 08:30:00'),
(1, 1, 'egreso', 45000.00, 'Almuerzo ejecutivo', '2026-08-01 13:15:00'),
(2, 4, 'egreso', 18000.00, 'Suscripción mensual de streaming', '2026-08-04 21:05:00');