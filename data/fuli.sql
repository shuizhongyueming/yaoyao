-- phpMyAdmin SQL Dump
-- version 3.3.7
-- http://www.phpmyadmin.net
--
-- 主机: localhost
-- 生成日期: 2013 年 11 月 18 日 12:02
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
-- 表的结构 `fuli`
--

CREATE TABLE IF NOT EXISTS `fuli` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `url` varchar(255) NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '0',
  `cTime` datetime NOT NULL,
  `upTime` timestamp NOT NULL ON UPDATE CURRENT_TIMESTAMP,
  `level` tinyint(11) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=28 ;

--
-- 转存表中的数据 `fuli`
--

INSERT INTO `fuli` (`id`, `url`, `status`, `cTime`, `upTime`, `level`) VALUES
(14, 'fuli/0e24020031.jpg', 0, '2013-11-14 19:38:03', '2013-11-14 19:59:25', 1),
(15, 'fuli/1c950a78.jpg', 0, '2013-11-14 19:41:08', '2013-11-14 19:59:25', 1),
(16, 'fuli/1e30e924b.jpg', 0, '2013-11-14 19:41:08', '2013-11-14 19:59:25', 1),
(17, 'fuli/9d72a6059a77f.jpg', 0, '2013-11-14 19:41:08', '2013-11-14 19:59:25', 1),
(18, 'fuli/80cb39b.jpg', 0, '2013-11-14 19:41:08', '2013-11-14 19:59:25', 1),
(19, 'fuli/267f9e14d08f1b6.jpg', 0, '2013-11-14 19:41:08', '2013-11-14 19:59:25', 1),
(20, 'fuli/622762d0.jpg', 0, '2013-11-14 19:41:08', '2013-11-14 19:59:25', 1),
(21, 'fuli/a9d3f65dd5.jpg', 0, '2013-11-14 19:41:08', '2013-11-14 19:59:25', 1),
(22, 'fuli/aa182408be.jpg', 0, '2013-11-14 19:41:08', '2013-11-14 19:59:25', 1),
(23, 'fuli/b90e7b699f.jpg', 0, '2013-11-14 19:41:08', '2013-11-14 19:59:25', 1),
(24, 'fuli/b90e7bec54e7.jpg', 0, '2013-11-14 19:41:08', '2013-11-14 19:59:25', 1),
(25, 'fuli/f2deb99257e0c.jpg', 0, '2013-11-14 19:41:08', '2013-11-14 19:59:25', 1),
(26, 'fuli/f11f3a292.jpg', 0, '2013-11-14 19:41:08', '2013-11-14 19:59:25', 1),
(27, 'fuli/f703738.jpg', 0, '2013-11-14 19:41:08', '2013-11-14 19:59:25', 1);
