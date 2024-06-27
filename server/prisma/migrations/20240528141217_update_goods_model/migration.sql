-- AlterTable
ALTER TABLE "Goods" ADD COLUMN     "count" INTEGER NOT NULL DEFAULT 0;

-- CreateTable
CREATE TABLE "GoodsCharacteristic" (
    "id" SERIAL NOT NULL,
    "characteristicId" INTEGER NOT NULL,
    "goodsId" INTEGER NOT NULL,
    "name_En" TEXT NOT NULL,
    "name_Ua" TEXT NOT NULL,

    CONSTRAINT "GoodsCharacteristic_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Characteristic" (
    "id" SERIAL NOT NULL,
    "name_En" TEXT NOT NULL,
    "name_Ua" TEXT NOT NULL,

    CONSTRAINT "Characteristic_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "GoodsCharacteristic" ADD CONSTRAINT "GoodsCharacteristic_characteristicId_fkey" FOREIGN KEY ("characteristicId") REFERENCES "Characteristic"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GoodsCharacteristic" ADD CONSTRAINT "GoodsCharacteristic_goodsId_fkey" FOREIGN KEY ("goodsId") REFERENCES "Goods"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
