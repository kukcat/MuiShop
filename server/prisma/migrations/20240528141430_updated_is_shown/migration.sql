/*
  Warnings:

  - You are about to drop the column `isShow` on the `Goods` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Goods" DROP COLUMN "isShow",
ADD COLUMN     "isShown" BOOLEAN NOT NULL DEFAULT true;
