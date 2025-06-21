-- CreateEnum
CREATE TYPE "ServiceType" AS ENUM ('Normal', 'VIP');

-- CreateEnum
CREATE TYPE "PriceOptionType" AS ENUM ('Hourly', 'Weekly', 'Monthly');

-- AlterTable
ALTER TABLE "Service" ADD COLUMN     "type" "ServiceType" NOT NULL DEFAULT 'Normal';

-- CreateTable
CREATE TABLE "ServicePriceOption" (
    "id" SERIAL NOT NULL,
    "duration" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "type" "PriceOptionType" NOT NULL,
    "serviceId" INTEGER NOT NULL,

    CONSTRAINT "ServicePriceOption_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ServicePriceOption" ADD CONSTRAINT "ServicePriceOption_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "Service"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
