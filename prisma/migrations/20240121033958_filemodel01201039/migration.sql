/*
  Warnings:

  - You are about to drop the column `pdfId` on the `downloadhistory` table. All the data in the column will be lost.
  - You are about to drop the `image` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `pdf` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `fileId` to the `DownloadHistory` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `category` DROP FOREIGN KEY `Category_downloadableProductId_fkey`;

-- DropForeignKey
ALTER TABLE `downloadhistory` DROP FOREIGN KEY `DownloadHistory_pdfId_fkey`;

-- DropForeignKey
ALTER TABLE `image` DROP FOREIGN KEY `Image_downloadableProductId_fkey`;

-- DropForeignKey
ALTER TABLE `pdf` DROP FOREIGN KEY `Pdf_downloadableProductId_fkey`;

-- AlterTable
ALTER TABLE `category` MODIFY `downloadableProductId` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `downloadhistory` DROP COLUMN `pdfId`,
    ADD COLUMN `fileId` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `image`;

-- DropTable
DROP TABLE `pdf`;

-- CreateTable
CREATE TABLE `File` (
    `id` VARCHAR(191) NOT NULL,
    `fileName` VARCHAR(191) NOT NULL,
    `url` VARCHAR(191) NOT NULL,
    `fileType` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `downloadableProductId` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Category` ADD CONSTRAINT `Category_downloadableProductId_fkey` FOREIGN KEY (`downloadableProductId`) REFERENCES `DownloadableProduct`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `File` ADD CONSTRAINT `File_downloadableProductId_fkey` FOREIGN KEY (`downloadableProductId`) REFERENCES `DownloadableProduct`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DownloadHistory` ADD CONSTRAINT `DownloadHistory_fileId_fkey` FOREIGN KEY (`fileId`) REFERENCES `File`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
