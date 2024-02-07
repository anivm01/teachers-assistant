/*
  Warnings:

  - You are about to drop the `_downloads` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `_downloads` DROP FOREIGN KEY `_Downloads_A_fkey`;

-- DropForeignKey
ALTER TABLE `_downloads` DROP FOREIGN KEY `_Downloads_B_fkey`;

-- DropTable
DROP TABLE `_downloads`;

-- CreateTable
CREATE TABLE `_Downloadable Products` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_Downloadable Products_AB_unique`(`A`, `B`),
    INDEX `_Downloadable Products_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_Downloadable Products` ADD CONSTRAINT `_Downloadable Products_A_fkey` FOREIGN KEY (`A`) REFERENCES `DownloadableProduct`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_Downloadable Products` ADD CONSTRAINT `_Downloadable Products_B_fkey` FOREIGN KEY (`B`) REFERENCES `File`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
