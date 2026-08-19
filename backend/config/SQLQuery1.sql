
CREATE DATABASE poligastos;

USE poligastos;

CREATE TABLE usuarios (
    id_usuarios INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100),
    email VARCHAR(100)
);

INSERT INTO usuarios (nombre, email)
VALUES
('Tomas Garzon', 'tomas@gmail.com'),
('Laura Martinez', 'laura@gmail.com'),
('Carlos Rodriguez', 'carlos@gmail.com'),
('Sofia Hernandez', 'sofia@gmail.com'),
('Andres Gomez', 'andres@gmail.com'),
('Valentina Perez', 'valentina@gmail.com'),
('Daniel Torres', 'daniel@gmail.com'),
('Camila Rojas', 'camila@gmail.com'),
('Sebastian Castro', 'sebastian@gmail.com'),
('Maria Gonzalez', 'maria@gmail.com');

SELECT * FROM usuarios;


CREATE TABLE categorias (
    id_categorias INT AUTO_INCREMENT PRIMARY KEY,
    categoria VARCHAR(20) NOT NULL,
    
    CONSTRAINT categorias_categoria
    CHECK (categoria IN (
        'Alimentacion',
        'Transporte',
        'Servicios',
        'Ocio',
        'Sueldo'
    ))
);

INSERT INTO categorias (categoria)
VALUES
('Alimentacion'),
('Transporte'),
('Servicios'),
('Ocio'),
('Sueldo');

SELECT * FROM categorias;

CREATE TABLE movimientos (
    id_movimientos INT AUTO_INCREMENT PRIMARY KEY,
    tipo VARCHAR(15) NOT NULL,
    monto DECIMAL(10,2),
    descripcion VARCHAR(50),
    id_categorias INT,
    id_usuarios INT,

    CONSTRAINT movimientos_tipo
    CHECK (tipo IN ('gasto', 'ingreso')),

    CONSTRAINT fk_movimientos_categorias
    FOREIGN KEY (id_categorias)
    REFERENCES categorias(id_categorias),

    CONSTRAINT fk_movimientos_usuarios
    FOREIGN KEY (id_usuarios)
    REFERENCES usuarios(id_usuarios)
);

INSERT INTO movimientos
(tipo, monto, descripcion, id_categorias, id_usuarios)
VALUES
('gasto', 25000.00, 'Almuerzo', 1, 1),
('gasto', 12000.00, 'Transporte bus', 2, 1),
('ingreso', 1500000.00, 'Pago de salario', 5, 1),
('gasto', 85000.00, 'Servicio de internet', 3, 2),
('gasto', 45000.00, 'Salida con amigos', 4, 3),
('gasto', 30000.00, 'Compra de alimentos', 1, 4),
('ingreso', 1200000.00, 'Pago de salario', 5, 5),
('gasto', 20000.00, 'Transporte taxi', 2, 6),
('gasto', 70000.00, 'Pago de servicios', 3, 7),
('gasto', 55000.00, 'Cine y comida', 4, 8);

SELECT * FROM movimientos;
```


