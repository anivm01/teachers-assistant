/*
  Warnings:

  - Added the required column `downloadableProductId` to the `Category` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `category` ADD COLUMN `downloadableProductId` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `Category` ADD CONSTRAINT `Category_downloadableProductId_fkey` FOREIGN KEY (`downloadableProductId`) REFERENCES `DownloadableProduct`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
