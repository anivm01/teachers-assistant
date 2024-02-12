/*
  Warnings:

  - A unique constraint covering the columns `[slug]` on the table `DownloadableProduct` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[fileName]` on the table `File` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `slug` to the `DownloadableProduct` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `downloadableproduct` ADD COLUMN `slug` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `DownloadableProduct_slug_key` ON `DownloadableProduct`(`slug`);

-- CreateIndex
CREATE UNIQUE INDEX `File_fileName_key` ON `File`(`fileName`);
