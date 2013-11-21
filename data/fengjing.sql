-- phpMyAdmin SQL Dump
-- version 3.3.7
-- http://www.phpmyadmin.net
--
-- 主机: localhost
-- 生成日期: 2013 年 11 月 18 日 11:56
-- 服务器版本: 5.6.12
-- PHP 版本: 5.3.27

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- 数据库: `yaoyao`
--

-- --------------------------------------------------------

--
-- 表的结构 `fengjing`
--

CREATE TABLE IF NOT EXISTS `fengjing` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `url` varchar(255) NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '0',
  `cTime` datetime NOT NULL,
  `upTime` timestamp NOT NULL ON UPDATE CURRENT_TIMESTAMP,
  `level` tinyint(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=13 ;

--
-- 转存表中的数据 `fengjing`
--

INSERT INTO `fengjing` (`id`, `url`, `status`, `cTime`, `upTime`, `level`) VALUES
(1, 'normal/Andromeda Galaxy.jpg', 1, '2013-11-14 10:38:08', '2013-11-14 19:57:46', 0),
(2, 'normal/Aurora (Server).jpg', 1, '2013-11-14 10:42:22', '2013-11-14 19:57:46', 0),
(3, 'normal/Beach.jpg', 1, '2013-11-14 10:45:37', '2013-11-14 19:57:46', 0),
(4, 'normal/Bristle Grass.jpg', 1, '2013-11-14 10:45:37', '2013-11-14 19:57:46', 0),
(5, 'normal/Cirques.jpg', 1, '2013-11-14 10:45:37', '2013-11-14 19:57:46', 0),
(6, 'normal/Ducks on a Misty Pond.jpg', 1, '2013-11-14 10:45:37', '2013-11-14 19:57:46', 0),
(7, 'normal/Eagle & Waterfall.jpg', 1, '2013-11-14 10:45:37', '2013-11-14 19:57:46', 0),
(8, 'normal/Earth Horizon.jpg', 1, '2013-11-14 10:45:37', '2013-11-14 19:57:46', 0),
(9, 'normal/Earth.jpg', 1, '2013-11-14 10:45:37', '2013-11-14 19:57:46', 0),
(10, 'normal/Flamingos.jpg', 1, '2013-11-14 10:45:37', '2013-11-14 19:57:46', 0),
(11, 'normal/Forest in Mist.jpg', 1, '2013-11-14 10:45:37', '2013-11-14 19:57:46', 0),
(12, 'normal/Grass Blades.jpg', 1, '2013-11-14 16:49:54', '2013-11-14 19:57:46', 0);
