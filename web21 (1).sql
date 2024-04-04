-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 23, 2024 at 07:21 AM
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
-- Database: `web21`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `IdAdmin` varchar(10) NOT NULL,
  `NameAdmin` varchar(50) DEFAULT NULL,
  `PhoneAdmin` varchar(10) DEFAULT NULL,
  `EmailAdmin` varchar(100) DEFAULT NULL,
  `AddressAdmin` varchar(100) DEFAULT NULL,
  `GenderAdmin` tinyint(1) DEFAULT NULL,
  `UsernameAdmin` varchar(100) DEFAULT NULL,
  `PasswordAdmin` varchar(100) DEFAULT NULL,
  `RoleAdmin` int(3) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`IdAdmin`, `NameAdmin`, `PhoneAdmin`, `EmailAdmin`, `AddressAdmin`, `GenderAdmin`, `UsernameAdmin`, `PasswordAdmin`, `RoleAdmin`) VALUES
('Ad-001-001', 'Nguyễn Trọng Nghĩa', '090xxx', 'Nghia@gmail.com', 'Bình Chánh', 1, 'NghiaBC1st', 'BCmuonnam', 1),
('Ad-001-002', 'Egawa Masao ', '0906864425', 'masao@gmail.com', 'TP.HCM', 1, 'masaovippromax', 'BCso2', 1),
('Ad-002-001', 'Tăng Cẩm Minh', '0123445667', 'minh@gmail.com', 'TP.HCM', 1, 'minhcammuoitu', 'tangcamminh', 2),
('Ad-002-002', 'Võ Minh Thư', '098765432', 'minhthu@gmail.com', 'TP.HCM', 2, 'mthudiia', 'vominhthu', 2),
('Ad-003-001', 'Atem', '01666667', 'atem@gmail.com', 'Hà Nội', 2, 'atem123', 'atem123', 3),
('Ad-003-002', 'Nguyễn Văn A', '016354664', 'NguyenVanA@gmail.com', 'Bình Chánh', 1, 'NguyenVanA', 'VanA123', 3);

-- --------------------------------------------------------

--
-- Table structure for table `bill`
--

CREATE TABLE `bill` (
  `IdBill` varchar(10) NOT NULL,
  `IdCustomer` varchar(10) DEFAULT NULL,
  `IdProduct` varchar(10) DEFAULT NULL,
  `DateBuy` datetime DEFAULT NULL,
  `DateConform` datetime DEFAULT NULL,
  `TransportType` varchar(100) DEFAULT NULL,
  `TransportFee` double(10,2) DEFAULT NULL,
  `TotalPriceFinal` double(10,2) DEFAULT NULL,
  `TradingCodeCustomer` varchar(10) DEFAULT NULL,
  `TradingCodeAdmin` varchar(10) DEFAULT NULL,
  `SoldAmount` int(11) DEFAULT NULL,
  `NameProduct` varchar(100) DEFAULT NULL,
  `FullNameCustomer` varchar(100) DEFAULT NULL,
  `UserNameCustomer` varchar(100) DEFAULT NULL,
  `TotalPrice` double(10,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `cart`
--

CREATE TABLE `cart` (
  `IdCart` varchar(10) NOT NULL,
  `Amount` int(11) DEFAULT NULL,
  `TotalPrice` double(10,2) DEFAULT NULL,
  `IdCustomer` varchar(10) DEFAULT NULL,
  `IdProduct` varchar(10) DEFAULT NULL,
  `SoldAmount` int(11) DEFAULT NULL,
  `MainImage` blob DEFAULT NULL,
  `NameProduct` varchar(100) DEFAULT NULL,
  `FullNameCustomer` varchar(100) DEFAULT NULL,
  `UserNameCustomer` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `cate_id` varchar(20) NOT NULL,
  `cate_name` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`cate_id`, `cate_name`) VALUES
('B', 'Bàn dã ngoại'),
('BL', 'Balo - Túi xác Hiking'),
('BLD', 'Bộ lưu điện'),
('BV', 'Thiết bị bảo vệ - an toàn'),
('D', 'Đèn dã ngoại'),
('DH', 'Đệm hơi dã ngoại'),
('G', 'Ghế dã ngoại'),
('LT', 'Lều trại'),
('MLS', 'Máy lạnh - sưởi dã ngoại'),
('NA', 'Nấu ăn dã ngoại'),
('PK', 'Phụ kiện dã ngoại'),
('Q', 'Quạt dã ngoại'),
('TL', 'Tủ lạnh dã ngoại'),
('TN', 'Túi ngủ dã ngoại'),
('V', 'Võng dã ngoại');

-- --------------------------------------------------------

--
-- Table structure for table `customer`
--

CREATE TABLE `customer` (
  `IdCustomer` varchar(10) NOT NULL,
  `FullNameCustomer` varchar(50) DEFAULT NULL,
  `PhoneCustomer` varchar(10) DEFAULT NULL,
  `EmailCustomer` varchar(100) DEFAULT NULL,
  `AddressCustomer` varchar(100) DEFAULT NULL,
  `Date` datetime DEFAULT NULL,
  `DOB` date DEFAULT NULL,
  `Gender` tinyint(1) DEFAULT NULL,
  `UsernameCustomer` varchar(100) DEFAULT NULL,
  `PasswordCustomer` varchar(100) DEFAULT NULL,
  `RoleCustomer` int(3) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `customer`
--

INSERT INTO `customer` (`IdCustomer`, `FullNameCustomer`, `PhoneCustomer`, `EmailCustomer`, `AddressCustomer`, `Date`, `DOB`, `Gender`, `UsernameCustomer`, `PasswordCustomer`, `RoleCustomer`) VALUES
('Us-001-001', 'Nguyen Van A', '0123456789', 'nva@gmail.com', '123 Le Loi, Q1, HCM', '2024-03-20 13:50:04', '1990-01-01', 1, 'NVA@123', 'NguyenVanA12345', 1),
('Us-001-002', 'Tran Van G', '0123456789', 'tvg@gmail.com', '901 Le Van Sy, Q3, HCM', '2024-03-20 13:50:04', '1997-07-07', 1, 'GGdoccom', 'GGeo', 1),
('Us-001-003', 'Le Thi H', '0987654321', 'lth@gmail.com', '234 Pham Ngu Lao, Q1, HCM', '2024-03-20 13:50:04', '1998-08-08', 2, 'ThuNgu', 'hacamday', 1),
('Us-001-004', 'Pham Thi D', '0987654321', 'ptd@gmail.com', '012 Tran Hung Dao, Q5, HCM', '2024-03-20 13:50:04', '1994-04-04', 2, 'DDay9876', 'DickChan', 1),
('Us-002-001', 'Tran Thi B', '0987654321', 'ttb@gmail.com', '456 Nguyen Hue, Q3, HCM', '2024-03-20 13:50:04', '1992-02-02', 2, 'TTB123322', 'TranChan', 2),
('Us-002-002', 'Vo Van E', '0123456789', 'vve@gmail.com', '345 Le Duan, Q1, HCM', '2024-03-20 13:50:04', '1995-05-05', 1, 'E@456', 'Evanvo', 2),
('Us-002-003', 'Le Van C', '0123456789', 'lvc@gmail.com', '789 Hai Ba Trung, Q1, HCM', '2024-03-20 13:50:04', '1993-03-03', 1, 'LeDanC', 'nhinCC', 2),
('Us-002-004', 'Nguyen Thi F', '0987654321', 'ntf@gmail.com', '678 Tran Quoc Thao, Q3, HCM', '2024-03-20 13:50:04', '1996-06-06', 2, 'Fdaymn', 'Nguyenthif', 2),
('Us-002-005', 'Nguyen Van I', '0123456789', 'nvi@gmail.com', '567 Cach Mang Thang Tam, Q3, HCM', '2024-03-20 13:50:04', '1999-09-09', 1, 'III@333', 'Idaymn', 2),
('Us-002-006', 'Tran Thi J', '0987654321', 'ttj@gmail.com', '890 Le Hong Phong, Q5, HCM', '2024-03-20 13:50:04', '2000-10-10', 2, 'jaykechuyen', 'jkechyen', 2);

-- --------------------------------------------------------

--
-- Table structure for table `payment`
--

CREATE TABLE `payment` (
  `IdPayment` varchar(10) NOT NULL,
  `DateBuy` datetime DEFAULT NULL,
  `DateConform` datetime DEFAULT NULL,
  `Statement` int(3) DEFAULT NULL,
  `TransportType` varchar(50) DEFAULT NULL,
  `TotalPriceFinal` double(10,2) DEFAULT NULL,
  `IdCustomer` varchar(10) DEFAULT NULL,
  `TradingCodeCustomer` varchar(10) DEFAULT NULL,
  `TradingCodeAdmin` varchar(10) DEFAULT NULL,
  `IdProduct` varchar(10) DEFAULT NULL,
  `SoldAmount` int(11) DEFAULT NULL,
  `MainImage` blob DEFAULT NULL,
  `NameProduct` varchar(100) DEFAULT NULL,
  `FullNameCustomer` varchar(100) DEFAULT NULL,
  `UserNameCustomer` varchar(100) DEFAULT NULL,
  `TransportFee` double(10,2) DEFAULT NULL,
  `TotalPrice` double(10,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `IdProduct` varchar(10) NOT NULL,
  `NameProduct` varchar(100) DEFAULT NULL,
  `Brand` varchar(100) DEFAULT NULL,
  `Category` int(5) DEFAULT NULL,
  `Price` double(10,2) DEFAULT NULL,
  `Image` blob DEFAULT NULL,
  `small_Description` mediumtext CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `Description` text DEFAULT NULL,
  `Stock` int(11) DEFAULT NULL,
  `SoldAmount` int(11) DEFAULT NULL,
  `Sale` double(10,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`IdProduct`, `NameProduct`, `Brand`, `Category`, `Price`, `Image`, `small_Description`, `Description`, `Stock`, `SoldAmount`, `Sale`) VALUES
('44', '444', '44', 0, 444.00, 0x3430353535363134365f3334343835373134383135383239385f333431323032343639373232323535323137365f6e2e6a7067, '444', ' 44', 444, NULL, 444.00),
('7', '777', '77', 0, 777.00, 0x66363237386462636166333830363636356632392e6a7067, '777', ' 777', 77, NULL, 777.00),
('d', '111', '111', 0, 111.00, 0x51756f746566616e63792d3239353933392d3338343078323136302e6a7067, '8888', ' 888', 111, NULL, 111.00),
('dhdahs', 'fgdf', 'fxgxfg', 2, 55543443.00, 0x51756f746566616e63792d3239353933392d3338343078323136302e6a7067, '34343', ' 433434', 1, NULL, 34343.00),
('gcnfxgjdfh', 'sdghsfghsfghfsgh', 'fdgsdsdghsdhgsf', 2, 999.00, 0x51756f746566616e63792d3239353933392d3338343078323136302e6a7067, 'ỵtdghj', ' tjdgj', 999, NULL, 999.00),
('gdf', 'dfgd', '123', 0, 222.00, 0x616e68312e6a7067, '222', ' 333', 111, NULL, 333.00),
('jkhj', 'd', '0004', 2, 555.00, 0x51756f746566616e63792d3239353933392d3338343078323136302e6a7067, '5', ' 5', 555, NULL, 55.00),
('s', '8888', '88', 3, 88.00, 0x51756f746566616e63792d3239353933392d3338343078323136302e6a7067, '888', ' 88', 88, NULL, 888.00),
('sd', 'f', 'f', 0, 555.00, 0x51756f746566616e63792d3239353933392d3338343078323136302e6a7067, 'fsdf', ' sdfsd', 666, NULL, 333.00);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`IdAdmin`);

--
-- Indexes for table `bill`
--
ALTER TABLE `bill`
  ADD PRIMARY KEY (`IdBill`),
  ADD KEY `fk_IdCustomerBill` (`IdCustomer`),
  ADD KEY `fk_IdProductBill` (`IdProduct`);

--
-- Indexes for table `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`IdCart`),
  ADD KEY `fk_customer` (`IdCustomer`),
  ADD KEY `fk_product` (`IdProduct`);

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`cate_id`);

--
-- Indexes for table `customer`
--
ALTER TABLE `customer`
  ADD PRIMARY KEY (`IdCustomer`);

--
-- Indexes for table `payment`
--
ALTER TABLE `payment`
  ADD PRIMARY KEY (`IdPayment`),
  ADD KEY `fk_customer_payment` (`IdCustomer`),
  ADD KEY `fk_idproductpayment` (`IdProduct`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`IdProduct`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `bill`
--
ALTER TABLE `bill`
  ADD CONSTRAINT `fk_IdCustomerBill` FOREIGN KEY (`IdCustomer`) REFERENCES `customer` (`IdCustomer`),
  ADD CONSTRAINT `fk_IdProductBill` FOREIGN KEY (`IdProduct`) REFERENCES `product` (`IdProduct`);

--
-- Constraints for table `cart`
--
ALTER TABLE `cart`
  ADD CONSTRAINT `fk_customer` FOREIGN KEY (`IdCustomer`) REFERENCES `customer` (`IdCustomer`),
  ADD CONSTRAINT `fk_product` FOREIGN KEY (`IdProduct`) REFERENCES `product` (`IdProduct`);

--
-- Constraints for table `payment`
--
ALTER TABLE `payment`
  ADD CONSTRAINT `fk_customer_payment` FOREIGN KEY (`IdCustomer`) REFERENCES `customer` (`IdCustomer`),
  ADD CONSTRAINT `fk_idproductpayment` FOREIGN KEY (`IdProduct`) REFERENCES `product` (`IdProduct`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
