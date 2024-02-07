/*
  Warnings:

  - You are about to drop the column `downloadableProductId` on the `category` table. All the data in the column will be lost.
  - You are about to drop the column `downloadableProductId` on the `file` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[title]` on the table `DownloadableProduct` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[featuredImageId]` on the table `DownloadableProduct` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE `category` DROP FOREIGN KEY `Category_downloadableProductId_fkey`;

-- DropForeignKey
ALTER TABLE `file` DROP FOREIGN KEY `File_downloadableProductId_fkey`;

-- AlterTable
ALTER TABLE `category` DROP COLUMN `downloadableProductId`;

-- AlterTable
ALTER TABLE `downloadableproduct` ADD COLUMN `featuredImageId` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `downloadhistory` ADD COLUMN `downloadedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `file` DROP COLUMN `downloadableProductId`,
    ADD COLUMN `featuredImageId` VARCHAR(191) NULL;

-- CreateTable
CREATE TABLE `_CategoryToDownloadableProduct` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_CategoryToDownloadableProduct_AB_unique`(`A`, `B`),
    INDEX `_CategoryToDownloadableProduct_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_Downloads` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_Downloads_AB_unique`(`A`, `B`),
    INDEX `_Downloads_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `DownloadableProduct_title_key` ON `DownloadableProduct`(`title`);

-- CreateIndex
CREATE UNIQUE INDEX `DownloadableProduct_featuredImageId_key` ON `DownloadableProduct`(`featuredImageId`);

-- AddForeignKey
ALTER TABLE `DownloadableProduct` ADD CONSTRAINT `DownloadableProduct_featuredImageId_fkey` FOREIGN KEY (`featuredImageId`) REFERENCES `File`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_CategoryToDownloadableProduct` ADD CONSTRAINT `_CategoryToDownloadableProduct_A_fkey` FOREIGN KEY (`A`) REFERENCES `Category`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_CategoryToDownloadableProduct` ADD CONSTRAINT `_CategoryToDownloadableProduct_B_fkey` FOREIGN KEY (`B`) REFERENCES `DownloadableProduct`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_Downloads` ADD CONSTRAINT `_Downloads_A_fkey` FOREIGN KEY (`A`) REFERENCES `DownloadableProduct`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_Downloads` ADD CONSTRAINT `_Downloads_B_fkey` FOREIGN KEY (`B`) REFERENCES `File`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
