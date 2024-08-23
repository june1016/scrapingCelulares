# -*- coding: utf-8 -*-

# Importar las dependencias necesarias
from flask import Flask
from flask_cors import CORS
from models import db
from controllers import api_bp

# Crear una instancia de la aplicación Flask
app = Flask(__name__)

# Habilitar CORS para permitir solicitudes desde cualquier origen
CORS(app)

# Configurar la aplicación con la configuración definida en el archivo config.py
app.config.from_object('config.Config')

# Inicializar la base de datos con la aplicación
db.init_app(app)

# Registrar el blueprint de la API con la aplicación, con la ruta base '/api'
app.register_blueprint(api_bp, url_prefix='/api')

# Ejecutar la aplicación si este archivo es el archivo principal
if __name__ == '__main__':
    app.run(debug=True)
