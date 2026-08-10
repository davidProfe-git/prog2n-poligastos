CREATE DATABASE IF NOT EXISTS control_gastos;
USE control_gastos;

CREATE TABLE usuarios (
    id_usuario INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    fecha_registro DATETIME DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB;

CREATE TABLE categorias (
    id_categoria INT AUTO_INCREMENT PRIMARY KEY,
    nombre_categoria VARCHAR(50) NOT NULL,
    descripcion VARCHAR(150)
) ENGINE=InnoDB;

CREATE TABLE gastos (
    id_gasto INT AUTO_INCREMENT PRIMARY KEY,
    monto DECIMAL(10, 2) NOT NULL,
    descripcion VARCHAR(255),
    fecha_gasto DATE NOT NULL,
    id_usuario INT NOT NULL,
    id_categoria INT NOT NULL,
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario) ON DELETE CASCADE,
    FOREIGN KEY (id_categoria) REFERENCES categorias(id_categoria) ON DELETE CASCADE
) ENGINE=InnoDB;


INSERT INTO usuarios (nombre, email) VALUES
('Miguel Ángel', 'miguel@example.com'),
('Laura Gómez', 'laura@example.com');

INSERT INTO categorias (nombre_categoria, descripcion) VALUES
('Alimentación', 'Compras de supermercado y restaurantes'),
('Transporte', 'Pasajes, combustible y mantenimiento'),
('Servicios Públicos', 'Luz, agua, internet y gas'),
('Entretenimiento', 'Cine, streaming y suscripciones'),
('Educación', 'Cursos, libros y materiales');

INSERT INTO gastos (monto, descripcion, fecha_gasto, id_usuario, id_categoria) VALUES
(45000.00, 'Mercado semanal en el supermercado', '2026-08-01', 1, 1),
(12000.00, 'Carga de tarjeta de transporte público', '2026-08-02', 1, 2),
(85000.00, 'Pago de factura de Internet', '2026-08-03', 1, 3),
(35000.00, 'Suscripción mensual a plataforma de video', '2026-08-04', 1, 4),
(150000.00, 'Inscripción a curso de programación', '2026-08-05', 1, 5),
(28000.00, 'Almuerzo ejecutivo', '2026-08-06', 1, 1),
(50000.00, 'Combustible para vehículo', '2026-08-07', 2, 2),
(62000.00, 'Pago de servicio de energía eléctrica', '2026-08-08', 2, 3),
(42000.00, 'Entradas de cine y combos', '2026-08-08', 2, 4),
(95000.00, 'Compra de libro técnico de bases de datos', '2026-08-09', 1, 5);