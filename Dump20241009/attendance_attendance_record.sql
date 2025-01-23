-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: localhost    Database: attendance
-- ------------------------------------------------------
-- Server version	8.0.31

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
-- Table structure for table `attendance_record`
--

DROP TABLE IF EXISTS `attendance_record`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `attendance_record` (
  `id` bigint NOT NULL,
  `date` varchar(255) DEFAULT NULL,
  `number_of_students` int NOT NULL,
  `time` varchar(255) DEFAULT NULL,
  `subject_id` bigint DEFAULT NULL,
  `faculty` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK18j7qln35awnsfxk4af9wf76` (`subject_id`),
  KEY `FKmkhay5jqitainmhh9u73cg47h` (`faculty`),
  CONSTRAINT `FK18j7qln35awnsfxk4af9wf76` FOREIGN KEY (`subject_id`) REFERENCES `subject` (`id`),
  CONSTRAINT `FKmkhay5jqitainmhh9u73cg47h` FOREIGN KEY (`faculty`) REFERENCES `user` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `attendance_record`
--

LOCK TABLES `attendance_record` WRITE;
/*!40000 ALTER TABLE `attendance_record` DISABLE KEYS */;
INSERT INTO `attendance_record` VALUES (20240618174200227,'2024-06-08',3,'01:30 PM',1,'amol'),(20240618174401821,'2024-06-18',3,'12:00 PM',2,'kiran'),(20240618191916448,'2024-06-18',2,'14:30 PM',1,'ram'),(20240820150726086,'2024-08-20',3,'15:30 PM',2,'amol'),(20240820173842265,'2024-08-20',2,'18:00 PM',3,'amol'),(20240827145304450,'2024-08-27',2,'15:00 PM',1,'amol'),(20240925125751710,'2024-09-25',3,'11:30 AM',1,'amol'),(20240925130331688,'2024-09-25',2,'12:30 PM',2,'ram'),(20240925162437895,'2024-09-25',2,'11:00 AM',1,'amol'),(20240926154315584,'2024-09-26',2,'13:30 PM',1,'amol');
/*!40000 ALTER TABLE `attendance_record` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-10-09 10:26:44
