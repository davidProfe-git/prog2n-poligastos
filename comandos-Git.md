# Comandos básicos de Git

## 1. Configuración inicial

```bash
git config --global user.name "T"
git config --global user.email "correo@ejemplo.com"
git config --list
```

## 2. Crear o clonar un repositorio

### Inicializar un repositorio

```bash
git init
```

### Clonar un repositorio existente

```bash
git clone URL_DEL_REPOSITORIO
```

---

## 3. Consultar el estado del repositorio

```bash
git status
```

Muestra los archivos modificados, nuevos, preparados para commit y la rama actual.

---

## 4. Agregar archivos al staging

### Agregar un archivo

```bash
git add archivo.js
```

### Agregar todos los archivos modificados

```bash
git add .
```

---

## 5. Crear un commit

```bash
git commit -m "Descripción del cambio"
```

Crea un punto de guardado con los cambios preparados.

### Agregar y hacer commit

```bash
git commit -am "Descripción del cambio"
```

> Solo funciona automáticamente con archivos que Git ya estaba siguiendo.

---

## 6. Consultar el historial

### Historial completo

```bash
git log
```

### Historial resumido

```bash
git log --oneline
```

### Ver los cambios de un commit

```bash
git show
```

---

## 7. Repositorios remotos

### Ver repositorios remotos

```bash
git remote -v
```

### Agregar un repositorio remoto

```bash
git remote add origin URL_DEL_REPOSITORIO
```

### Subir cambios

```bash
git push
```

### Subir una rama específica

```bash
git push origin main
```

### Descargar y fusionar cambios

```bash
git pull
```

### Descargar cambios sin fusionarlos

```bash
git fetch
```

---

## 8. Ramas (branches)

### Ver ramas

```bash
git branch
```

### Crear una rama

```bash
git branch nombre-rama
```

### Cambiar de rama

```bash
git switch nombre-rama
```

### Crear y cambiar a una rama

```bash
git switch -c nombre-rama
```

### Eliminar una rama

```bash
git branch -d nombre-rama
```

---

## 9. Fusionar ramas

```bash
git merge nombre-rama
```

Ejemplo:

```bash
git switch main
git merge desarrollo
```

Esto fusiona `desarrollo` dentro de `main`.

---

## 10. Deshacer cambios

### Descartar cambios de un archivo

```bash
git restore archivo.js
```

### Descartar todos los cambios no guardados

```bash
git restore .
```

### Quitar un archivo del staging

```bash
git restore --staged archivo.js
```

### Deshacer el último commit conservando los cambios

```bash
git reset --soft HEAD~1
```

### Deshacer el último commit eliminando los cambios

```bash
git reset --hard HEAD~1
```

> ⚠️ `git reset --hard` puede eliminar cambios de forma permanente.

---

# Flujo básico de trabajo

El flujo más común es:

```bash
git status
git add .
git commit -m "Descripción del cambio"
git push
```

En términos simples:

```text
Modificar archivos
       ↓
   git add .
       ↓
   git commit
       ↓
    git push
```

---

# Los comandos que debes memorizar primero

| Comando       | Función                                        |
| ------------- | ---------------------------------------------- |
| `git init`    | Crear un repositorio Git                       |
| `git clone`   | Clonar un repositorio                          |
| `git status`  | Ver estado del repositorio                     |
| `git add .`   | Agregar cambios al staging                     |
| `git commit`  | Guardar cambios                                |
| `git log`     | Ver historial                                  |
| `git branch`  | Administrar ramas                              |
| `git switch`  | Cambiar de rama                                |
| `git pull`    | Descargar y fusionar cambios                   |
| `git push`    | Subir cambios                                  |
| `git merge`   | Fusionar ramas                                 |
| `git restore` | Descartar/restaurar cambios                    |
| `git reset`   | Retroceder commits o sacar cambios del staging |
