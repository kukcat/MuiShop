-- AlterTable
ALTER TABLE "Category" ADD COLUMN     "url" TEXT DEFAULT '';

-- AlterTable
ALTER TABLE "Goods" ALTER COLUMN "goodsUrlName" SET DEFAULT '';
