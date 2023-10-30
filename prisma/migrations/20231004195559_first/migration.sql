/*
  Warnings:

  - Made the column `img` on table `Product` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "img2" TEXT,
ALTER COLUMN "img" SET NOT NULL;
