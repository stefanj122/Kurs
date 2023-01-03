CREATE TABLE `customers` (
  `id` int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` varchar(255),
  `addres` VARCHAR(255) NOT NULL,
  `city` varchar(255) NOT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `created_at` DATETIME,
  `deleted_at` DATETIME DEFAULT NULL
);
CREATE TABLE `todos_backups` (
	`id` BIGINT(20) UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
	`title` VARCHAR(255) NOT NULL,
	`deadline` DATETIME DEFAULT NULL,
	`status` TINYINT(1) DEFAULT 0 NOT NULL,
	`type` VARCHAR(255) DEFAULT 'todo' NOT NULL,
	`created_at` TIMESTAMP NULL DEFAULT NULL,
	`updated_at` TIMESTAMP NULL DEFAULT NULL,
	`deleted_at` TIMESTAMP NULL DEFAULT NULL,
	`user_id` BIGINT(20) UNSIGNED,
	FOREIGN KEY(user_id) REFERENCES users(id)
);
 INSERT INTO todos_backups
 SELECT NULL,todos.title,todos.deadline,todos.`status`,todos.`type`,todos.created_at,todos.updated_at,todos.deleted_at,todos.user_id
 FROM todos;
