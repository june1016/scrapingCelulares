# PARA EJECUTAR LA APP :

---

**Para ejecutar el back-end-**
-cd .\frontend\
-venv\Scripts\activate
-python app.py

---

**Para ejecutar el Front-end :**
-cd .\frontend\
-npm start

---

**Editar credenciales de la base de datos por la correspondiente**
SQLALCHEMY_DATABASE_URI = os.getenv('DATABASE_URI', 'mysql+mysqlconnector://Usuario:Clave@localhost:Puerto/Base de datos nombre')
-Editar Usuario , Clave, puerto , base de de datos nombre

---

# API LINK BASE DE DATOS:

http://localhost:5000/api/celulares

---

# Estructura del Proyecto React (front-end):

Este documento describe la estructura y organización del proyecto React, incluyendo detalles sobre las carpetas, componentes, estilos, dependencias y archivos adicionales.

## Organización de Carpetas

El proyecto está estructurado de la siguiente manera para promover un código mantenible y escalable:

- **Componentes**: Incluye todos los componentes reutilizables de la aplicación.
- **Estilos**: Contiene los archivos CSS y las configuraciones de Tailwind CSS.
- **Configuraciones**: Alberga archivos de configuración esenciales como `package.json` y `postcss.config.js`.

## Enrutamiento

Se utiliza `react-router-dom` para gestionar la navegación entre los siguientes componentes principales:

- `CriteriosBusqueda`
- `ReporteGenerado`

## Componentes Principales

### `CriteriosBusqueda.js`

Este componente permite a los usuarios ingresar criterios de búsqueda para filtrar los celulares. Se implementa `react-hook-form` para la validación de formularios y `axios` para realizar peticiones al API.

### `ReporteGenerado.js`

Muestra los resultados de la búsqueda, incluyendo celulares destacados, un gráfico comparativo y un gráfico del top 10. Se utiliza `react-chartjs-2` para la creación de gráficos.

## Estilos

- **Tailwind CSS**: Se usa para el diseño general con configuraciones personalizadas en `tailwind.config.js`.
- **CSS Personalizado**: Cada componente tiene su propio archivo `styles.css` para estilos específicos.

## Dependencias

El proyecto utiliza varias bibliotecas clave para su funcionamiento:

- `react-hook-form`
- `axios`
- `chart.js`
- `daisyui`
- `formik`

## Archivos Adicionales

- **`App.js`**: Define la ruta principal y configura el enrutador de `react-router-dom`.
- **`index.js`**: Es el punto de entrada que renderiza el componente `App`.
- **`package.json`**: Enumera las dependencias y scripts del proyecto.
- **`postcss.config.js`**: Configura PostCSS para el procesamiento de estilos.

---

# Estructura del Proyecto flask python (back-end):

Este documento proporciona una descripción general de los componentes clave del proyecto Flask y su propósito dentro de la aplicación.

## Archivos Principales

- **`app.py`**: Es el archivo principal de Flask donde se define y configura la aplicación. Aquí se inicializa la aplicación y se registran las rutas y los blueprints.

- **`models.py`**: Define las clases del modelo de datos correspondientes a las tablas de la base de datos. Aquí se encuentran las definiciones de ORM que facilitan las interacciones con la base de datos.

- **`controllers.py`**: Contiene las funciones controladoras que manejan las solicitudes HTTP. Estas funciones interactúan con los modelos y definen la lógica de negocio de la aplicación.

- **`requirements.txt`**: Lista todas las dependencias de Python necesarias para ejecutar la aplicación. Se puede instalar todo el entorno con el comando `pip install -r requirements.txt`.

- **`config.py`**: Alberga las configuraciones para la aplicación Flask. Aquí se pueden definir diferentes configuraciones para los entornos de desarrollo, prueba y producción.
