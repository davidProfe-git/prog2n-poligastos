
DROP DATABASE IF EXISTS gastos_db;
CREATE DATABASE gastos_db
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;
USE gastos_db;
 
-- ---------------------------------------------------------
-- 1. Usuarios
-- ---------------------------------------------------------
CREATE TABLE usuarios (
  id          INT AUTO_INCREMENT PRIMARY KEY,
  nombre      VARCHAR(80)  NOT NULL,
  correo      VARCHAR(120) NOT NULL,
  clave_hash  VARCHAR(255) NOT NULL,
  creado_en   TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT uk_usuarios_correo UNIQUE (correo)
) ENGINE = InnoDB;
 
-- ---------------------------------------------------------
-- 2. Categorías de gasto
-- ---------------------------------------------------------
CREATE TABLE categorias (
  id      INT AUTO_INCREMENT PRIMARY KEY,
  nombre  VARCHAR(60) NOT NULL,
  color   CHAR(7)     NOT NULL DEFAULT '#2A24D6',
  CONSTRAINT uk_categorias_nombre UNIQUE (nombre)
) ENGINE = InnoDB;
 
-- ---------------------------------------------------------
-- 3. Medios de pago
-- ---------------------------------------------------------
CREATE TABLE medios_pago (
  id      INT AUTO_INCREMENT PRIMARY KEY,
  nombre  VARCHAR(40) NOT NULL,
  CONSTRAINT uk_medios_pago_nombre UNIQUE (nombre)
) ENGINE = InnoDB;
 
-- ---------------------------------------------------------
-- 4. Presupuesto mensual por usuario
--    periodo: 'AAAA-MM' (ej. '2026-07')
-- ---------------------------------------------------------
CREATE TABLE presupuestos (
  id          INT AUTO_INCREMENT PRIMARY KEY,
  usuario_id  INT           NOT NULL,
  periodo     CHAR(7)       NOT NULL,
  monto       DECIMAL(12,2) NOT NULL,
  CONSTRAINT uk_presupuesto_periodo UNIQUE (usuario_id, periodo),
  CONSTRAINT fk_presupuestos_usuario
    FOREIGN KEY (usuario_id) REFERENCES usuarios (id)
    ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB;
 
-- ---------------------------------------------------------
-- 5. Gastos (tabla principal)
-- ---------------------------------------------------------
CREATE TABLE gastos (
  id             INT AUTO_INCREMENT PRIMARY KEY,
  usuario_id     INT           NOT NULL,
  categoria_id   INT           NOT NULL,
  medio_pago_id  INT           NOT NULL,
  concepto       VARCHAR(120)  NOT NULL,
  monto          DECIMAL(12,2) NOT NULL,
  tipo           ENUM('ingreso','gasto') NOT NULL DEFAULT 'gasto',
  fecha          DATE          NOT NULL,
  hora           TIME          NOT NULL DEFAULT '00:00:00',
  creado_en      TIMESTAMP     NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT ck_gastos_monto CHECK (monto > 0),
  CONSTRAINT fk_gastos_usuario
    FOREIGN KEY (usuario_id) REFERENCES usuarios (id)
    ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT fk_gastos_categoria
    FOREIGN KEY (categoria_id) REFERENCES categorias (id)
    ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT fk_gastos_medio_pago
    FOREIGN KEY (medio_pago_id) REFERENCES medios_pago (id)
    ON DELETE RESTRICT ON UPDATE CASCADE,
  INDEX idx_gastos_fecha (usuario_id, fecha),
  INDEX idx_gastos_categoria (categoria_id)
) ENGINE = InnoDB;
 
-- =========================================================
--  DATOS DE PRUEBA
-- =========================================================
 
INSERT INTO usuarios (nombre, correo, clave_hash) VALUES
  ('Juan Sebastián', 'juan@gastos.test', '$2y$10$hashDePruebaNoUsarEnProduccion'),
  ('Camila Rojas',   'camila@gastos.test', '$2y$10$otroHashDePruebaNoUsarJamas');
 
INSERT INTO categorias (nombre, color) VALUES
  ('Arriendo',      '#2A24D6'),
  ('Mercado',       '#1C179E'),
  ('Transporte',    '#D6215F'),
  ('Restaurantes',  '#D8F24A'),
  ('Servicios',     '#6C7180'),
  ('Suscripciones', '#14161F');
 
INSERT INTO medios_pago (nombre) VALUES
  ('Tarjeta débito'),
  ('Tarjeta crédito'),
  ('Efectivo'),
  ('Transferencia');
 
INSERT INTO presupuestos (usuario_id, periodo, monto) VALUES
  (1, '2026-07', 4200000.00),
  (1, '2026-06', 4000000.00),
  (2, '2026-07', 2500000.00);
 
-- 14 movimientos de julio de 2026 
INSERT INTO gastos (usuario_id, categoria_id, medio_pago_id, concepto, monto, fecha, hora) VALUES
  (1, 1, 4, 'Arriendo apartamento',      1450000.00, '2026-07-01', '10:00:00'),
  (1, 5, 4, 'Internet y telefonía',       125000.00, '2026-07-03', '09:20:00'),
  (1, 2, 1, 'Mercado quincenal',          312500.00, '2026-07-05', '17:45:00'),
  (1, 3, 2, 'Gasolina',                   140000.00, '2026-07-09', '07:55:00'),
  (1, 5, 4, 'Factura de agua',             91000.00, '2026-07-14', '15:10:00'),
  (1, 6, 2, 'Suscripción almacenamiento',   19900.00, '2026-07-18', '20:30:00'),
  (1, 2, 1, 'Mercado quincenal',           302400.00, '2026-07-20', '18:05:00'),
  (1, 6, 2, 'Suscripción música',           26900.00, '2026-07-27', '21:10:00'),
  (1, 3, 3, 'Taxi al aeropuerto',           69900.00, '2026-07-27', '18:44:00'),
  (1, 4, 3, 'Café y pan',                   28000.00, '2026-07-28', '11:30:00'),
  (1, 5, 4, 'Factura de energía',          182000.00, '2026-07-28', '16:05:00'),
  (1, 4, 2, 'Domicilio cena',               54900.00, '2026-07-28', '19:22:00'),
  (1, 2, 1, 'Frutas y verduras',            69400.00, '2026-07-29', '08:02:00'),
  (1, 3, 3, 'Recarga tarjeta TransMi',      20000.00, '2026-07-29', '09:15:00'),
  (1, 4, 1, 'Almuerzo Carrera 11',          38000.00, '2026-07-29', '13:40:00');
