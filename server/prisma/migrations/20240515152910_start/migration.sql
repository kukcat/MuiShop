-- CreateTable
CREATE TABLE "Goods" (
    "id" SERIAL NOT NULL,
    "categoryID" INTEGER NOT NULL,
    "name_En" TEXT NOT NULL,
    "name_Ua" TEXT NOT NULL,
    "description_En" TEXT NOT NULL,
    "description_Ua" TEXT NOT NULL,
    "price_En" TEXT NOT NULL,
    "price_Ua" TEXT NOT NULL,
    "sale" INTEGER NOT NULL,
    "photo" TEXT NOT NULL,

    CONSTRAINT "Goods_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Category" (
    "id" SERIAL NOT NULL,
    "name_En" TEXT NOT NULL,
    "name_Ua" TEXT NOT NULL,
    "isOnBar" BOOLEAN NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Shelf" (
    "id" SERIAL NOT NULL,
    "name_En" TEXT NOT NULL,
    "name_Ua" TEXT NOT NULL,
    "goods" TEXT NOT NULL,

    CONSTRAINT "Shelf_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Goods" ADD CONSTRAINT "Goods_categoryID_fkey" FOREIGN KEY ("categoryID") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
