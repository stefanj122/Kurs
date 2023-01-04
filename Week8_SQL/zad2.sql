CREATE TABLE
    `customers` (
        `id` int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
        `name` varchar(255) NOT NULL,
        `addres` VARCHAR(255),
        `city` varchar(255),
        `phone` varchar(20) DEFAULT NULL,
        `created_at` DATETIME NOT NULL DEFAULT NOW(),
        `deleted_at` DATETIME DEFAULT NULL
    );

DROP TABLE customers;

INSERT INTO
    customers VALUE(
        NULL,
        'Pero',
        'Nikoel Tesle 2',
        'Beograd',
        '+381640078621',
        NOW(),
        NUll
    );

DELETE FROM `customers` WHERE id=2;

CREATE TABLE
    `todos_backups` (
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
SELECT
    NULL,
    todos.title,
    todos.deadline,
    todos.`status`,
    todos.`type`,
    todos.created_at,
    todos.updated_at,
    todos.deleted_at,
    todos.user_id
FROM todos;

CREATE TABLE
    IF NOT EXISTS weather (
        id int(11) not null auto_increment primary key,
        time datetime default null,
        temperature float(5) null,
        snowfall varchar(20) null
    );

DROP TABLE weather;