CREATE TABLE usuarios (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(50) NOT NULL
);

CREATE TABLE categorias (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(50) NOT NULL
);

CREATE TABLE transacciones (
    id INT PRIMARY KEY AUTO_INCREMENT,
    concepto VARCHAR(100) NOT NULL,
    monto DECIMAL(10, 2) NOT NULL,
    tipo ENUM('Ingreso', 'Gasto') NOT NULL,
    usuario_id INT,
    categoria_id INT,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id),
    FOREIGN KEY (categoria_id) REFERENCES categorias(id)
);
