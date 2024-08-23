# -*- coding: utf-8 -*-

# Importar la dependencia necesaria
from flask_sqlalchemy import SQLAlchemy

# Crear una instancia de SQLAlchemy
db = SQLAlchemy()

# Definir el modelo Celular
class Celular(db.Model):
    __tablename__ = 'celulares'
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(100), nullable=False)
    precio = db.Column(db.String(255), nullable=False)
    puntaje_diseno = db.Column(db.String(255))
    puntaje_pantalla = db.Column(db.String(255))
    puntaje_rendimiento = db.Column(db.String(255))
    puntaje_camaras = db.Column(db.String(255))
    puntaje_so = db.Column(db.String(255))
    puntaje_bateria = db.Column(db.String(255))
    puntaje_audio = db.Column(db.String(255))
    puntaje_otros = db.Column(db.String(255))
    puntaje_usuarios = db.Column(db.String(255))
    puntaje_general = db.Column(db.String(255))
