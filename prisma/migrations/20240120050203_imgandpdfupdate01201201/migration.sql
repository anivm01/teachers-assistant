/*
  Warnings:

  - You are about to drop the column `description` on the `pdf` table. All the data in the column will be lost.
  - Added the required column `url` to the `Pdf` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `image` DROP FOREIGN KEY `Image_downloadableProductId_fkey`;

-- DropForeignKey
ALTER TABLE `pdf` DROP FOREIGN KEY `Pdf_downloadableProductId_fkey`;

-- AlterTable
ALTER TABLE `image` MODIFY `downloadableProductId` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `pdf` DROP COLUMN `description`,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `url` VARCHAR(191) NOT NULL,
    MODIFY `downloadableProductId` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `Pdf` ADD CONSTRAINT `Pdf_downloadableProductId_fkey` FOREIGN KEY (`downloadableProductId`) REFERENCES `DownloadableProduct`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Image` ADD CONSTRAINT `Image_downloadableProductId_fkey` FOREIGN KEY (`downloadableProductId`) REFERENCES `DownloadableProduct`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
