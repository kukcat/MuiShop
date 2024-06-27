/*
  Warnings:

  - You are about to drop the column `name_En` on the `GoodsCharacteristic` table. All the data in the column will be lost.
  - You are about to drop the column `name_Ua` on the `GoodsCharacteristic` table. All the data in the column will be lost.
  - Added the required column `value_En` to the `GoodsCharacteristic` table without a default value. This is not possible if the table is not empty.
  - Added the required column `value_Ua` to the `GoodsCharacteristic` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "GoodsCharacteristic" DROP COLUMN "name_En",
DROP COLUMN "name_Ua",
ADD COLUMN     "value_En" TEXT NOT NULL,
ADD COLUMN     "value_Ua" TEXT NOT NULL;
