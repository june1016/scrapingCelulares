# backend/controllers.py
# -*- coding: utf-8 -*-
# Controllers
from flask import Blueprint, request, jsonify
from models import db, Celular

api_bp = Blueprint('api', __name__)

@api_bp.route('/celulares', methods=['GET'])
def get_celulares():
    try:
        precio_min = request.args.get('precio_min', 0, type=float)
        precio_max = request.args.get('precio_max', 1000000, type=float)
        criterio = request.args.get('criterio', 'puntaje_general', type=str)

        print("Parámetros de búsqueda recibidos:")
        print("Precio mínimo:", precio_min)
        print("Precio máximo:", precio_max)
        print("Criterio:", criterio)
        
        celulares = Celular.query.filter(
            Celular.precio >= precio_min,
            Celular.precio <= precio_max
        ).order_by(getattr(Celular, criterio).desc()).limit(10).all()
        
        result = [celular.to_dict() for celular in celulares]
        print("Datos del reporte generados:")
        print(result)
        return jsonify(result), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

# Agregar métodos para convertir a dict
def to_dict(self):
    return {c.name: getattr(self, c.name) for c in self.__table__.columns}

Celular.to_dict = to_dict
