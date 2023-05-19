/*
  Warnings:

  - Changed the type of `category` on the `Survey` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "Category" AS ENUM ('FRONTEND', 'BACKEND');

-- AlterTable
ALTER TABLE "Survey" DROP COLUMN "category",
ADD COLUMN     "category" "Category" NOT NULL;

-- DropEnum
DROP TYPE "Categoty";
