-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 31, 2026 at 01:05 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `theatre_booking`
--

-- --------------------------------------------------------

--
-- Table structure for table `reservations`
--

CREATE TABLE `reservations` (
  `reservation_id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `showtime_id` int(11) DEFAULT NULL,
  `seat_id` int(11) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `reservations`
--

INSERT INTO `reservations` (`reservation_id`, `user_id`, `showtime_id`, `seat_id`, `created_at`) VALUES
(4, NULL, 5, 9, '2026-05-17 11:15:51'),
(5, NULL, 5, 10, '2026-05-17 11:15:51'),
(6, NULL, 6, 11, '2026-05-17 11:16:04'),
(7, NULL, 14, 175, '2026-05-17 11:16:10'),
(20, 3, 5, 13, '2026-05-28 10:09:43'),
(21, 3, 5, 14, '2026-05-28 10:09:43'),
(30, 2, 5, 86, '2026-05-28 16:10:37');

-- --------------------------------------------------------

--
-- Table structure for table `seats`
--

CREATE TABLE `seats` (
  `seat_id` int(11) NOT NULL,
  `theatre_id` int(11) DEFAULT NULL,
  `seat_number` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `seats`
--

INSERT INTO `seats` (`seat_id`, `theatre_id`, `seat_number`) VALUES
(9, 1, 'A1'),
(10, 1, 'A2'),
(11, 1, 'A3'),
(12, 1, 'A4'),
(13, 1, 'A5'),
(14, 1, 'A6'),
(15, 1, 'A7'),
(16, 1, 'A8'),
(17, 1, 'A9'),
(18, 1, 'A10'),
(19, 1, 'B1'),
(20, 1, 'B2'),
(21, 1, 'B3'),
(22, 1, 'B4'),
(23, 1, 'B5'),
(24, 1, 'B6'),
(25, 1, 'B7'),
(26, 1, 'B8'),
(27, 1, 'B9'),
(28, 1, 'B10'),
(29, 1, 'C1'),
(30, 1, 'C2'),
(31, 1, 'C3'),
(32, 1, 'C4'),
(33, 1, 'C5'),
(34, 1, 'C6'),
(35, 1, 'C7'),
(36, 1, 'C8'),
(37, 1, 'C9'),
(38, 1, 'C10'),
(39, 1, 'D1'),
(40, 1, 'D2'),
(41, 1, 'D3'),
(42, 1, 'D4'),
(43, 1, 'D5'),
(44, 1, 'D6'),
(45, 1, 'D7'),
(46, 1, 'D8'),
(47, 1, 'D9'),
(48, 1, 'D10'),
(49, 1, 'E1'),
(50, 1, 'E2'),
(51, 1, 'E3'),
(52, 1, 'E4'),
(53, 1, 'E5'),
(54, 1, 'E6'),
(55, 1, 'E7'),
(56, 1, 'E8'),
(57, 1, 'E9'),
(58, 1, 'E10'),
(59, 1, 'F1'),
(60, 1, 'F2'),
(61, 1, 'F3'),
(62, 1, 'F4'),
(63, 1, 'F5'),
(64, 1, 'F6'),
(65, 1, 'F7'),
(66, 1, 'F8'),
(67, 1, 'F9'),
(68, 1, 'F10'),
(69, 1, 'G1'),
(70, 1, 'G2'),
(71, 1, 'G3'),
(72, 1, 'G4'),
(73, 1, 'G5'),
(74, 1, 'G6'),
(75, 1, 'G7'),
(76, 1, 'G8'),
(77, 1, 'G9'),
(78, 1, 'G10'),
(79, 1, 'H1'),
(80, 1, 'H2'),
(81, 1, 'H3'),
(82, 1, 'H4'),
(83, 1, 'H5'),
(84, 1, 'H6'),
(85, 1, 'H7'),
(86, 1, 'H8'),
(87, 1, 'H9'),
(88, 1, 'H10'),
(89, 1, 'I1'),
(90, 1, 'I2'),
(91, 1, 'I3'),
(92, 1, 'I4'),
(93, 1, 'I5'),
(94, 1, 'I6'),
(95, 1, 'I7'),
(96, 1, 'I8'),
(97, 1, 'I9'),
(98, 1, 'I10'),
(99, 1, 'J1'),
(100, 1, 'J2'),
(101, 1, 'J3'),
(102, 1, 'J4'),
(103, 1, 'J5'),
(104, 1, 'J6'),
(105, 1, 'J7'),
(106, 1, 'J8'),
(107, 1, 'J9'),
(108, 1, 'J10'),
(109, 2, 'A1'),
(110, 2, 'A2'),
(111, 2, 'A3'),
(112, 2, 'A4'),
(113, 2, 'A5'),
(114, 2, 'A6'),
(115, 2, 'A7'),
(116, 2, 'A8'),
(117, 2, 'A9'),
(118, 2, 'A10'),
(119, 2, 'B1'),
(120, 2, 'B2'),
(121, 2, 'B3'),
(122, 2, 'B4'),
(123, 2, 'B5'),
(124, 2, 'B6'),
(125, 2, 'B7'),
(126, 2, 'B8'),
(127, 2, 'B9'),
(128, 2, 'B10'),
(129, 2, 'C1'),
(130, 2, 'C2'),
(131, 2, 'C3'),
(132, 2, 'C4'),
(133, 2, 'C5'),
(134, 2, 'C6'),
(135, 2, 'C7'),
(136, 2, 'C8'),
(137, 2, 'C9'),
(138, 2, 'C10'),
(139, 2, 'D1'),
(140, 2, 'D2'),
(141, 2, 'D3'),
(142, 2, 'D4'),
(143, 2, 'D5'),
(144, 2, 'D6'),
(145, 2, 'D7'),
(146, 2, 'D8'),
(147, 2, 'D9'),
(148, 2, 'D10'),
(149, 2, 'E1'),
(150, 2, 'E2'),
(151, 2, 'E3'),
(152, 2, 'E4'),
(153, 2, 'E5'),
(154, 2, 'E6'),
(155, 2, 'E7'),
(156, 2, 'E8'),
(157, 2, 'E9'),
(158, 2, 'E10'),
(159, 2, 'F1'),
(160, 2, 'F2'),
(161, 2, 'F3'),
(162, 2, 'F4'),
(163, 2, 'F5'),
(164, 2, 'F6'),
(165, 2, 'F7'),
(166, 2, 'F8'),
(167, 2, 'F9'),
(168, 2, 'F10'),
(169, 2, 'G1'),
(170, 2, 'G2'),
(171, 2, 'G3'),
(172, 2, 'G4'),
(173, 2, 'G5'),
(174, 2, 'G6'),
(175, 2, 'G7'),
(176, 2, 'G8'),
(177, 2, 'G9'),
(178, 2, 'G10'),
(179, 2, 'H1'),
(180, 2, 'H2'),
(181, 2, 'H3'),
(182, 2, 'H4'),
(183, 2, 'H5'),
(184, 2, 'H6'),
(185, 2, 'H7'),
(186, 2, 'H8'),
(187, 2, 'H9'),
(188, 2, 'H10'),
(189, 2, 'I1'),
(190, 2, 'I2'),
(191, 2, 'I3'),
(192, 2, 'I4'),
(193, 2, 'I5'),
(194, 2, 'I6'),
(195, 2, 'I7'),
(196, 2, 'I8'),
(197, 2, 'I9'),
(198, 2, 'I10'),
(199, 2, 'J1'),
(200, 2, 'J2'),
(201, 2, 'J3'),
(202, 2, 'J4'),
(203, 2, 'J5'),
(204, 2, 'J6'),
(205, 2, 'J7'),
(206, 2, 'J8'),
(207, 2, 'J9'),
(208, 2, 'J10'),
(209, 3, 'A1'),
(210, 3, 'A2'),
(211, 3, 'A3'),
(212, 3, 'A4'),
(213, 3, 'A5'),
(214, 3, 'A6'),
(215, 3, 'A7'),
(216, 3, 'A8'),
(217, 3, 'A9'),
(218, 3, 'A10'),
(219, 3, 'B1'),
(220, 3, 'B2'),
(221, 3, 'B3'),
(222, 3, 'B4'),
(223, 3, 'B5'),
(224, 3, 'B6'),
(225, 3, 'B7'),
(226, 3, 'B8'),
(227, 3, 'B9'),
(228, 3, 'B10'),
(229, 3, 'C1'),
(230, 3, 'C2'),
(231, 3, 'C3'),
(232, 3, 'C4'),
(233, 3, 'C5'),
(234, 3, 'C6'),
(235, 3, 'C7'),
(236, 3, 'C8'),
(237, 3, 'C9'),
(238, 3, 'C10'),
(239, 3, 'D1'),
(240, 3, 'D2'),
(241, 3, 'D3'),
(242, 3, 'D4'),
(243, 3, 'D5'),
(244, 3, 'D6'),
(245, 3, 'D7'),
(246, 3, 'D8'),
(247, 3, 'D9'),
(248, 3, 'D10'),
(249, 3, 'E1'),
(250, 3, 'E2'),
(251, 3, 'E3'),
(252, 3, 'E4'),
(253, 3, 'E5'),
(254, 3, 'E6'),
(255, 3, 'E7'),
(256, 3, 'E8'),
(257, 3, 'E9'),
(258, 3, 'E10'),
(259, 3, 'F1'),
(260, 3, 'F2'),
(261, 3, 'F3'),
(262, 3, 'F4'),
(263, 3, 'F5'),
(264, 3, 'F6'),
(265, 3, 'F7'),
(266, 3, 'F8'),
(267, 3, 'F9'),
(268, 3, 'F10'),
(269, 3, 'G1'),
(270, 3, 'G2'),
(271, 3, 'G3'),
(272, 3, 'G4'),
(273, 3, 'G5'),
(274, 3, 'G6'),
(275, 3, 'G7'),
(276, 3, 'G8'),
(277, 3, 'G9'),
(278, 3, 'G10'),
(279, 3, 'H1'),
(280, 3, 'H2'),
(281, 3, 'H3'),
(282, 3, 'H4'),
(283, 3, 'H5'),
(284, 3, 'H6'),
(285, 3, 'H7'),
(286, 3, 'H8'),
(287, 3, 'H9'),
(288, 3, 'H10'),
(289, 3, 'I1'),
(290, 3, 'I2'),
(291, 3, 'I3'),
(292, 3, 'I4'),
(293, 3, 'I5'),
(294, 3, 'I6'),
(295, 3, 'I7'),
(296, 3, 'I8'),
(297, 3, 'I9'),
(298, 3, 'I10'),
(299, 3, 'J1'),
(300, 3, 'J2'),
(301, 3, 'J3'),
(302, 3, 'J4'),
(303, 3, 'J5'),
(304, 3, 'J6'),
(305, 3, 'J7'),
(306, 3, 'J8'),
(307, 3, 'J9'),
(308, 3, 'J10');

-- --------------------------------------------------------

--
-- Table structure for table `shows`
--

CREATE TABLE `shows` (
  `show_id` int(11) NOT NULL,
  `theatre_id` int(11) DEFAULT NULL,
  `title` varchar(150) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `duration` int(11) DEFAULT NULL,
  `age_rating` varchar(20) DEFAULT NULL,
  `image_name` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `shows`
--

INSERT INTO `shows` (`show_id`, `theatre_id`, `title`, `description`, `duration`, `age_rating`, `image_name`) VALUES
(1, 1, 'Οθέλλος', 'Μια σκοτεινή τραγωδία ζήλιας, πάθους και προδοσίας από τον William Shakespeare.', 120, '12+', 'othellos'),
(2, 3, 'Bacon', 'Μια έντονη θεατρική εμπειρία εμπνευσμένη από τη ζωή και την τέχνη του Francis Bacon.', 90, '15+', 'bacon'),
(3, 2, 'Ρωμαίος & Ιουλιέτα', 'Η κλασική ιστορία αγάπης του Ρωμαίου και της Ιουλιέτας με σύγχρονη σκηνοθετική ματιά.', 110, '12+', 'romeos');

-- --------------------------------------------------------

--
-- Table structure for table `showtimes`
--

CREATE TABLE `showtimes` (
  `showtime_id` int(11) NOT NULL,
  `show_id` int(11) DEFAULT NULL,
  `start_time` datetime DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `showtimes`
--

INSERT INTO `showtimes` (`showtime_id`, `show_id`, `start_time`, `price`) VALUES
(5, 1, '2026-08-06 20:00:00', 15.00),
(6, 1, '2026-08-07 21:00:00', 18.00),
(7, 1, '2026-08-13 20:00:00', 15.00),
(8, 1, '2026-08-14 21:00:00', 18.00),
(9, 2, '2026-08-06 19:30:00', 20.00),
(10, 2, '2026-08-07 20:30:00', 22.00),
(11, 2, '2026-08-13 19:30:00', 20.00),
(12, 2, '2026-08-14 20:30:00', 22.00),
(13, 3, '2026-08-06 18:00:00', 12.00),
(14, 3, '2026-08-07 18:00:00', 12.00),
(15, 3, '2026-08-13 18:00:00', 14.00),
(16, 3, '2026-08-14 18:00:00', 14.00);

-- --------------------------------------------------------

--
-- Table structure for table `theatres`
--

CREATE TABLE `theatres` (
  `theatre_id` int(11) NOT NULL,
  `name` varchar(150) DEFAULT NULL,
  `location` varchar(150) DEFAULT NULL,
  `description` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `theatres`
--

INSERT INTO `theatres` (`theatre_id`, `name`, `location`, `description`) VALUES
(1, 'Εθνικό Θέατρο', 'Αγίου Κωνσταντίνου 22, Αθήνα', 'Το Εθνικό Θέατρο αποτελεί έναν από τους σημαντικότερους πολιτιστικούς οργανισμούς της Ελλάδας.'),
(2, 'Βασιλικό Θέατρο', 'Θεσσαλονίκη', 'Το Βασιλικό Θέατρο φιλοξενεί μεγάλες θεατρικές παραγωγές στη Θεσσαλονίκη.'),
(3, 'Μέγαρο Μουσικής', 'Λεωφόρος Βασιλίσσης Σοφίας, Αθήνα', 'Το Μέγαρο Μουσικής Αθηνών είναι κέντρο πολιτισμού και παραστάσεων υψηλού επιπέδου.');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL,
  `username` varchar(100) NOT NULL,
  `email` varchar(150) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `username`, `email`, `password`, `created_at`) VALUES
(2, 'Cdoulis', 'chrisdoulisjr@gmail.com', '$2b$10$IrCEa8iqjW1Ge.jClu0SqezjCprBx4ArWl66XrG/65p30jMutAPfK', '2026-05-16 16:55:22'),
(3, 'Soul', 'doulis@gmail.com', '$2b$10$KuqoSmkpiwtJin0OPwf4F.QJi.IbfSVRGAPR/5AlQBUO6MKaBqQ0e', '2026-05-28 10:08:54');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `reservations`
--
ALTER TABLE `reservations`
  ADD PRIMARY KEY (`reservation_id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `showtime_id` (`showtime_id`),
  ADD KEY `seat_id` (`seat_id`);

--
-- Indexes for table `seats`
--
ALTER TABLE `seats`
  ADD PRIMARY KEY (`seat_id`),
  ADD KEY `theatre_id` (`theatre_id`);

--
-- Indexes for table `shows`
--
ALTER TABLE `shows`
  ADD PRIMARY KEY (`show_id`),
  ADD KEY `theatre_id` (`theatre_id`);

--
-- Indexes for table `showtimes`
--
ALTER TABLE `showtimes`
  ADD PRIMARY KEY (`showtime_id`),
  ADD KEY `show_id` (`show_id`);

--
-- Indexes for table `theatres`
--
ALTER TABLE `theatres`
  ADD PRIMARY KEY (`theatre_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `reservations`
--
ALTER TABLE `reservations`
  MODIFY `reservation_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT for table `seats`
--
ALTER TABLE `seats`
  MODIFY `seat_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=309;

--
-- AUTO_INCREMENT for table `shows`
--
ALTER TABLE `shows`
  MODIFY `show_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `showtimes`
--
ALTER TABLE `showtimes`
  MODIFY `showtime_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `theatres`
--
ALTER TABLE `theatres`
  MODIFY `theatre_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `reservations`
--
ALTER TABLE `reservations`
  ADD CONSTRAINT `reservations_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`),
  ADD CONSTRAINT `reservations_ibfk_2` FOREIGN KEY (`showtime_id`) REFERENCES `showtimes` (`showtime_id`),
  ADD CONSTRAINT `reservations_ibfk_3` FOREIGN KEY (`seat_id`) REFERENCES `seats` (`seat_id`);

--
-- Constraints for table `seats`
--
ALTER TABLE `seats`
  ADD CONSTRAINT `seats_ibfk_1` FOREIGN KEY (`theatre_id`) REFERENCES `theatres` (`theatre_id`);

--
-- Constraints for table `shows`
--
ALTER TABLE `shows`
  ADD CONSTRAINT `shows_ibfk_1` FOREIGN KEY (`theatre_id`) REFERENCES `theatres` (`theatre_id`);

--
-- Constraints for table `showtimes`
--
ALTER TABLE `showtimes`
  ADD CONSTRAINT `showtimes_ibfk_1` FOREIGN KEY (`show_id`) REFERENCES `shows` (`show_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
