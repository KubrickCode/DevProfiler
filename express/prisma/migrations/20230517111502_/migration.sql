/*
  Warnings:

  - The values [FRONTEND,BACKEND] on the enum `Category` will be removed. If these variants are still used in the database, this will fail.
  - The values [LOCAL,GOOGLE,KAKAO,GITHUB] on the enum `Provider` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Category_new" AS ENUM ('FrontEnd', 'BackEnd');
ALTER TABLE "Survey" ALTER COLUMN "category" TYPE "Category_new" USING ("category"::text::"Category_new");
ALTER TYPE "Category" RENAME TO "Category_old";
ALTER TYPE "Category_new" RENAME TO "Category";
DROP TYPE "Category_old";
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "Provider_new" AS ENUM ('Local', 'Google', 'Kakao', 'Github');
ALTER TABLE "User" ALTER COLUMN "provider" TYPE "Provider_new" USING ("provider"::text::"Provider_new");
ALTER TYPE "Provider" RENAME TO "Provider_old";
ALTER TYPE "Provider_new" RENAME TO "Provider";
DROP TYPE "Provider_old";
COMMIT;
