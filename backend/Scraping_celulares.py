# Importar librerías
import json
import random
from time import sleep
from selenium.webdriver.common.by import By
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import mysql.connector

# Configurar opciones de Chrome
chrome_options = Options()
prefs = {"profile.default_content_setting_values.notifications": 2}
chrome_options.add_experimental_option("prefs", prefs)
chrome_options.headless = False

# Iniciar driver de Chrome
driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()), options=chrome_options)

# Abrir página web
driver.get('https://versus.com/es/phone?filter[]=median_price%3D0,1125919&page=3')

# Esperar a que cargue la página
WebDriverWait(driver, 30).until(EC.element_to_be_clickable((By.XPATH, '//div[@class="MouchoHero__titleContainer___2AquV"]')))

# Cargar más productos
boton_cargar_mas = driver.find_element(By.XPATH, '//button[@data-cy="mouchoLoadMoreBtn"]')
for i in range(3):
    try:
        boton_cargar_mas.click()
        WebDriverWait(driver, 30).until(EC.element_to_be_clickable((By.XPATH, '//button[@data-cy="mouchoLoadMoreBtn"]')))
        boton_cargar_mas = driver.find_element(By.XPATH, '//button[@data-cy="mouchoLoadMoreBtn"]')
    except:
        break

# Obtener links de los productos de la página
links_productos = driver.find_elements(By.XPATH, '//a[@class="Item__link___3uW-Z"]')
links_de_la_pagina = [link.get_attribute("href") for link in links_productos]

# Conectar a la base de datos MySQL
conexion = mysql.connector.connect(
    host='localhost',
    user='root',
    password='',
    database='comparador_celulares'
)
cursor = conexion.cursor()

# Recopilar información de cada producto
datos_lista = []
for link in links_de_la_pagina:
    try:
        # Abrir página del producto
        driver.get(link)

        WebDriverWait(driver, 30).until(EC.element_to_be_clickable((By.XPATH, '//*[@id="overview"]/div/div[4]/div[1]/div/div[1]/button[1]')))

        # Obtener información del producto
        nombre = driver.find_element(By.XPATH, "//div[@class='nameContainer']/p").text
        puntaje_general = driver.find_element(By.XPATH, '//div[@class="RadarChart__value___Ootfo"]').text
        precio = driver.find_element(By.XPATH, "//div[@class='priceTagContainer']//span[@class='natural']//em").text
        puntaje_reseña = driver.find_element(By.XPATH, "//div[@class='RadarChart__rivalValue___3w6RE']/div[@class='RadarChart__value___Ootfo']").text

        # Obtener puntajes de diferentes categorías
        categorias = ["Diseño", "Pantalla", "Rendimiento", "Cámaras", "Sistema operativo", "Batería", "Audio", "Otros"]
        puntajes = {}
        for categoria in categorias:
            boton_categoria = driver.find_element(By.XPATH, f'//button[@aria-label="{categoria}"]')
            boton_categoria.click()
            sleep(1.5)  # Dar tiempo para que la página se actualice
            puntaje = driver.find_element(By.XPATH, "//div[@class='RadarChart__rivalValue___3w6RE']/div[@class='RadarChart__value___Ootfo']").text
            puntajes[categoria] = puntaje

        # Agregar información a la lista de datos
        datos = {
            "Nombre de dispositivo": nombre,
            "Precio": precio,
            "Puntaje de diseño": puntajes["Diseño"],
            "Puntaje de Pantalla": puntajes["Pantalla"],
            "Puntaje de Rendimiento": puntajes["Rendimiento"],
            "Puntaje de Camaras": puntajes["Cámaras"],
            "Puntaje de SO": puntajes["Sistema operativo"],
            "Puntaje de batería": puntajes["Batería"],
            "Puntaje de Audio": puntajes["Audio"],
            "Puntaje otros": puntajes["Otros"],
            "Puntaje de usuarios": puntaje_reseña,
            "Puntaje general": puntaje_general
        }
        datos_lista.append(datos)

        # Insertar datos en la base de datos MySQL
        sql = """INSERT INTO celulares (nombre, precio, puntaje_diseno, puntaje_pantalla, puntaje_rendimiento, puntaje_camaras, 
                 puntaje_so, puntaje_bateria, puntaje_audio, puntaje_otros, puntaje_usuarios, puntaje_general)
                 VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)"""
        valores = (nombre, precio, puntajes["Diseño"], puntajes["Pantalla"], puntajes["Rendimiento"], puntajes["Cámaras"],
                   puntajes["Sistema operativo"], puntajes["Batería"], puntajes["Audio"], puntajes["Otros"],
                   puntaje_reseña, puntaje_general)
        cursor.execute(sql, valores)
        conexion.commit()

    except Exception as e:
        print(e)
        driver.back()

# Guardar datos en archivo JSON
with open("salida.json", "w", encoding='utf-8') as archivo:
    json.dump(datos_lista, archivo)

# Cerrar el navegador y la conexión a la base de datos
driver.quit()
cursor.close()
conexion.close()