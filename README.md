# SB-Frontend (React)

## 1. Requerimientos Previos

- Node.js y npm (o yarn) instalados en tu máquina.
- Node.js versión 16 o superior recomendada.
- npm o yarn para la instalación de dependencias.
- Git para clonar o descargar el repositorio.
- El backend corriendo localmente (o en la nube) y que exponga sus endpoints vía HTTP.
- Por defecto, se asume que el backend está en `http://localhost:5088`.

## 2. Clonar o Descargar el Proyecto

```bash
git clone https://github.com/Daniel349167/sb-frontend.git
```

Una vez descargado, ubícate en la carpeta raíz del proyecto frontend:

```bash
cd sb-frontend
```

## 3. Crear Archivo .env

En la raíz del proyecto (donde se encuentra `package.json`), crea un archivo llamado `.env` y define la variable de entorno:

```env
REACT_APP_API_BASE_URL=http://localhost:5088
```

Esta variable apuntará a la URL base de la API en .NET para que la aplicación React pueda consumir los endpoints (p. ej. para CRUD de entidades gubernamentales).

## 4. Instalar Dependencias

Instala todas las dependencias definidas en `package.json`. Puedes usar npm o yarn:

```bash
# Con npm
npm install

# Con yarn
yarn
```

## 5. Ejecutar la Aplicación en Modo Desarrollo

Para arrancar el frontend en modo desarrollo (hot-reloading):

```bash
# Con npm
npm start

# Con yarn
yarn start
```

Por defecto, la aplicación estará disponible en:

```bash
http://localhost:3000
```

o en el puerto que tu entorno tenga configurado.

## 6. Construir para Producción

Para generar una versión optimizada (lista para producción), ejecuta:

```bash
# Con npm
npm run build

# Con yarn
yarn build
```

Se creará una carpeta `build` con los archivos que podrás desplegar en cualquier servicio de hosting estático.
