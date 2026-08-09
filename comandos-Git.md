# Comandos Git - Entrega académica

## 1. Crear la carpeta del proyecto
```bash
mkdir tienda-videojuegos
cd tienda-videojuegos
```

## 2. Inicializar Git
```bash
git init
```

## 3. Revisar el estado
```bash
git status
```

## 4. Crear y cambiar a la rama de trabajo
```bash
git branch estudiante
 git checkout estudiante
```
> Si tu profesor indicó un nombre específico para la rama, usa ese nombre.

## 5. Agregar los archivos
```bash
git add .
```

## 6. Crear el primer commit
```bash
git commit -m "Crear estructura inicial del proyecto"
```

## 7. Ver los commits
```bash
git log --oneline
```

## 8. Conectar el repositorio local con GitHub
```bash
git remote add origin https://github.com/TU-USUARIO/tienda-videojuegos.git
```

## 9. Subir la rama a GitHub
```bash
git push -u origin estudiante
```

## 10. Comandos útiles para mostrar en las capturas
```bash
git branch
git status
git log --oneline
git remote -v
```

## Nota para la entrega
Las capturas de pantalla deben ser tomadas por el estudiante en su propia consola después de ejecutar los comandos. No se deben inventar capturas.
