/*
  Warnings:

  - Added the required column `goodsUrlName` to the `Goods` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Goods" ADD COLUMN     "goodsUrlName" TEXT NOT NULL;
