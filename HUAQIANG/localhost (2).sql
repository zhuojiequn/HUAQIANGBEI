-- phpMyAdmin SQL Dump
-- version 3.2.0.1
-- http://www.phpmyadmin.net
--
-- 主机: localhost
-- 生成日期: 2018 年 05 月 19 日 06:49
-- 服务器版本: 5.5.8
-- PHP 版本: 5.3.3

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- 数据库: `shopping-online`
--
CREATE DATABASE `shopping-online` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `shopping-online`;

-- --------------------------------------------------------

--
-- 表的结构 `admin`
--

CREATE TABLE IF NOT EXISTS `admin` (
  `buynum` int(10) DEFAULT NULL,
  `buysid` tinyint(40) NOT NULL,
  PRIMARY KEY (`buysid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- 转存表中的数据 `admin`
--

INSERT INTO `admin` (`buynum`, `buysid`) VALUES
(8, 16);

-- --------------------------------------------------------

--
-- 表的结构 `admin1`
--

CREATE TABLE IF NOT EXISTS `admin1` (
  `buynum` int(10) DEFAULT NULL,
  `buysid` tinyint(40) NOT NULL,
  PRIMARY KEY (`buysid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- 转存表中的数据 `admin1`
--

INSERT INTO `admin1` (`buynum`, `buysid`) VALUES
(4, 2),
(2, 10),
(1, 12),
(6, 14);

-- --------------------------------------------------------

--
-- 表的结构 `goods`
--

CREATE TABLE IF NOT EXISTS `goods` (
  `title1` varchar(50) CHARACTER SET utf8 NOT NULL,
  `title` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `price2` int(10) DEFAULT NULL,
  `price1` int(10) DEFAULT NULL,
  `sid` tinyint(40) NOT NULL AUTO_INCREMENT,
  `src` varchar(100) DEFAULT NULL,
  `classname` varchar(30) DEFAULT NULL,
  `phoneclass` varchar(20) CHARACTER SET utf8 DEFAULT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=17 ;

--
-- 转存表中的数据 `goods`
--

INSERT INTO `goods` (`title1`, `title`, `price2`, `price1`, `sid`, `src`, `classname`, `phoneclass`) VALUES
('官网秒杀', 'Apple/苹果 iPhone 7 Plus HK 海淘手机 黑色 128GB', 6988, 5499, 1, 'http://img15.hqbcdn.com/product/d4/b4/d4b41f6e152c8c2ea62b56ffa409548a.160.png', 'apple', 'Apple/苹果'),
('官网秒杀', 'Apple/苹果 iPhone X HK 海淘手机 64GB 深空灰色 ', 8988, 7099, 2, 'http://img5.hqbcdn.com/product/01/86/0186f4c8a53a4b27eab07c1917684afe.160.jpg', 'apple', 'Apple/苹果'),
('清仓商品', 'Apple/苹果 iPhone 7 HK 海淘手机 银色 128GB', 5688, 4399, 3, 'http://img14.hqbcdn.com/product/e8/1b/e81bd86fbfc42cbdf0f7f1c9acf4522a.160.png', 'apple', 'Apple/苹果'),
('新品上架', 'Apple/苹果 Apple iPad 9.7英寸 wifi版 HK 海淘平板 金色 32G', 2680, 2188, 4, 'http://img2.hqbcdn.com/product/d8/c0/d8c073f065f2f4724516e94129d7d578.160.jpg', 'apple', 'Apple/苹果'),
('新品上架', 'Apple/苹果 iPhone 8 plus HK 海淘手机 256GB 金色', 7980, 6699, 5, 'http://img6.hqbcdn.com/product/3f/b1/3fb166c4a2a626d2e2fa63613bac5a33.160.jpg', 'apple', 'Apple/苹果'),
('新品上架', 'appleApple/苹果 Apple iPad Pro 10.5英寸 wifi版 HK 海淘平板电', 5860, 4588, 6, 'http://img7.hqbcdn.com/product/0c/c6/0cc6ae62d1d587933b7decde11ee17d5.160.png', 'apple', 'Apple/苹果'),
('新品上架', 'Huawei/华为 荣耀9青春版 全网通 全面屏 双卡双待 手机 4GB+64GB 海鸥灰', 1798, 1488, 7, 'http://img9.hqbcdn.com/product/75/5f/755f0b4cc24138552e6f0a1092ecb43c.160.png', 'guohang', 'HUAWEI/华为'),
('官方限购', 'Huawei/华为 P20 Pro 全面屏徕卡三摄 全网通 移动联通电信手机 双卡双待 6GB +6', 4500, 4288, 8, 'http://img4.hqbcdn.com/product/ed/30/ed30716b13c18a44bc32760d3f5b9e64.160.png', 'guohang', 'HUAWEI/华为'),
('火爆商品', 'Huawei/华为 nova 2s 全网通 双卡双待 手机 6GB+64GB 浅艾蓝', 3000, 2670, 9, 'http://img10.hqbcdn.com/product/69/1a/691ab8c46e125fd0de7235d663aa6d51.160.png', 'guohang', 'HUAWEI/华为'),
('限时段秒杀', 'MI/小米 MIX2S 全面屏游戏手机 黑色 全网通 陶瓷双卡双待 6GB+128GB 白色', 4098, 3988, 10, 'http://img7.hqbcdn.com/product/c6/ce/c6ce7f8cfbf5fbb32a5c0b603aa681c6.160.png', 'guohang', 'XIAOMI/小米'),
('火爆商品', 'Huawei/华为 nova3e 全面屏手机 全网通 4GB+128GB 幻夜黑', 2499, 2199, 11, 'http://img11.hqbcdn.com/product/96/e2/96e25998db72bab67e1d5b9be4b07302.160.png', 'guohang', 'HUAWEI/华为'),
('火爆商品', '小米 s7 128G存储', 4288, 3698, 12, 'http://img14.hqbcdn.com/product/48/33/48334af9165450ae4c9399f49a6b6a69.160.jpg', 'guohang', 'XIAOMI/小米'),
('特价秒杀', 'MacBook 12英寸 2017款 深空灰', 8888, 10999, 13, 'http://img14.hqbcdn.com/activity/04/dc/04dcfb9321a24c26da3ba13416c19d0e.jpg', 'tehui', 'SANSUMG/三星'),
('秒杀特价', '三星 GALAXY S8', 4199, 5999, 14, 'http://img5.hqbcdn.com/activity/a8/8e/a88e2baa0fdcce7f35a20256085d9455.jpg', 'tehui', 'SANSUMG/三星'),
('特价秒杀', '换8换8，现货闪发', 5999, 6800, 15, 'http://img8.hqbcdn.com/activity/c1/27/c127f6b028c6fbf30324fc21b8c5e083.jpg', 'tehui', 'SANSUMG/三星'),
('火爆商品', 'MacBook Air 128G 2017款', 5899, 6789, 16, 'http://img8.hqbcdn.com/activity/47/c9/47c963106fb52e790bf3627b511ad397.jpg', 'tehui', 'iPad/苹果');

-- --------------------------------------------------------

--
-- 表的结构 `hots`
--

CREATE TABLE IF NOT EXISTS `hots` (
  `src` varchar(130) DEFAULT NULL,
  `href` varchar(130) NOT NULL DEFAULT '',
  PRIMARY KEY (`href`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- 转存表中的数据 `hots`
--

INSERT INTO `hots` (`src`, `href`) VALUES
('http://img5.hqbcdn.com/activity/da/a9/daa9ac96ad5af6f06685d4f2e0d3c753.jpg', 'http://stopic.okhqb.com/mqj18.html'),
('http://img2.hqbcdn.com/activity/82/8a/828a88afb6719ddc7f569370ccfe19a9.jpg', 'http://www.okhqb.com/item/1000125643.html'),
('http://img3.hqbcdn.com/activity/11/45/1145f32576175387116af02b10d56227.jpg', 'http://www.okhqb.com/item/1000125682.html');

-- --------------------------------------------------------

--
-- 表的结构 `indexslide`
--

CREATE TABLE IF NOT EXISTS `indexslide` (
  `src` varchar(130) DEFAULT NULL,
  `href` varchar(130) NOT NULL DEFAULT '',
  PRIMARY KEY (`href`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- 转存表中的数据 `indexslide`
--

INSERT INTO `indexslide` (`src`, `href`) VALUES
('http://img6.hqbcdn.com/activity/62/06/62065296130d8a978a5ccbc908066902.jpg', 'http://stopic.okhqb.com/mqj18.html'),
('http://img3.hqbcdn.com/activity/fc/1b/fc1b4bc50370fa6f7a0e73d37376166e.jpg', 'http://www.okhqb.com/item/1000125272.html'),
('http://img5.hqbcdn.com/activity/1d/1e/1d1e991e3d1d34a1d2cb70528b14f778.jpg', 'http://www.okhqb.com/item/1000125326.html'),
('http://img12.hqbcdn.com/activity/dc/57/dc57e76e602e16c8fca6d015bfbd6c9e.jpg', 'http://www.okhqb.com/item/1000125517.html'),
('http://img12.hqbcdn.com/activity/ce/db/cedb54b193c0444e0d26bf0ba638bbce.jpg', 'http://www.okhqb.com/item/1000125596.html'),
('http://img2.hqbcdn.com/activity/43/4b/434b0e1161b3a6f75c074f8cdf1c66f8.jpg', 'http://www.okhqb.com/item/1000125627.html');

-- --------------------------------------------------------

--
-- 表的结构 `iphoneclass`
--

CREATE TABLE IF NOT EXISTS `iphoneclass` (
  `name` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `href` varchar(130) DEFAULT NULL,
  `sid` tinyint(50) NOT NULL DEFAULT '0',
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- 转存表中的数据 `iphoneclass`
--

INSERT INTO `iphoneclass` (`name`, `href`, `sid`) VALUES
('iPad', '#', 0),
('iphone', '#', 1),
('Mac', '#', 2),
('iphone贴膜', '#', 3),
('iphone保护壳', '#', 4),
('ipod', '#', 5),
('iPad保护壳', '#', 6),
('苹果原装配件', '#', 7);

-- --------------------------------------------------------

--
-- 表的结构 `phoneclass`
--

CREATE TABLE IF NOT EXISTS `phoneclass` (
  `href` varchar(200) CHARACTER SET utf8 NOT NULL,
  `name` varchar(12) CHARACTER SET utf8 NOT NULL,
  `sid` tinyint(100) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=8 ;

--
-- 转存表中的数据 `phoneclass`
--

INSERT INTO `phoneclass` (`href`, `name`, `sid`) VALUES
('http://www.okhqb.com/list/137-2440_11813--1-.html?utml=zsfenlei', '华为', 1),
('http://www.okhqb.com/list/137-2440_25143--1-.html?utml=zsfenlei', '魅族', 2),
('http://www.okhqb.com/list/137-2440_1300009820--1-.html?utml=zsfenlei', '小米', 3),
('http://www.okhqb.com/sitemap.html', '酷派', 4),
('http://www.okhqb.com/list/137-2440_1300015465--1-.html?utml=zsfenlei', '美图', 5),
('http://www.okhqb.com/list/137-2440_1300008584--1-.html', '努比亚', 6),
('http://www.okhqb.com/list/137-2440_28247--1-.html', 'OPP', 7);

-- --------------------------------------------------------

--
-- 表的结构 `regyanzheng`
--

CREATE TABLE IF NOT EXISTS `regyanzheng` (
  `sid` tinyint(20) NOT NULL AUTO_INCREMENT,
  `number` varchar(10) DEFAULT NULL,
  `src` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=11 ;

--
-- 转存表中的数据 `regyanzheng`
--

INSERT INTO `regyanzheng` (`sid`, `number`, `src`) VALUES
(1, '42ey', 'https://login.okhqb.com/captcha/captchaImage.html?s=0.8212959517838709'),
(2, '44ax', 'https://login.okhqb.com/captcha/captchaImage.html?s=0.3669100647095014'),
(3, 'd5n7', 'https://login.okhqb.com/captcha/captchaImage.html?s=0.9691398649913023'),
(4, 'a7xm', 'https://login.okhqb.com/captcha/captchaImage.html?s=0.9691398649913022'),
(5, 'c3w4', 'https://login.okhqb.com/captcha/captchaImage.html?s=0.9691398649943022'),
(6, 'y7n5', 'https://login.okhqb.com/captcha/captchaImage.html?s=0.9691398642943022'),
(7, 'f67g', 'https://login.okhqb.com/captcha/captchaImage.html?s=0.9692398642943022'),
(8, 'bwx2', 'https://login.okhqb.com/captcha/captchaImage.html?s=0.9692398642993022'),
(9, 'dmge', 'https://login.okhqb.com/captcha/captchaImage.html?s=0.9692398642993011'),
(10, 'xan8', 'https://login.okhqb.com/captcha/captchaImage.html?s=0.9692398602993011');

-- --------------------------------------------------------

--
-- 表的结构 `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `password` varchar(40) DEFAULT NULL,
  `name` varchar(16) NOT NULL,
  `sid` tinyint(4) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=11 ;

--
-- 转存表中的数据 `users`
--

INSERT INTO `users` (`password`, `name`, `sid`) VALUES
('1', 'admin', 1),
('1', 'admin1', 2),
('q775852212', '13133780258', 3),
('q775852212', '13133780121', 4),
('12345678', '13133780121', 5),
('q775852212', '13120193282', 9),
('q775852212', '13133780121', 10);
