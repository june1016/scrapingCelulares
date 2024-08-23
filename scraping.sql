CREATE DATABASE  IF NOT EXISTS `scraping` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `scraping`;
-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: scraping
-- ------------------------------------------------------
-- Server version	8.1.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `celulares`
--

DROP TABLE IF EXISTS `celulares`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `celulares` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) DEFAULT NULL,
  `precio` varchar(255) DEFAULT NULL,
  `puntaje_diseno` varchar(255) DEFAULT NULL,
  `puntaje_pantalla` varchar(255) DEFAULT NULL,
  `puntaje_rendimiento` varchar(255) DEFAULT NULL,
  `puntaje_camaras` varchar(255) DEFAULT NULL,
  `puntaje_so` varchar(255) DEFAULT NULL,
  `puntaje_bateria` varchar(255) DEFAULT NULL,
  `puntaje_audio` varchar(255) DEFAULT NULL,
  `puntaje_otros` varchar(255) DEFAULT NULL,
  `puntaje_usuarios` varchar(255) DEFAULT NULL,
  `puntaje_general` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=54 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `celulares`
--

LOCK TABLES `celulares` WRITE;
/*!40000 ALTER TABLE `celulares` DISABLE KEYS */;
INSERT INTO `celulares` VALUES (1,'Xiaomi Redmi Note 11 4G','25','43','37','72','55','61','46','38','57','43','43'),(2,'Unihertz Jelly 2E','190','41','29','69','46','96','34','25','54','43','43'),(3,'Oppo A16s','25','44','32','67','60','64','36','25','57','43','43'),(4,'Umidigi C1 Plus','80','44','21','61','56','96','47','13','58','43','43'),(5,'Honor X8','220','51','28','69','64','64','47','13','53','42','42'),(6,'Redmi 10 Power','43','43','30','78','61','64','48','25','46','42','42'),(7,'ZTE Blade V30','24','43','28','66','69','64','47','13','52','42','42'),(8,'Infinix Smart 7','100','44','22','60','56','96','46','25','40','42','42'),(9,'Cubot P80','170','43','28','59','54','96','36','13','64','42','42'),(10,'LG K62','4000','42','28','75','51','61','51','17','59','42','42'),(11,'Huawei P9','16','41','36','71','63','37','51','17','65','42','42'),(12,'Doogee N20 Pro','37','42','28','75','50','61','46','25','40','42','42'),(13,'Xiaomi Redmi 9','150','48','33','57','60','61','47','28','62','42','42'),(14,'Honor X7','170','51','21','73','64','64','47','13','52','42','42'),(15,'Realme Narzo 50A Prime','9.','61','32','65','56','64','47','13','57','41','41'),(16,'Vivo Y21','20','43','21','79','50','64','47','25','57','41','41'),(17,'Oukitel C31','220','43','21','58','54','96','47','25','38','40','40'),(18,'Xiaomi Mi 8 Lite','32','42','39','76','56','54','51','6','52','40','40'),(19,'Huawei Honor 8X','189','42','38','71','54','54','35','28','50','40','40'),(20,'Samsung Galaxy A13 5G','82','43','21','69','61','64','47','25','65','40','40'),(21,'Motorola Moto E32','240','71','21','61','55','64','47','14','45','39','39'),(22,'Lava Z2','16','43','39','64','47','57','36','25','45','39','39'),(23,'Blackview A53','120','44','21','58','48','96','46','25','37','39','39'),(24,'Oukitel WP18','135','53','19','60','63','64','57','13','51','39','39'),(25,'Cubot X30','412','42','28','76','51','61','35','N/A','43','39','39'),(26,'Huawei Nova Y70','38','43','20','75','55','64','48','13','50','39','39'),(27,'Motorola Moto Z Play','65','41','36','68','72','37','51','20','54','39','39'),(28,'Itel A70','90','35','20','60','68','96','46','25','40','39','39'),(29,'Realme C35','190','48','26','68','59','64','47','25','58','38','38'),(30,'Apple iPhone 6s Plus','124','39','26','51','69','26','33','20','66','38','38'),(31,'Realme C11','99','42','29','64','52','61','52','39','35','38','38'),(32,'Motorola Moto G20','245','42','21','67','66','61','32','37','61','38','38'),(33,'Samsung Galaxy A20','200','42','29','65','47','54','46','28','58','38','38'),(34,'Vivo Y20','25','42','21','70','45','61','52','25','46','37','37'),(35,'ZTE Blade A31','40','43','21','55','49','64','34','63','44','37','37'),(36,'Lenovo K12','200','42','21','71','47','61','52','17','35','37','37'),(37,'Tecno Spark 8C','22','43','20','61','63','61','36','25','41','37','37'),(38,'Nokia G11','120','49','21','62','48','64','47','25','57','37','37'),(39,'Samsung Galaxy A10e','94','43','21','71','56','54','34','13','46','36','36'),(40,'Vivo Y11s','24','42','20','69','43','61','46','28','46','36','36'),(41,'Xiaomi Redmi 9C','130','48','19','65','53','64','46','28','35','36','36'),(42,'Samsung Galaxy A10','78','46','21','67','48','57','51','28','38','36','36'),(43,'Poco C40','189','43','30','62','58','64','48','25','61','35','35'),(44,'Samsung Galaxy A10s','73','43','20','70','42','57','35','28','42','35','35'),(45,'Motorola Moto E40','198','54','21','67','54','61','46','25','53','34','34'),(46,'Samsung Galaxy A11','88','43','20','68','41','61','51','28','45','34','34'),(47,'Xiaomi Redmi 9A','71','48','30','66','44','61','61','28','29','34','34'),(48,'Apple iPhone 6','129','41','21','60','65','26','34','20','57','34','34'),(49,'ZTE Blade A51','19','43','21','54','50','61','35','25','49','33','33'),(50,'ZTE Blade A52','85','42','21','55','48','64','46','13','41','32','32'),(51,'Samsung Galaxy A01','63','43','20','68','39','61','34','28','33','32','32'),(52,'Samsung Galaxy J4 Plus','24','41','21','62','40','54','35','25','49','31','31'),(53,'Honor X7a','170','52','21','81','64','96','48','13','60','50','50');
/*!40000 ALTER TABLE `celulares` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-05-24  0:29:18
