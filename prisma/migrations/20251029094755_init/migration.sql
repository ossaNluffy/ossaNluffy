/*
  Warnings:

  - You are about to drop the column `budgetFrom` on the `Event` table. All the data in the column will be lost.
  - You are about to drop the column `budgetTo` on the `Event` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Event" DROP COLUMN "budgetFrom",
DROP COLUMN "budgetTo";
