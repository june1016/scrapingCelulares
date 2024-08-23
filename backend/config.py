# -*- coding: utf-8 -*-

# Importar la dependencia necesaria
import os

# Definir una clase de configuración para la aplicación
class Config:
    # Configurar la URI de la base de datos a partir de una variable de entorno o un valor predeterminado
    SQLALCHEMY_DATABASE_URI = os.getenv('DATABASE_URI', 'mysql+mysqlconnector://root:1234@localhost:3306/scraping')
    
    # Desactivar el seguimiento de modificaciones en la base de datos para mejorar el rendimiento
    SQLALCHEMY_TRACK_MODIFICATIONS = False
