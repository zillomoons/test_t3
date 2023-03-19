/*
  Warnings:

  - You are about to drop the column `view` on the `BuildOrder` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "BuildOrder" DROP COLUMN "view",
ADD COLUMN     "views" INTEGER NOT NULL DEFAULT 0;
