use master;
go

drop database if exists poligastos;
go


create database poligastos;
use poligastos;

create table usuarios (
id_usuarios int identity(1,1) primary key not null,
nombre varchar (100),
email varchar (100)
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
GO

select * from usuarios;

create table categorias(
id_categorias int identity (1,1) primary key not null,
categoria varchar (20) not null
constraint categorias_categoria
check (categoria in ('Alimentacion','Transporte',
'Servicios','Ocio','Sueldo'))
);

INSERT INTO categorias (categoria)
VALUES
('Alimentacion'),
('Transporte'),
('Servicios'),
('Ocio'),
('Sueldo');
GO

select * from categorias;

create table movimientos(
id_movimientos int identity (1,1) primary key not null,
tipo varchar (15) not null
constraint movimientos_tipo
check (tipo in ('gasto','ingreso')),
monto numeric (10,2),
descripcion varchar(50),
id_categorias int, foreign key (id_categorias) references categorias(id_categorias),
id_usuarios int, foreign key (id_usuarios) references usuarios(id_usuarios)
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
GO

select * from movimientos;

