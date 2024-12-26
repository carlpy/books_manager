-- CreateTable
CREATE TABLE `Users` (
    `user_id` INTEGER NOT NULL AUTO_INCREMENT,
    `first_name` VARCHAR(50) NOT NULL,
    `last_name` VARCHAR(50) NOT NULL,
    `email` VARCHAR(50) NOT NULL,
    `password` VARCHAR(100) NOT NULL,
    `profile_pic` BLOB NOT NULL,

    PRIMARY KEY (`user_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Books` (
    `book_id` VARCHAR(50) NOT NULL,
    `title` VARCHAR(50) NOT NULL,
    `authors` VARCHAR(50) NOT NULL,
    `published_date` VARCHAR(50) NOT NULL,
    `description` TEXT NOT NULL,
    `categories` VARCHAR(80) NOT NULL,
    `language` CHAR(2) NOT NULL,
    `thumbnail_url` VARCHAR(200) NOT NULL,
    `page_count` INTEGER NOT NULL,

    PRIMARY KEY (`book_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `reading_list` (
    `user_id` INTEGER NOT NULL,
    `book_id` VARCHAR(50) NOT NULL,
    `added_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `started_at` TIMESTAMP NULL,
    `finished_at` TIMESTAMP NULL,
    `current_pages` INTEGER NOT NULL,

    PRIMARY KEY (`user_id`, `book_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `book_notes` (
    `book_note_id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NOT NULL,
    `book_id` VARCHAR(50) NOT NULL,
    `title` VARCHAR(50) NOT NULL,
    `title_chapter` VARCHAR(50) NOT NULL,
    `text` TEXT NOT NULL,
    `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` TIMESTAMP NULL,

    PRIMARY KEY (`book_note_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `reading_list` ADD CONSTRAINT `reading_list_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `Users`(`user_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `reading_list` ADD CONSTRAINT `reading_list_book_id_fkey` FOREIGN KEY (`book_id`) REFERENCES `Books`(`book_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `book_notes` ADD CONSTRAINT `book_notes_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `Users`(`user_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `book_notes` ADD CONSTRAINT `book_notes_book_id_fkey` FOREIGN KEY (`book_id`) REFERENCES `Books`(`book_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
